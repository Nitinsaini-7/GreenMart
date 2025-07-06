import Order from "../models/order.js";
import Product from "../models/product.js";

export const placeOrderCOD = async (req, res) => {
  try {
    const { userId, items, address } = req.body;

    if (!address || items.length === 0) {
      return res.json({ success: false, message: "Invalid data" });
    }

    let amount = 0;
    const formattedItems = [];

    for (const item of items) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return res.json({ success: false, message: "Invalid product" });
      }

      amount += product.offerPrice * item.quantity;

      // Push item with product reference (as before), but also embed key fields
      formattedItems.push({
        product: product._id,
        quantity: item.quantity,
        name: product.name,
        image: product.image,
        offerPrice: product.offerPrice,
        category: product.category,
      });
    }

    // Add tax
    amount += Math.floor(amount * 0.02);

    await Order.create({
      userId,
      items: formattedItems,
      amount,
      address,
      paymentType: "COD",
    });

    return res.json({ success: true, message: "Order placed successfully" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};


export const getUserOrders = async (req, res) => {
  try {
    const userId = req.userId; // from auth middleware

    if (!userId) {
      return res.status(400).json({ success: false, message: "User not authorized" });
    }

    const orders = await Order.find({
      userId,
      $or: [{ paymentType: "COD" }, { isPaid: true }],
    })
      .populate("items.product")
      .sort({ createdAt: -1 });

    res.json({ success: true, orders });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};


// get all order for seller(admin)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      $or: [{ paymentType: "COD" }, { isPaid: true }],
    })
      .populate("items.product address")
      .sort({ createdAt: -1 });

    res.json({ success: true, orders });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

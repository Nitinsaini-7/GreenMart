// add address

import Address from "../models/address.js";

export const addAddress = async (req, res) => {
  try {
    const address = req.body;
    await Address.create({ ...address, userId: req.userId });
    res.json({ success: true, message: "Address added successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};



// get address 
export const getAddress = async (req, res)=>{
    try {
        const userId = req.userId;
        const addresses = await Address.find({userId})
        res.json({success:true, addresses})
    } catch (error) {
        console.log(error.message);
        res.json({success:false, message:error.message})
    }
} 
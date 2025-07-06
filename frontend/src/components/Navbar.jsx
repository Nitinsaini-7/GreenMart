import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const {
    user,
    setUser,
    setShowUserLogin,
    navigate,
    setSearchQuery,
    searchQuery,
    getCartAmount,
    getCartCount,
    axios,
  } = useAppContext();

  const handleLogout = async () => {
    try {
      const {data} = await axios.get('api/user/logout');
      if(data.success){
        toast.success(data.message)
        setUser(null);
        navigate('/')
      }else{
      toast.error(data.message)
        
      }
    } catch (error) {
      toast.error(error.message)
    }
    // // setShowUserLogin(false);
    // navigate("/");
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery]);

  return (
    <nav className="flex items-center z-10 justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <NavLink to="#" onClick={() => setOpen(false)}>
        <img className="h-9" src={assets.logo} alt="" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8 font-semibold text-lg">
        <NavLink className={({ isActive }) =>
      isActive
        ? "border-b-2 border-green-500 text-green-500 pb-1"
        : "text-gray-600 hover:text-green-500 transition"
    } to="/">Home</NavLink>
        <NavLink className={({ isActive }) =>
      isActive
        ? "border-b-2 border-green-500 text-green-500 pb-1"
        : "text-gray-600 hover:text-green-500 transition"
    } to="/about">About</NavLink>
        <NavLink className={({ isActive }) =>
      isActive
        ? "border-b-2 border-green-500 text-green-500 pb-1"
        : "text-gray-600 hover:text-green-500 transition"
    } to="/contact">Contact</NavLink>
        <NavLink className={({ isActive }) =>
      isActive
        ? "border-b-2 border-green-500 text-green-500 pb-1"
        : "text-gray-600 hover:text-green-500 transition"
    } to={"/products"}>All Products</NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt="" />
        </div>

        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <img src={assets.nav_cart_icon} alt="" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-green-500 w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>

        {!user ? (
          <button
            onClick={() => setShowUserLogin(true)}
            className="cursor-pointer px-8 py-2 bg-green-500 hover:bg-green-600 transition text-white rounded-full"
          >
            Login
          </button>
        ) : (
          <div className=" relative group">
            <img src={assets.profile_icon} className="w-10" alt="" />

            <ul className=" hidden group-hover:block absolute top-10 right-0 bg-white shadow-md rounded-md border border-gray-100 py-2.5 w-32 text-sm z-40  ">
              <li
                onClick={() => navigate("/my-orders")}
                className=" p-1.5 pl-3 hover:bg-slate-100 cursor-pointer"
              >
                My Orders
              </li>
              <li
                onClick={handleLogout}
                className=" p-1.5 pl-3 hover:bg-slate-100 cursor-pointer"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className=" flex items-center gap-6 sm:hidden">
        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <img src={assets.nav_cart_icon} alt="" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-green-500 w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>

        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className="sm:hidden"
        >
          {/* Menu Icon SVG */}
          <img src={assets.menu_icon} alt="" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-lg md:hidden`}
        >
          <NavLink to={"/"} className={({ isActive }) =>
      isActive
        ? "border-b-2 border-green-500 text-green-500 pb-1"
        : "text-gray-600 hover:text-green-500 transition"
    } onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to={"/about"} className={({ isActive }) =>
      isActive
        ? "border-b-2 border-green-500 text-green-500 pb-1"
        : "text-gray-600 hover:text-green-500 transition"
    } onClick={() => setOpen(false)}>
            About
          </NavLink>
          <NavLink to={"/contact"} className={({ isActive }) =>
      isActive
        ? "border-b-2 border-green-500 text-green-500 pb-1"
        : "text-gray-600 hover:text-green-500 transition"
    } onClick={() => setOpen(false)}>
            Contact
          </NavLink>
          <NavLink to={"/products"}>All Products</NavLink>
          {user && (
            <NavLink  to={"/my-orders"} className={({ isActive }) =>
      isActive
        ? "border-b-2 border-green-500 text-green-500 pb-1"
        : "text-gray-600 hover:text-green-500 transition"
    } onClick={() => setOpen(false)}>
              My Orders
            </NavLink>
          )}

          {!user ? (
            <button
              onClick={() => {
                setOpen(false);
                setShowUserLogin(true);
              }}
              className="cursor-pointer px-6 py-2 mt-2 bg-green-500 hover:bg-green-600 transition text-white rounded-full text-lg w-full"
            >
              Login
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="cursor-pointer px-6 py-2 mt-2 bg-green-500 hover:bg-green-600 transition text-white rounded-full text-lg w-full"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

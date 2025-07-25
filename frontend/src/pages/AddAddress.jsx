import { useState } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import { useEffect } from "react";

const InputField = ({ type, placeholder, name, handleChange, address }) => (
  <input
    className="w-full px-2 py-2 border border-gray-500 rounded outline-none text-gray-500 focus:border-green-500 transition"
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address[name]}
    required
  />
);

const AddAddress = () => {
  const {axios, navigate, user} = useAppContext();
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post('/api/address/add', {...address});
      if(data.success){
        toast.success(data.message);
        navigate('/cart');
    }else{
      console.log(data.message);
      
        toast.error(data.message);
      }
    }
     catch (error) {
      toast.error(error.message);
    }
    // Add your form submission logic here

  };

  useEffect(() => {
    if(!user){
      toast("Login Please")
      navigate('/cart')
    }
  },[])

  return (
    <div className="mt-16 pb-16">
      <p className="text-2xl text-gray-500">
        Add Shipping{" "}
        <span className="font-medium text-green-500">Address</span>
      </p>

      <div className=" flex flex-col-reverse md:flex-row justify-between mt-10">
        <div className=" flex-1 max-w-md">
          <form onSubmit={handleSubmit} className=" space-y-3 mt-6 text-sm">
            <div className=" grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name={"firstName"}
                type="text"
                placeholder={"First name"}
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name={"lastName"}
                type="text"
                placeholder={"Last name"}
              />
            </div>
            <InputField
              handleChange={handleChange}
              address={address}
              name={"email"}
              type={"email"}
              placeholder={"Enter Email"}
            />
            <InputField
              handleChange={handleChange}
              address={address}
              name={"street"}
              type={"text"}
              placeholder={"Street"}
            />

            <div className=" grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name={"city"}
                type="text"
                placeholder={"City"}
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name={"state"}
                type="text"
                placeholder={"State"}
              />
            </div>
            <div className=" grid grid-cols-2 gap-4">
              <InputField
                handleChange={handleChange}
                address={address}
                name={"zipcode"}
                type="number"
                placeholder={"Zip Code"}
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name={"country"}
                type="text"
                placeholder={"Country"}
              />
            </div>
            <InputField
              handleChange={handleChange}
              address={address}
              name={"phone"}
              type="number"
              placeholder={"Phone Number"}
            />

            <button className=" w-full mt-6 bg-green-500 text-white py-3 uppercase cursor-pointer">Save Address</button>
              </form>
        </div>
        <img src={assets.add_address_iamge} className="md:mr-16 mb-16" alt="" />
      </div>
    </div>
  );
};

export default AddAddress;

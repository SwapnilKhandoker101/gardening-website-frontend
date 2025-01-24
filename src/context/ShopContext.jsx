import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import axios from "axios";

export const ShopContext = createContext(); // passing props from parent to child

const ShopContextProvider = (props) => {
  const currency = "€";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");

  const [showSearch, setShowSearch] = useState(false);

  const [cartItem, setCartItems] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const fetchProducts=async () =>{
      try{
        const response=await axios.get("http://127.0.0.1:8000/api/products/")
        console.log("API Response:", response.data);
        setProducts(response.data)
      }catch(error){
        console.log('Error Fetching products',error)
        toast.error('Failed to load products.Please try again later')
      }
    };
    fetchProducts();
  },[])

  const addtoCart = async (itemId) => {
    // if(!size){
    //   toast.error('select size')
    //   return;
    // }
    let cartData = structuredClone(cartItem);

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = {};
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
  };

  // useEffect(()=>{
  //   console.log(cartItem)
  // }

  //   ,[cartItem])

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItem) {
      try {
        if (cartItem[items] > 0) {
          totalCount += cartItem[items];
        }
      } catch (error) {
        console.log(error);
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItem);

    cartData[itemId] = quantity;

    setCartItems(cartData);
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    addtoCart,
    getCartCount,
    updateQuantity
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;

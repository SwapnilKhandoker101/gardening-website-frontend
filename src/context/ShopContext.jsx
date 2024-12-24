import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext=createContext();// passing props from parent to child

const currency='€';
const delivery_fee=10;

const ShopContextProvider=(props)=>{
    const value={

        products,currency,delivery_fee

    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
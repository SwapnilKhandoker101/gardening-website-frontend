import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { productId } = useParams();

  console.log("Product ID from URL:", productId);
  const { products, currency, addtoCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const fetchProductData = () => {
    const product = products.find((item) => item.id === productId);
    console.log("Fetched Product:", product);
    if (product) {
      setProductData(product);
      setImage(product.image);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [products, productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row ">
        {/* product images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              ></img>
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/* product info: */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className="w-3 5" alt="" />
            <img src={assets.star_icon} className="w-3 5" alt="" />
            <img src={assets.star_icon} className="w-3 5" alt="" />
            <img src={assets.star_icon} className="w-3 5" alt="" />
            <img src={assets.star_dull_icon} className="w-3 5" alt="" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-green-700 md:w-4/5">
            {productData.descriptions}
          </p>
          <div className="my-8">
            <button
              onClick={() => addtoCart(productData._id)}
              className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
            >
              ADD TO CART
            </button>
            <hr className="mt-8 sm:w-4/5" />
            <div className="text-sm text-green-700 mt-5 flex flex-col gap-1">
              <p>100% Original product</p>
              <p>Cash on delivery is availabe on this product</p>
              <p>Easy return and exchange policy within 7 days</p>
            </div>
          </div>
        </div>
      </div>
      {/* descriptions and review sections: */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-green-700">
          <p>
            A great platform to buy nice plants and flowers with customaziation
            and many more.A great platform to buy nice plants and flowers with
            customaziation and many more.A great platform to buy nice plants and
            flowers with customaziation and many more.A great platform to buy
            nice plants and flowers with customaziation and many more.A great
            platform to buy nice plants and flowers with customaziation and many
            more.A great platform to buy nice plants and flowers with
            customaziation and many more.A great platform to buy nice plants and
            flowers with customaziation and many more
          </p>
          <p>
            {" "}
            flowers with customaziation and many more.A great platform to buy
            nice plants and flowers with customaziation and many more.A great
            platform to buy nice plants and flowers with customaziation and many
            more.A great platform to buy nice plants and flowers with
            customaziation and many more.A great platform to buy nice plants and
            flowers with customaziation and many more
          </p>
        </div>
      </div>

      {/* diplay related products: */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      ></RelatedProducts>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;

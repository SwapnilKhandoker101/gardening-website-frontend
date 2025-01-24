import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-green-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            soluta eveniet totam quasi maiores qui tempora exercitationem
            quaerat rem vero temporibus repellat expedita corrupti itaque vel
            odit aliquam, reprehenderit saepe.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 text-green-900">COMPANY</p>
          <ul className="flex flex-col gap-1 text-green-700">
            <li>Home</li>
            <li>About us </li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 text-green-900">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-1 text-green-700">
            <li>+4369689259555</li>
            <li>contact@greencorner.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center text-green-900">
          Copyright 2024@ GreenCorner.com - All Right reserved.{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;

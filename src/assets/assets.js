import mud from "./mud.jpg";
import plant1 from "./plant1.jpg";
import plant2 from "./plant2.jpg";
import plant3 from "./plant3.jpg";
import plant4 from "./plant4.jpg";
import banner from "./banner.jpg";
import plant5 from "./images.jpeg";
import pot2 from "./istockphoto-147092157-612x612.jpg";
import pot from "./pot.webp";

import logo from "./logo.png";
import cart_icon from "./cart_icon.png";
import bin_icon from "./bin_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import exchange_icon from "./exchange_icon.png";
import profile_icon from "./profile_icon.png";
import quality_icon from "./quality_icon.png";
import search_icon from "./search_icon.png";
import star_dull_icon from "./star_dull_icon.png";
import star_icon from "./star_icon.png";
import support_img from "./support_img.png";
import menu_icon from "./menu_icon.png";
import about_img from "./about_image.webp";
import contact_img from "./contact_img.png";
import mastercard from "./mastercard.png";
import stripe_logo from "./stripe_logo.png";
import cross_icon from "./cross_icon.png";

export const assets = {
  mud,
  plant1,
  plant2,
  plant3,
  plant4,
  plant5,
  banner,
  pot2,
  pot,
  logo,
  cart_icon,
  dropdown_icon,
  exchange_icon,
  profile_icon,
  quality_icon,
  search_icon,
  star_dull_icon,
  star_icon,
  bin_icon,
  support_img,
  menu_icon,
  about_img,
  contact_img,
  stripe_logo,
  cross_icon,
  mastercard,
};

export const products = [
  {
    _id: "123a",
    name: "Plant 1",
    descriptions:
      "Beautiful indoor plant to enhance home decor and purify air.",
    price: 10,
    image: [plant1, plant2, plant3],
    category: "Plant",
    subCategory: "Indoor",
    date: "23/12/2024",
    bestseller: true,
  },
  {
    _id: "123b",
    name: "Mud",
    descriptions:
      "High-quality gardening mud perfect for various planting needs.",
    price: 15,
    image: [mud, plant1, plant2, plant3],
    category: "Substances",
    subCategory: "Tools",
    date: "23/12/2024",
    bestseller: false,
  },
  {
    _id: "123c",
    name: "Plant 2",
    descriptions: "Outdoor plant perfect for gardens and landscaping.",
    price: 20,
    image: [plant1, plant2, plant3],
    category: "Plant",
    subCategory: "Outdoor",
    date: "23/12/2024",
    bestseller: true,
  },
  {
    _id: "123d",
    name: "Plant 3",
    descriptions:
      "Beautiful indoor plant to enhance home decor and purify air.",
    price: 12,
    image: [plant3],
    category: "Plant",
    subCategory: "Indoor",
    date: "23/12/2024",
    bestseller: true,
  },
  {
    _id: "123e",
    name: "Plant 4",
    descriptions:
      "A vibrant outdoor plant ideal for adding color to your garden.",
    price: 18,
    image: [plant4],
    category: "Plant",
    subCategory: "Outdoor",
    date: "23/12/2024",
    bestseller: false,
  },
  {
    _id: "123f",
    name: "Plant 5",
    descriptions:
      "An indoor plant that purifies air and adds a touch of nature.",
    price: 25,
    image: [plant5],
    category: "Plant",
    subCategory: "Indoor",
    date: "23/12/2024",
    bestseller: true,
  },
  {
    _id: "123g",
    name: "Banner",
    descriptions:
      "A decorative indoor plant to brighten any room with its beauty.",
    price: 30,
    image: [banner],
    category: "Plant",
    subCategory: "Indoor",
    date: "23/12/2024",
    bestseller: false,
  },
  {
    _id: "123h",
    name: "Pot 2",
    descriptions: "A durable and stylish pot suitable for various plant types.",
    price: 8,
    image: [pot2],
    category: "Tools",
    subCategory: "Tools",
    date: "23/12/2024",
    bestseller: true,
  },
  {
    _id: "123i",
    name: "Pot",
    descriptions:
      "A modern and elegant pot, perfect for showcasing your plants.",
    price: 15,
    image: [pot],
    category: "Tools",
    subCategory: "Tools",
    date: "23/12/2024",
    bestseller: false,
  },
];

import hrx from "../../assets/hrx.webp"
import puma from "../../assets/puma.jpg"
import nike from "../../assets/nike.jpeg"
import adidas from "../../assets/adidas.jpg"
import being from "../../assets/being.jpg"
import killer from "../../assets/killer.jpg"
import shoe from "../../assets/shoe.png"
import shirt from "../../assets/shirt2.jpg"
import tshirt from "../../assets/tshirt.jpg"
import pant from "../../assets/pant.avif"
import belt from "../../assets/belt.jpg"
import kurta from "../../assets/kurta.webp"
import womenTshirt from "../../assets/women-tshirt.jpg"
import womenKurti from "../../assets/women-kurti.jpg"
import womenShirt from "../../assets/women-shirt.jpg"
import womenHrx from "../../assets/women-hrx.webp"
import womenPuma from "../../assets/women-puma.webp"
export const menBrand = () => {
    return [{ gender: "men", brand: "hrx", poster: hrx }, { gender: "men", brand: "puma", poster: puma }, { gender: "men", brand: "nike", poster: nike }, { gender: "men", brand: "adidas", poster: adidas }, { gender: "men", brand: "beingHuman", poster: being }, { gender: "men", brand: "killer", poster: killer }]
        ;
};
export const mencatagory = () => {
    return [{ gender: "men", category: "shoe", poster: shoe }, { gender: "men", category: "shirt", poster: shirt }, { gender: "men", category: "pants", poster: pant }, { gender: "men", category: "belt", poster: belt }, { gender: "men", category: "kurta", poster: kurta }, { gender: "men", category: "t-shirt", poster: tshirt }];

};
export const womenBrand = () => {
    return [{ gender: "women", brand: "hrx", poster: womenHrx }, { gender: "women", brand: "puma", poster: womenPuma }, { gender: "women", brand: "nike", poster: nike }, { gender: "women", brand: "adidas", poster: adidas }, { gender: "women", brand: "beingHuman", poster: being }, { gender: "women", brand: "killer", poster: killer }]
};
export const womenCatagory = () => {
    return [{ gender: "women", category: "shoe", poster: shoe }, { gender: "women", category: "shirt", poster: womenShirt }, { gender: "women", category: "pants", poster: pant }, { gender: "women", category: "belt", poster: belt }, { gender: "women", category: "kurta", poster: womenKurti }, { gender: "women", category: "t-shirt", poster: womenTshirt }];

};
export const Brand = () => {
    return [{ brand: "hrx", poster: hrx }, { brand: "puma", poster: womenPuma }, { brand: "nike", poster: nike }, { brand: "adidas", poster: adidas }, { brand: "beingHuman", poster: being }, { brand: "killer", poster: killer }]
};
export const Catagory = () => {
    return [{ category: "shoe", poster: shoe }, { category: "shirt", poster: womenShirt }, { category: "pants", poster: pant }, { category: "belt", poster: belt }, { category: "kurta", poster: womenKurti }, { category: "t-shirt", poster: tshirt }];

};


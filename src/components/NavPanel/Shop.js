import { NavLink } from "react-router-dom";
import WrapperForSection from "../Wrapper and Button/WrapperForSection";
import videoMaker from "../../photos/VideoMaker.jpg";
import lesson from "../../photos/lesson.jpg";
import Tshirt from "../../photos/T-shirt.jpg";
import Cap from "../../photos/Cap.jpg";
import Sleeves from "../../photos/Sleeves.jpg";
import Gloves from "../../photos/Gloves.jpg";
import { useEffect, useState } from "react";

export default function Shop() {
  const [categoryChecked, setCategoryChecked] = useState("Show All");
  const categorys = ["Accessories", "Online Services", "Clothes", "Show All"];
  const products = [
    {
      category: "Accessories",
      name: "Gloves",
      image: Gloves,
      price: 10,
      size: ["small", "medium"],
    },
    {
      category: "Online Services",
      name: "Volleyball Advice Mentorship",
      image: lesson,
      price: 95,
    },
    {
      category: "Online Services",
      name: "Create Video Highlights",
      image: videoMaker,
      price: 300,
    },
    { category: "Clothes", name: "Cap", image: Cap, price: 25, size: ["small", "medium", "larg"] },
    {
      category: "Clothes",
      name: "T-shirt",
      image: Tshirt,
      price: 30,
      size: ["XS", "S", "M", "L", "XL", "XXL"],
    },
    { category: "Clothes", name: "Sleeves", image: Sleeves, price: 20, size: ["small", "medium"] },
  ];
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  });

  const filteredProducts = products
    .filter((item) => (categoryChecked === "Show All" ? item : item.category === categoryChecked))
    .sort((a, b) => a.category > b.category);
  return (
    <WrapperForSection
      styleSection={{ backgroundColor: "#edecea" }}
      content={
        <div className="shop-content-wrapper">
          <h2>Shop</h2>
          <ul className="nested-category-children">
            {categorys.map((category) => (
              <li key={category}>
                <NavLink to={`/Shop`} onClick={() => setCategoryChecked(category)}>
                  {category}
                </NavLink>
                <span>|</span>
              </li>
            ))}
          </ul>
          <div className="product-flex-container">
            <div className="list-grid">
              {filteredProducts.map((category) => (
                <div key={category.name} className="product">
                  <NavLink to={`/Shop/${category.name}`}>
                    <div className="product-image-wrapper">
                      <div className="grid-image-wrapper">
                        <img src={category.image} alt="" />
                      </div>
                    </div>
                    <div className="product-prise-name-wrapper">
                      <h4 className="product-name">{category.name}</h4>
                      <div className="product-prise">$ {category.price}.00</div>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    />
  );
}

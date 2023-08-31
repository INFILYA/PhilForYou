import { NavLink } from "react-router-dom";
import WrapperForSection from "../Wrapper and Button/WrapperForSection";
import { useEffect, useState } from "react";

export default function Shop() {
  const [categoryChecked, setCategoryChecked] = useState("Show All");
  const categorys = ["Accessories", "Online Services", "Clothes", "Shoes", "Show All"];
  const products = [
    {
      category: "Accessories",
      name: "Gloves",
      image: "/photos/Gloves.jpg",
      price: 10,
      size: ["small", "medium"],
      description: "Perfect Choice for every athlete",
      features: ["some Text"],
    },
    {
      category: "Online Services",
      name: "Phil For You Mentorship",
      image: "/photos/lesson.jpg",
      price: 95,
      description: "",
      features: ["some Text"],
    },
    {
      category: "Online Services",
      name: "Create Video Highlights",
      image: "/photos/VideoMaker.jpg",
      price: 300,
      description: "",
      features: ["some Text"],
    },
    {
      category: "Clothes",
      name: "Cap",
      image: "/photos/Cap.jpg",
      price: 25,
      size: ["small", "medium", "larg"],
      description: "",
      features: ["some Text"],
    },
    {
      category: "Clothes",
      name: "T-shirt",
      image: "/photos/T-shirt.jpg",
      price: 30,
      size: ["XS", "S", "M", "L", "XL", "XXL"],
      description: "",
      features: ["some Text"],
    },
    {
      category: "Shoes",
      name: "Curry 10",
      image: "/photos/Curry 10.jpg",
      price: 120,
      size: ["7", "8", "9", "10", "11", "12", "13"],
      description: "",
      features: ["some Text"],
    },
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

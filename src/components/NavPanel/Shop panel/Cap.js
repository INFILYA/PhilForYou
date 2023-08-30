import WrapperForSection from "../../Wrapper and Button/WrapperForSection";
import cap from "../../../photos/Cap.jpg";
import AddToCart from "../../Wrapper and Button/AddToCart";
import Button from "../../Wrapper and Button/Button";
import { NavLink } from "react-router-dom";

export default function Cap() {
  const product = JSON.parse(localStorage.getItem("products")).find((item) => item.name === "Cap");
  return (
    <WrapperForSection
      content={
        <>
          <NavLink to={`/Shop`}>
            <Button text={"Back to Shop"} type={"text"} />
          </NavLink>
          <div className="product-shop-wrapper">
            <img src={cap} alt="" />
          </div>
          <AddToCart product={product} />
        </>
      }
    />
  );
}

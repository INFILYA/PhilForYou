import WrapperForSection from "../../Wrapper and Button/WrapperForSection";
import gloves from "../../../photos/Gloves.jpg";
import AddToCart from "../../Wrapper and Button/AddToCart";
import { NavLink } from "react-router-dom";
import Button from "../../Wrapper and Button/Button";

export default function Gloves() {
  const product = JSON.parse(localStorage.getItem("products")).find(
    (item) => item.name === "Gloves"
  );
  return (
    <WrapperForSection
      content={
        <>
                  <NavLink to={`/Shop`}>
            <Button text={"Back to Shop"} type={"text"} />
          </NavLink>
          <div className="product-shop-wrapper">
            <img src={gloves} alt="" style={{ width: "100%" }} />
          </div>
          <AddToCart product={product} />
        </>
      }
    />
  );
}

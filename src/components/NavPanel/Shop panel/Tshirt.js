import WrapperForSection from "../../Wrapper and Button/WrapperForSection";
import tShirt from "../../../photos/T-shirt.jpg";
import AddToCart from "../../Wrapper and Button/AddToCart";
import { NavLink } from "react-router-dom";
import Button from "../../Wrapper and Button/Button";

export default function Tshirt() {
  const product = JSON.parse(localStorage.getItem("products")).find(
    (item) => item.name === "T-shirt"
  );
  return (
    <WrapperForSection
      content={
        <>
                  <NavLink to={`/Shop`}>
            <Button text={"Back to Shop"} type={"text"} />
          </NavLink>
          <div className="product-shop-wrapper">
            <img src={tShirt} alt="" style={{ width: "100%" }} />
          </div>
          <AddToCart product={product} />
        </>
      }
    />
  );
}

import WrapperForSection from "../../Wrapper and Button/WrapperForSection";
import sleeves from "../../../photos/Sleeves.jpg";
import AddToCart from "../../Wrapper and Button/AddToCart";
import { NavLink } from "react-router-dom";
import Button from "../../Wrapper and Button/Button";

export default function Sleeves() {
  const product = JSON.parse(localStorage.getItem("products")).find(
    (item) => item.name === "Sleeves"
  );
  return (
    <WrapperForSection
      content={
        <>
                  <NavLink to={`/Shop`}>
            <Button text={"Back to Shop"} type={"text"} />
          </NavLink>
          <div className="product-shop-wrapper">
            <img src={sleeves} alt="" style={{ width: "100%" }} />
          </div>
          <AddToCart product={product} />
        </>
      }
    />
  );
}

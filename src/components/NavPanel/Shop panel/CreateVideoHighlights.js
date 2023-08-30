import WrapperForSection from "../../Wrapper and Button/WrapperForSection";
import videoMaker from "../../../photos/VideoMaker.jpg";
import AddToCart from "../../Wrapper and Button/AddToCart";
import { NavLink } from "react-router-dom";
import Button from "../../Wrapper and Button/Button";

export default function CreateVideoHighlights() {
  const product = JSON.parse(localStorage.getItem("products")).find(
    (item) => item.name === "Create Video Highlights"
  );
  return (
    <WrapperForSection
      content={
        <>
          <NavLink to={`/Shop`}>
            <Button text={"Back to Shop"} type={"text"} />
          </NavLink>
          <div className="product-shop-wrapper">
            <img src={videoMaker} alt="" />
          </div>
          <AddToCart product={product} />
        </>
      }
    />
  );
}

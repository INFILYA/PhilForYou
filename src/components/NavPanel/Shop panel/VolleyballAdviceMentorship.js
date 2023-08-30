import WrapperForSection from "../../Wrapper and Button/WrapperForSection";
import lesson from "../../../photos/lesson.jpg";
import AddToCart from "../../Wrapper and Button/AddToCart";
import { NavLink } from "react-router-dom";
import Button from "../../Wrapper and Button/Button";

export default function VolleyballAdviceMentorship() {
  const product = JSON.parse(localStorage.getItem("products")).find(
    (item) => item.name === "Volleyball Advice Mentorship"
  );
  return (
    <WrapperForSection
      content={
        <>
          <NavLink to={`/Shop`}>
            <Button text={"Back to Shop"} type={"text"} />
          </NavLink>
          <div className="product-shop-wrapper">
            <img src={lesson} alt="" />
          </div>
          <AddToCart product={product} />
        </>
      }
    />
  );
}

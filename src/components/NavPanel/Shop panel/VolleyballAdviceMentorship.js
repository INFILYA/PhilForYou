import WrapperForSection from "../../Wrapper and Button/WrapperForSection";
import lesson from "../../../photos/lesson.jpg";
import AddToCart from "../../Wrapper and Button/AddToCart";

export default function VolleyballAdviceMentorship() {
  const product = JSON.parse(localStorage.getItem("products")).find(
    (item) => item.name === "Volleyball Advice Mentorship"
  );
  return (
    <WrapperForSection
      content={
        <>
          <div className="product-shop-wrapper">
            <img src={lesson} alt="" />
          </div>
          <AddToCart product={product} />
        </>
      }
    />
  );
}

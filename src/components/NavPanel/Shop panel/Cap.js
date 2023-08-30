import WrapperForSection from "../../Wrapper and Button/WrapperForSection";
import cap from "../../../photos/Cap.jpg";
import AddToCart from "../../Wrapper and Button/AddToCart";

export default function Cap() {
  const product = JSON.parse(localStorage.getItem("products")).find((item) => item.name === "Cap");
  return (
    <WrapperForSection
      content={
        <>
          <div className="product-shop-wrapper">
            <img src={cap} alt="" />
          </div>
          <AddToCart product={product} />
        </>
      }
    />
  );
}

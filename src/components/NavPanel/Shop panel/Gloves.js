import WrapperForSection from "../../Wrapper and Button/WrapperForSection";
import gloves from "../../../photos/Gloves.jpg";
import AddToCart from "../../Wrapper and Button/AddToCart";

export default function Gloves() {
  const product = JSON.parse(localStorage.getItem("products")).find(
    (item) => item.name === "Gloves"
  );
  return (
    <WrapperForSection
      content={
        <>
          <div className="product-shop-wrapper">
            <img src={gloves} alt="" style={{ width: "100%" }} />
          </div>
          <AddToCart product={product} />
        </>
      }
    />
  );
}

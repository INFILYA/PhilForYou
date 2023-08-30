import WrapperForSection from "../../Wrapper and Button/WrapperForSection";
import sleeves from "../../../photos/Sleeves.jpg";
import AddToCart from "../../Wrapper and Button/AddToCart";

export default function Sleeves() {
  const product = JSON.parse(localStorage.getItem("products")).find(
    (item) => item.name === "Sleeves"
  );
  return (
    <WrapperForSection
      content={
        <>
          <div className="product-shop-wrapper">
            <img src={sleeves} alt="" style={{ width: "100%" }} />
          </div>
          <AddToCart product={product} />
        </>
      }
    />
  );
}

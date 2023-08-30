import WrapperForSection from "../../Wrapper and Button/WrapperForSection";
import tShirt from "../../../photos/T-shirt.jpg";
import AddToCart from "../../Wrapper and Button/AddToCart";

export default function Tshirt() {
  const product = JSON.parse(localStorage.getItem("products")).find(
    (item) => item.name === "T-shirt"
  );
  return (
    <WrapperForSection
      content={
        <>
          <div className="product-shop-wrapper">
            <img src={tShirt} alt="" style={{ width: "100%" }} />
          </div>
          <AddToCart product={product} />
        </>
      }
    />
  );
}

import WrapperForSection from "../../Wrapper and Button/WrapperForSection";
import AddToCart from "../../Wrapper and Button/AddToCart";

export default function Tshirt() {
  const product = JSON.parse(localStorage.getItem("products")).find(
    (item) => item.name === "T-shirt"
  );
  return (
    <WrapperForSection
      styleSection={{ backgroundColor: "#edecea" }}
      content={<AddToCart product={product} />}
    />
  );
}

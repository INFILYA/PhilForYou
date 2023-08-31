import WrapperForSection from "../../Wrapper and Button/WrapperForSection";
import AddToCart from "../../Wrapper and Button/AddToCart";

export default function Gloves() {
  const product = JSON.parse(localStorage.getItem("products")).find(
    (item) => item.name === "Gloves"
  );
  return (
    <WrapperForSection
      styleSection={{ backgroundColor: "#edecea" }}
      content={<AddToCart product={product} />}
    />
  );
}

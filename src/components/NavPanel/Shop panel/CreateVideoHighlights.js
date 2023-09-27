import WrapperForSection from "../../Wrapper and Button/WrapperForSection";
import AddToCart from "../../Wrapper and Button/AddToCart";

export default function CreateVideoHighlights() {
  const product = JSON.parse(localStorage.getItem("products")).find(
    (item) => item.name === "Create Video Highlights"
  );
  return <WrapperForSection content={<AddToCart product={product} />} />;
}

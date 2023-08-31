import WrapperForSection from "../../Wrapper and Button/WrapperForSection";
import AddToCart from "../../Wrapper and Button/AddToCart";

export default function VolleyballAdviceMentorship() {
  const product = JSON.parse(localStorage.getItem("products")).find(
    (item) => item.name === "Volleyball Advice Mentorship"
  );
  return (
    <WrapperForSection
      styleSection={{ backgroundColor: "#edecea" }}
      content={<AddToCart product={product} />}
    />
  );
}

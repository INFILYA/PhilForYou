import WrapperForSection from "../../Wrapper and Button/WrapperForSection";
import AddToCart from "../../Wrapper and Button/AddToCart";

export default function PhilForYouMentorship() {
  const product = JSON.parse(localStorage.getItem("products")).find(
    (item) => item.name === "Phil For You Mentorship"
  );
  return <WrapperForSection content={<AddToCart product={product} />} />;
}

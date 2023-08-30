import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "./Button";
import { setAddProductsQuantity } from "../../state/slices/cartProductsQuantitySlice";
import { setAddProductsPrice } from "../../state/slices/cartProductsPriceSlice";
import { setProduct } from "../../state/slices/cartTotalProductsSlice";

export default function AddToCart({ product }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  function sendProductInfo() {
    dispatch(setAddProductsQuantity(+count));
    dispatch(setAddProductsPrice(+product.price * +count));
    dispatch(setProduct({ ...product, quantity: +count, price: product.price * +count }));
  }
  return (
    <div>
      <label>Quantity</label>
      <div className="product-quantity-wrapper">
        <input
          type="number"
          onChange={(e) => setCount(e.target.value)}
          value={count}
          min={1}
        ></input>
      </div>
      <Button onClick={sendProductInfo} text={"Add to cart"} type={"text"} />
    </div>
  );
}

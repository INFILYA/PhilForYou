import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "./Button";
import { setAddProductsQuantity } from "../../state/slices/cartProductsQuantitySlice";
import { setAddProductsPrice } from "../../state/slices/cartProductsPriceSlice";
import { setProduct } from "../../state/slices/cartTotalProductsSlice";

export default function AddToCart({ product }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  function sendProductInfo() {
    if ((size === "" || size === "Select size") && isSizeExist) {
      alert("Unable to Add Item. Please select the Size option.");
      return;
    }
    dispatch(setAddProductsQuantity(+quantity));
    dispatch(setAddProductsPrice(+product.price * +quantity));
    dispatch(
      setProduct({
        ...product,
        quantity: +quantity,
        price: product.price * +quantity,
        size: size,
      })
    );
  }
  const isSizeExist = "size" in product;
  return (
    <div>
      {isSizeExist && (
        <div className="product-size-wrapper">
          <label>Size</label>
          <div>
            <select onChange={(e) => setSize(e.target.value)}>
              <option defaultValue="Select size">Select size</option>
              {product?.size.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      <div className="product-quantity-wrapper">
        <label>Quantity</label>
        <div>
          <input
            type="number"
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
            min={1}
          ></input>
        </div>
      </div>
      <Button onClick={sendProductInfo} text={"Add to cart"} type={"text"} />
    </div>
  );
}

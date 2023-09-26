import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "./Button";
import { setAddProductsQuantity } from "../../state/slices/cartProductsQuantitySlice";
import { setAddProductsPrice } from "../../state/slices/cartProductsPriceSlice";
import { setProduct } from "../../state/slices/cartTotalProductsSlice";
import { NavLink } from "react-router-dom";
import { later } from "../../utils/utilities";

export default function AddToCart({ product }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [addButtonText, setAddButtonText] = useState("Add to cart");
  async function sendProductInfo() {
    if ((size === "" || size === "Select size") && isSizeExist) {
      alert("Unable to Add Item. Please select the Size option.");
      return;
    }
    setIsLoading(!isLoading);
    setAddButtonText("Adding...");
    await later(1000);
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
    setAddButtonText("Added!");
    await later(1000);
    setIsLoading((prev) => !prev);
    setAddButtonText("Add to cart");
  }
  const isSizeExist = "size" in product;
  return (
    <>
      <div style={{ margin: "-4.6vmax 0 4.6vmax 0" }}>
        <NavLink to={`/Shop`}>
          <Button text={"Back to Shop"} type={"text"} />
        </NavLink>
      </div>
      <section className="product-item-summary">
        <div className="product-item-gallery">
          <img src={product.image} alt="" />
        </div>
        <div className="product-item-description">
          <h1>{product.name}</h1>
          <div className="product-price-wrapper">
            <div>$ {product.price}.00</div>
          </div>
          <div className="product-description-wrapper">
            <div>{product?.description}</div>
          </div>
          {isSizeExist && (
            <div className="product-size-wrapper">
              <div className="variant-option">
                <div className="label">Size:</div>
                <div className="variant-select-wrapper">
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
            </div>
          )}
          <div className="product-quantity-wrapper">
            <div className="label">Quantity</div>
            <div>
              <input
                type="number"
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
                min={1}
              ></input>
            </div>
          </div>
          <div>
            <Button
              onClick={sendProductInfo}
              text={addButtonText}
              type={"text"}
              disabled={isLoading}
              style={isLoading ? { opacity: 0.7 } : {}}
            />
          </div>
        </div>
      </section>
      <div className="product-item-additional">
        <div className="features-wrapper">
          <p>Features:</p>
          {product?.features.map((item) => (
            <ul key={item}>{item}</ul>
          ))}
        </div>
      </div>
    </>
  );
}

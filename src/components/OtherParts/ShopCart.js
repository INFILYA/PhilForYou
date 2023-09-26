import { useDispatch, useSelector } from "react-redux";
import WrapperForSection from "../Wrapper and Button/WrapperForSection";
import {
  setAddProductsPrice,
  setCartProductsPrice,
  setReduceProductsPrice,
  setRemoveProductPrice,
} from "../../state/slices/cartProductsPriceSlice";
import {
  setCardProductsQuantity,
  setMinusOneProductsQuantity,
  setPlusOneProductsQuantity,
  setRemoveProductQuantity,
} from "../../state/slices/cartProductsQuantitySlice";
import {
  setLocalStorageProducts,
  setProduct,
  setRemoveProductFromCart,
} from "../../state/slices/cartTotalProductsSlice";
import { NavLink } from "react-router-dom";
import Button from "../Wrapper and Button/Button";
import { doc, setDoc } from "firebase/firestore";
import { auth, dataBase } from "../../fire-base-config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import { later } from "../../utils/utilities";

export default function ShopCart() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [gratefullMessage, setGratefullMessage] = useState(false);
  const [isRegistratedUser] = useAuthState(auth);
  const cartTotalProducts = useSelector((state) => state.cartTotalProducts.cartTotalProducts);
  const totalPrice = useSelector((state) => state.cartProductsPrice.cartProductsPrice);
  const totalQuantity = useSelector((state) => state.cartProductsQuantity.cartProductsQuantity);
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const cartIsEmpty = cartTotalProducts.length;
  function increaseQuantityOfProduct(product) {
    dispatch(setAddProductsPrice(product.price / product.quantity));
    dispatch(setPlusOneProductsQuantity());
    dispatch(setProduct({ ...product, price: product.price / product.quantity, quantity: 1 }));
  }
  function reduceQuantityOfProduct(product) {
    dispatch(setReduceProductsPrice(product.price / product.quantity));
    dispatch(setMinusOneProductsQuantity());
    dispatch(setProduct({ ...product, price: -(product.price / product.quantity), quantity: -1 }));
  }
  function removeProductFromCart(product) {
    dispatch(setRemoveProductFromCart(product));
    dispatch(setRemoveProductQuantity(product.quantity));
    dispatch(setRemoveProductPrice(product.price));
  }

  let date = new Date();
  let options = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const Time = date.toLocaleDateString("en-GB", options);

  async function orderProducts() {
    try {
      setIsLoading(!isLoading);
      const cartOrders = doc(dataBase, `Order from: ${isRegistratedUser?.email}`, Time);
      await later(1500);
      await setDoc(cartOrders, {
        ...cartTotalProducts,
        userInfo: userInfo || isRegistratedUser?.email,
        totalPrice: totalPrice,
        totalQuantity: totalQuantity,
        id: auth?.currentUser?.uid,
      });
      dispatch(setLocalStorageProducts([]));
      dispatch(setCardProductsQuantity(0));
      dispatch(setCartProductsPrice(0));
      setIsLoading(!isLoading);
      setGratefullMessage(true);
      await later(4000);
      setGratefullMessage(false);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <WrapperForSection
      className={"shopCart-section"}
      content={
        <div className="super-cart-container">
          <h2>Shoping Cart</h2>
          {!cartIsEmpty ? (
            <div className="empty-cart">
              <div>
                {gratefullMessage ? (
                  <p>Thank you for choosing us! Soon manager will contact you.</p>
                ) : (
                  <p>The cart is empty</p>
                )}
              </div>
              <NavLink to={`/Shop`}>
                <Button text={"Start shoping"} type={"text"} />
              </NavLink>
            </div>
          ) : (
            <div className="cart-container">
              {cartTotalProducts.map((product) => (
                <div key={product.name + product.size} className="cart-row">
                  <div className="image-wrapper">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="product-name-size-wrapper">
                    <div className="product-name-wrapper">
                      <strong>{product.name}</strong>
                    </div>
                    {product.size && <div>Size: {product.size}</div>}
                  </div>
                  <div className="product-info-wrapper">
                    <div style={{ display: "flex", width: "100%" }}>
                      <div className="product-quantity-container">
                        <button
                          onClick={() => reduceQuantityOfProduct(product)}
                          disabled={product.quantity === 1}
                        >
                          <div>-</div>
                        </button>
                        <div className="quantity">{product.quantity}</div>
                        <button onClick={() => increaseQuantityOfProduct(product)}>
                          <div>+</div>
                        </button>
                      </div>
                      <div className="product-price-wrapper">
                        <div>$ {product.price}.00</div>
                      </div>
                      <div className="button-remove-wrapper">
                        <button onClick={() => removeProductFromCart(product)}>
                          <div>X</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="create-order-wrapper">
                <div>
                  <h3>Total Price: ${totalPrice}.00</h3>
                </div>
                <div>
                  <h3>Total Quantity: {totalQuantity}</h3>
                </div>
                <div>
                  {!isRegistratedUser ? (
                    <Button
                      text="To continue need to Subscribe"
                      onClick={orderProducts}
                      disabled={!isRegistratedUser}
                    />
                  ) : (
                    <Button
                      text={!isLoading ? "Check Out" : "Adding..."}
                      onClick={orderProducts}
                      disabled={isLoading}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      }
    />
  );
}

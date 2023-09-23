import { useDispatch, useSelector } from "react-redux";
import WrapperForSection from "../Wrapper and Button/WrapperForSection";
import {
  setAddProductsPrice,
  setReduceProductsPrice,
  setRemoveProductPrice,
} from "../../state/slices/cartProductsPriceSlice";
import {
  setMinusOneProductsQuantity,
  setPlusOneProductsQuantity,
  setRemoveProductQuantity,
} from "../../state/slices/cartProductsQuantitySlice";
import { setProduct, setRemoveProductFromCart } from "../../state/slices/cartTotalProductsSlice";
import { NavLink } from "react-router-dom";
import Button from "../Wrapper and Button/Button";

export default function ShopCart() {
  const dispatch = useDispatch();
  const cartTotalProducts = useSelector((state) => state.cartTotalProducts.cartTotalProducts);
  const totalPrice = useSelector((state) => state.cartProductsPrice.cartProductsPrice);
  const totalQuantity = useSelector((state) => state.cartProductsQuantity.cartProductsQuantity);
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
  return (
    <WrapperForSection
      className={"shopCart-section"}
      content={
        <div className="super-cart-container">
          <h2>Shoping Cart</h2>
          {!cartIsEmpty ? (
            <div className="empty-cart">
              <div>
                <p>The cart is empty</p>
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
                  <Button text={"Check Out"} />
                </div>
              </div>
            </div>
          )}
        </div>
      }
    />
  );
}

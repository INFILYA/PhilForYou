import { useDispatch, useSelector } from "react-redux";
import WrapperForSection from "../Wrapper and Button/WrapperForSection";
import {
  setAddProductsPrice,
  setReduceProductsPrice,
} from "../../state/slices/cartProductsPriceSlice";
import {
  setMinusOneProductsQuantity,
  setPlusOneProductsQuantity,
} from "../../state/slices/cartProductsQuantitySlice";
import { setProduct } from "../../state/slices/cartTotalProductsSlice";
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
  console.log(cartTotalProducts);
  return (
    <WrapperForSection
      styleSection={{ marginTop: "-3vw" }}
      content={
        <>
          <h3 style={{ marginTop: 0 }}>Shoping Cart</h3>
          {!cartIsEmpty ? (
            <>
              <div>
                <p>The cart is empty</p>
              </div>
              <NavLink to={`/Shop`}>
                <Button text={"Start shoping"} type={"text"} />
              </NavLink>
            </>
          ) : (
            <>
              <div>
                {cartTotalProducts.map((product) => (
                  <div key={product.name + product.size}>
                    <div>
                      Chosen Product: <strong>{product.name}</strong>
                    </div>
                    <div>
                      Quntity: <strong>{product.quantity}</strong>
                    </div>
                    {product.size && (
                      <div>
                        Size: <strong>{product.size}</strong>
                      </div>
                    )}
                    <div>
                      Price: <strong>$ {product.price}.00</strong>
                    </div>
                    <button onClick={() => increaseQuantityOfProduct(product)}>+</button>
                    <button
                      onClick={() => reduceQuantityOfProduct(product)}
                      disabled={product.quantity === 1}
                    >
                      -
                    </button>
                  </div>
                ))}
                <h3>Total Price: ${totalPrice}.00</h3>
                <h3>Total Quantity: {totalQuantity}</h3>
              </div>
            </>
          )}
        </>
      }
    />
  );
}

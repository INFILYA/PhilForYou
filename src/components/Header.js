import { NavLink } from "react-router-dom";
import Logo from "../photos/Logo.jpg";
import facebook from "../photos/facebook.jpg";
import shopCart from "../photos/shop-cart.jpg";
import instagram from "../photos/instagram.jpg";
import Button from "./Wrapper and Button/Button";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const [sandwichMenu, setSandwichMenu] = useState(false);
  const navItems = [
    "About me",
    "Lessons",
    "Highlight Video Maker",
    "Volley Camp",
    "Contact",
    "News",
    "Reviews",
    "Shop",
  ];
  const cartProductsQuantity = useSelector(
    (state) => state.cartProductsQuantity.cartProductsQuantity
  );
  function checkWidthOfWindow() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", checkWidthOfWindow);
    width > 767 ? setSandwichMenu(false) : setSandwichMenu(true);
    return () => {
      window.removeEventListener("resize", checkWidthOfWindow);
    };
  }, [width]);
  return (
    <>
      <div className="barWrapper">
        <div className="innerContainer">
          <div className="titleNavWrapper">
            <div className="logo">
              <NavLink to={"/"}>
                <img src={Logo} alt=""></img>
              </NavLink>
            </div>
            {!sandwichMenu && (
              <div className="navigation">
                <nav>
                  {navItems.map((item) => (
                    <NavLink to={`/${item}`} key={item}>
                      {item}
                    </NavLink>
                  ))}
                </nav>
              </div>
            )}
          </div>
          {!sandwichMenu ? (
            <div className="actions">
              <div className="social">
                <a href="https://www.instagram.com/harmash_30/" className="instagram">
                  <img alt="" src={instagram}></img>
                </a>
                <a href="https://www.facebook.com/philip.harmash/">
                  <img alt="" src={facebook}></img>
                </a>
                <div className="shoping-cart-wrapper">
                  <NavLink to="/Shoping Cart">
                    <img alt="" src={shopCart}></img>
                  </NavLink>
                  <div className="count">{cartProductsQuantity}</div>
                </div>
                <div className="lessonBtn">
                  <NavLink to={"Book a Lesson"}>
                    <Button text={"Book a Lesson"} type={"text"} />
                  </NavLink>
                </div>
              </div>
            </div>
          ) : (
            <div className="header-burger">
              <div className="shoping-cart-wrapper">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <NavLink to="/Shoping Cart">
                    <img alt="" src={shopCart}></img>
                  </NavLink>
                  <div className="count">{cartProductsQuantity}</div>
                  <button>
                    <div className="burger-box">
                      <div className="burger-inner">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

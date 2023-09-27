import { NavLink } from "react-router-dom";
import Logo from "../photos/Logo.jpg";
import facebook from "../photos/facebook.jpg";
import shopCart from "../photos/shop-cart.jpg";
import instagram from "../photos/instagram.jpg";
import Button from "./Wrapper and Button/Button";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../fire-base-config/firebase";

export default function Header() {
  const [isRegistratedUser] = useAuthState(auth);
  const [width, setWidth] = useState(window.innerWidth);
  const [sandwichMenu, setSandwichMenu] = useState(false);
  const [showNavPanel, setShowNavPanel] = useState(false);
  const navItems = [
    "About me",
    "Lessons",
    "Highlight Video Maker",
    "Contact",
    "Reviews",
    "Shop",
    "Subscribe",
  ];
  const cartProductsQuantity = useSelector(
    (state) => state.cartProductsQuantity.cartProductsQuantity
  );
  function checkWidthOfWindow() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", checkWidthOfWindow);
    width > 768 ? setSandwichMenu(false) : setSandwichMenu(true);
    return () => {
      window.removeEventListener("resize", checkWidthOfWindow);
    };
  }, [width]);
  return (
    <>
      <div className="barWrapper">
        <div className="header-border"></div>
        <div className="innerContainer">
          <div className="titleNavWrapper">
            <div className="logo">
              <NavLink to={"/"}>
                <img src={Logo} alt=""></img>
                <div className="user-photo-wrapper">
                  <img src={isRegistratedUser?.photoURL} alt="" />
                </div>
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
                  <div className="count">
                    {cartProductsQuantity === 0 ? "" : cartProductsQuantity}
                  </div>
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
                  <button type="text" onClick={() => setShowNavPanel(!showNavPanel)}>
                    {!showNavPanel ? (
                      <div className="burger-box">
                        <div className="burger-inner">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                    ) : (
                      <div className="close-burger-menu">X</div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {showNavPanel && (
        <div className="header-menu-nav">
          <nav>
            <div className="header-menu-nav-folder-content">
              <div className="container-header-menu-item">
                {navItems.map((item) => (
                  <NavLink to={`/${item}`} key={item}>
                    <div>{item}</div>
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="header-menu-actions">
              <div className="social">
                <a href="https://www.instagram.com/harmash_30/" className="instagram">
                  <img alt="" src={instagram}></img>
                </a>
                <a href="https://www.facebook.com/philip.harmash/">
                  <img alt="" src={facebook}></img>
                </a>
              </div>
            </div>
            <div className="header-menu-booklesson-button">
              <div className="lessonBtn">
                <NavLink to={"Book a Lesson"}>
                  <Button text={"Book a Lesson"} type={"text"} />
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

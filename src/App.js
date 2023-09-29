import "./css/newHeader.css";
import "./css/newMain.css";
import "./css/newFooter.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPart from "./components/MainPart";
import Contact from "./components/NavPanel/Contact";
import LessonsBlock from "./components/NavPanel/LessonsBlock";
import AboutMe from "./components/NavPanel/AboutMe";
import BookLesson from "./components/OtherParts/BookLesson";
import VideoMaker from "./components/NavPanel/VideoMaker";
import ShopCart from "./components/OtherParts/ShopCart";
import Reviews from "./components/NavPanel/Reviews";
import Shop from "./components/NavPanel/Shop";
import Cap from "./components/NavPanel/Shop panel/Cap";
import Tshirt from "./components/NavPanel/Shop panel/Tshirt";
import CreateVideoHighlights from "./components/NavPanel/Shop panel/CreateVideoHighlights";
import Gloves from "./components/NavPanel/Shop panel/Gloves";
import Curry10 from "./components/NavPanel/Shop panel/Curry10";
import PhilForYouMentorship from "./components/NavPanel/Shop panel/PhilForYouMentorship";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setLocalStorageProducts } from "./state/slices/cartTotalProductsSlice";
import { setCardProductsQuantity } from "./state/slices/cartProductsQuantitySlice";
import { setCartProductsPrice } from "./state/slices/cartProductsPriceSlice";
import { getDocs, collection } from "firebase/firestore";
import { dataBase } from "../src/fire-base-config/firebase";
import Subscribe from "./components/NavPanel/Subscribe";

function App() {
  const dispatch = useDispatch();
  const [showBurgerNavPanel, setShowBurgerNavPanel] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        const data = await getDocs(collection(dataBase, "products"));
        const list = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        localStorage.setItem("products", JSON.stringify(list));
      } catch (error) {
        console.error(error);
      }
    }
    getProducts();
    const cartContent = JSON.parse(localStorage.getItem("cartContent"));
    const cartProductsQuantity = JSON.parse(localStorage.getItem("cartProductsQuantity"));
    const cartProductsPrice = JSON.parse(localStorage.getItem("cartProductsPrice"));
    dispatch(setLocalStorageProducts(cartContent || []));
    dispatch(setCardProductsQuantity(cartProductsQuantity));
    dispatch(setCartProductsPrice(cartProductsPrice));
  }, [dispatch]);
  return (
    <>
      <Header
        showBurgerNavPanel={showBurgerNavPanel}
        setShowBurgerNavPanel={setShowBurgerNavPanel}
      />
      {!showBurgerNavPanel ? (
        <>
          <main>
            <article>
              <Routes>
                <Route path="/" element={<MainPart />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Lessons" element={<LessonsBlock />} />
                <Route path="/Subscribe" element={<Subscribe />} />
                <Route path="/About me" element={<AboutMe />} />
                <Route path="/Book a Lesson" element={<BookLesson />} />
                <Route path="/Highlight Video Maker" element={<VideoMaker />} />
                <Route path="/Shoping Cart" element={<ShopCart />} />
                <Route path="/Reviews" element={<Reviews />} />
                <Route path="/Shop" element={<Shop />} />
                <Route path="/Shop/Curry 10" element={<Curry10 />} />
                <Route path="/Shop/Cap" element={<Cap />} />
                <Route path="/Shop/Gloves" element={<Gloves />} />
                <Route path="/Shop/Phil For You Mentorship" element={<PhilForYouMentorship />} />
                <Route path="/Shop/Create Video Highlights" element={<CreateVideoHighlights />} />
                <Route path="/Shop/T-shirt" element={<Tshirt />} />
              </Routes>
            </article>
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      ) : null}
    </>
  );
}

export default App;

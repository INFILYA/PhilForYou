import "./css/newHeader.css";
import "./css/newMain.css";
import "./css/newFooter.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPart from "./components/MainPart";
import Contact from "./components/NavPanel/Contact";
import LessonsBlock from "./components/NavPanel/LessonsBlock";
import NewsletterBlock from "./components/NavPanel/NewsletterBlock";
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
import { useEffect } from "react";
import { setLocalStorageProducts } from "./state/slices/cartTotalProductsSlice";
import { setCardProductsQuantity } from "./state/slices/cartProductsQuantitySlice";
import { setCartProductsPrice } from "./state/slices/cartProductsPriceSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const products = [
      {
        category: "Accessories",
        name: "Gloves",
        image: "/photos/Gloves.jpg",
        price: 10,
        size: ["small", "medium"],
        description: "Perfect Choice for every athlete",
        features: ["some Text"],
      },
      {
        category: "Online Services",
        name: "Phil For You Mentorship",
        image: "/photos/lesson.jpg",
        price: 95,
        description: "Advice to improve your level of game",
        features: ["some Text"],
      },
      {
        category: "Online Services",
        name: "Create Video Highlights",
        image: "/photos/VideoMaker.jpg",
        price: 300,
        description: "Make your highlights famous",
        features: ["some Text"],
      },
      {
        category: "Clothes",
        name: "Cap",
        image: "/photos/Cap.jpg",
        price: 25,
        size: ["small", "medium", "larg"],
        description: "Simple cap",
        features: ["some Text"],
      },
      {
        category: "Clothes",
        name: "T-shirt",
        image: "/photos/T-shirt.jpg",
        price: 30,
        size: ["XS", "S", "M", "L", "XL", "XXL"],
        description: "Modern T-shirt for everyday practices",
        features: ["some Text"],
      },
      {
        category: "Shoes",
        name: "Curry 10",
        image: "/photos/Curry 10.jpg",
        price: 120,
        size: ["7", "8", "9", "10", "11", "12", "13"],
        description: "Best choise for volleyball players in market",
        features: ["some Text"],
      },
    ];
    localStorage.setItem("products", JSON.stringify(products));
    const cartContent = JSON.parse(localStorage.getItem("cartContent"));
    const cartProductsQuantity = JSON.parse(localStorage.getItem("cartProductsQuantity"));
    const cartProductsPrice = JSON.parse(localStorage.getItem("cartProductsPrice"));
    dispatch(setLocalStorageProducts(cartContent || []));
    dispatch(setCardProductsQuantity(cartProductsQuantity));
    dispatch(setCartProductsPrice(cartProductsPrice));
  }, [dispatch]);
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <article>
          <Routes>
            <Route path="/" element={<MainPart />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Lessons" element={<LessonsBlock />} />
            <Route path="/News" element={<NewsletterBlock />} />
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
  );
}

export default App;

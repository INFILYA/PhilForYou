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
import Sleeves from "./components/NavPanel/Shop panel/Sleeves";
import Tshirt from "./components/NavPanel/Shop panel/Tshirt";
import CreateVideoHighlights from "./components/NavPanel/Shop panel/CreateVideoHighlights";
import VolleyballAdviceMentorship from "./components/NavPanel/Shop panel/VolleyballAdviceMentorship";
import Gloves from "./components/NavPanel/Shop panel/Gloves";

function App() {
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
            <Route path="/Shop/Sleeves" element={<Sleeves />} />
            <Route path="/Shop/Cap" element={<Cap />} />
            <Route path="/Shop/Gloves" element={<Gloves />} />
            <Route
              path="/Shop/Volleyball Advice Mentorship"
              element={<VolleyballAdviceMentorship />}
            />
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

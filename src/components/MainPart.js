import Contact from "./NavPanel/Contact";
import LessonsBlock from "./NavPanel/LessonsBlock";
import NewsletterBlock from "./NavPanel/NewsletterBlock";
import MySlider from "./OtherParts/Slider";

export default function MainPart() {
  return (
    <>
      <MySlider />
      <NewsletterBlock />
      <LessonsBlock />
      <Contact />
    </>
  );
}

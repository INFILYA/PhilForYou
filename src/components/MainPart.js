import Contact from "./NavPanel/Contact";
import LessonsBlock from "./NavPanel/LessonsBlock";
import Subscribe from "./NavPanel/Subscribe";
import MySlider from "./OtherParts/Slider";

export default function MainPart() {
  return (
    <>
      <MySlider />
      <Subscribe />
      <LessonsBlock />
      <Contact />
    </>
  );
}

import { useEffect, useState } from "react";
import WrapperForSection from "../Wrapper and Button/WrapperForSection";

function MySlider() {
  const pictures = ["/photos/very.jpg", "/photos/team.jpg", "/photos/its.jpg"];
  const PAGE_WIDTH = window.innerWidth;
  const [position, setPosition] = useState(0);
  let maxLengthOfAllItems = (pictures.length - 1) * PAGE_WIDTH;
  useEffect(() => {
    while (position > -maxLengthOfAllItems) {
      setTimeout(() => setPosition(position - PAGE_WIDTH), 4000);
      return;
    }
    while (position < 0) {
      setTimeout(() => setPosition(0), 4000);
      return;
    }
  }, [position, PAGE_WIDTH, maxLengthOfAllItems]);
  return (
    <WrapperForSection
      background={
        <div className="all-items-container" style={{ transform: `translateX(${position}px)` }}>
          {pictures.map((pick) => (
            <img src={pick} alt="" className="slider-item" key={pick} />
          ))}
        </div>
      }
      content={
        <div style={{ alignSelf: "flex-end", display: "flex" }}>
          <div className="remark">
            <h2>
              <em>Transform your Fantasy into your Legacy</em>
            </h2>
          </div>
        </div>
      }
    />
  );
}
export default MySlider;

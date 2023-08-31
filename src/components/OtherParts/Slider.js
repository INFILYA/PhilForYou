import its from "../../photos/its.jpg";
import team from "../../photos/team.jpg";
import very from "../../photos/very.jpg";
import { useEffect, useState } from "react";
import WrapperForSection from "../Wrapper and Button/WrapperForSection";

function MySlider() {
  const pictures = [very, team, its];
  const PAGE_WIDTH = window.innerWidth;
  const [position, setPosition] = useState(0);
  let currentPosition = position;
  let maxLengthOfAllItems = (pictures.length - 1) * PAGE_WIDTH;
  useEffect(() => {
    while (currentPosition > -maxLengthOfAllItems) {
      setTimeout(() => setPosition(currentPosition - PAGE_WIDTH), 5000);
      return;
    }
    while (currentPosition < 0) {
      setTimeout(() => setPosition(0), 5000);
      return;
    }
  }, [currentPosition, PAGE_WIDTH, maxLengthOfAllItems]);
  return (
    <WrapperForSection
      styleSection={{ alignItems: "flex-end" }}
      background={
        <div>
          <div className="all-items-container" style={{ transform: `translateX(${position}px)` }}>
            {pictures.map((pick) => (
              <img src={pick} alt="" className="slider-item" key={pick} />
            ))}
          </div>
        </div>
      }
      content={
        <div className="remark">
          <h2>
            <em>Transform your Fantasy into your Legacy</em>
          </h2>
        </div>
      }
    />
  );
}
export default MySlider;

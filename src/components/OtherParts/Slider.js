import { useEffect, useState } from "react";
import WrapperForSection from "../Wrapper and Button/WrapperForSection";
import { later } from "../../utils/utilities";
import Button from "../Wrapper and Button/Button";
import { useDispatch } from "react-redux";
import { setUserInformation } from "../../state/slices/userInfoSlice";
import { auth } from "../../fire-base-config/firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

function MySlider() {
  const dispatch = useDispatch();
  const [isRegistratedUser] = useAuthState(auth);
  const pictures = ["/photos/very.jpg", "/photos/team.jpg", "/photos/its.jpg"];
  const PAGE_WIDTH = window.innerWidth;
  const [currentPosition, setCurrentPosition] = useState(0);
  let maxLengthOfAllItems = (pictures.length - 1) * PAGE_WIDTH;
  useEffect(() => {
    async function rollingSlider() {
      await later(5000);
      if (currentPosition > -maxLengthOfAllItems) {
        setCurrentPosition((prev) => (prev = currentPosition - PAGE_WIDTH));
      }
      if (currentPosition === -maxLengthOfAllItems) {
        setCurrentPosition((prev) => (prev = 0));
      }
    }
    rollingSlider();
  }, [PAGE_WIDTH, maxLengthOfAllItems, currentPosition]);
  async function logout() {
    try {
      await signOut(auth);
      dispatch(setUserInformation(""));
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <WrapperForSection
      background={
        <div
          className="all-items-container"
          style={{ transform: `translateX(${currentPosition}px)` }}
        >
          {pictures.map((pick) => (
            <img src={pick} alt="" className="slider-item" key={pick} />
          ))}
        </div>
      }
      content={
        <div className="slider-content-wrapper">
          <div className="logout-wrapper">
            {isRegistratedUser && <Button text={"Sign out"} onClick={logout} />}
          </div>
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

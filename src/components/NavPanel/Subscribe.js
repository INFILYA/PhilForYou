import { useState } from "react";
import { auth, facebookProvider, googleProvider } from "../../fire-base-config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import google from "../../photos/google.jpg";
import facebook from "../../photos/facebook.jpg";
import Button from "../Wrapper and Button/Button";
import WrapperForSection from "../Wrapper and Button/WrapperForSection";
import { useDispatch } from "react-redux";
import { setUserInformation } from "../../state/slices/userInfoSlice";

export default function Subscribe() {
  const dispatch = useDispatch();
  const [isRegistratedUser] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState({
    FirstName: "",
    LastName: "",
    Telephone: "",
    Email: "",
  });
  const [userFieldError, setUserFieldError] = useState({
    FirstName: "empty",
    LastName: "empty",
    Telephone: "empty",
    Email: "empty",
  });
  function handleUserInfo(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }
  async function submitUserInfo(e) {
    e.preventDefault();
    Object.entries(userInfo).forEach(([key, value]) => {
      setUserFieldError((prev) => ({ ...prev, [key]: value }));
    });
    if (Object.values(userInfo).some((field) => field === "")) {
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, userInfo.Email, 666666);
      dispatch(
        setUserInformation(
          `Name: ${userInfo.FirstName} ${userInfo.LastName}, Tel: ${userInfo.Telephone}, Email: ${userInfo.Email}`
        )
      );
    } catch (err) {
      setUserFieldError((prev) => ({
        ...prev,
        Email: "Invalid",
      }));
      console.error(err);
    }
  }
  async function signInWithGoogle() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  }
  async function signInWithFaceBook() {
    try {
      await signInWithPopup(auth, facebookProvider);
    } catch (err) {
      console.error(err);
    }
  }
  async function logout() {
    try {
      await signOut(auth);
      dispatch(setUserInformation(""));
    } catch (err) {
      console.error(err);
    }
  }
  return !isRegistratedUser ? (
    <WrapperForSection
      content={
        <div className="newsletter-block html-block">
          <form action="" onSubmit={(e) => submitUserInfo(e)}>
            <div>
              <div className="newsletter-header">
                <h2>Subscribe for news and updates</h2>
                <p>
                  Sign up with your email address to receive news and updates and get opportunity to
                  buy something
                </p>
              </div>
              <div className="newsletter-form-body">
                <div className="newsletter-form-fields-wrapper">
                  {Object.keys(userInfo).map((user) => (
                    <div className="newsletter-form-field-wrapper" key={user}>
                      {(userFieldError[user] === "Invalid" || !userFieldError[user]) && (
                        <div className="error-fied">
                          {userFieldError[user] === ""
                            ? user + " is required"
                            : userFieldError[user] + " " + user}
                        </div>
                      )}
                      <input
                        type={user === "Telephone" ? "tel" : "text"}
                        placeholder={user}
                        onChange={(e) => handleUserInfo(e)}
                        value={
                          user === "Telephone" ? userInfo[user].replace(/\D+/g, "") : userInfo[user]
                        }
                        name={user}
                      />
                    </div>
                  ))}
                </div>
                <div className="newsletter-button-wrapper">
                  <Button text={"Siqn up"} type={"submit"} />
                </div>
                <p>Or sign with:</p>
                <div className="sign-methods-wrapper">
                  <button type="button" className="google" onClick={signInWithGoogle}>
                    <img src={google} alt="" />
                  </button>
                  <button type="button" className="facebook" onClick={signInWithFaceBook}>
                    <img src={facebook} alt="" />
                  </button>
                </div>
              </div>
              <div>
                <p>We respect your privacy</p>
              </div>
            </div>
          </form>
        </div>
      }
    />
  ) : (
    <div className="logout-button-wrapper">
      <p>Thank you for subscribe {isRegistratedUser?.email}! All news will come on your Email!</p>
      <Button text={"Sign out"} onClick={logout} />
    </div>
  );
}

import { useState } from "react";
import Button from "../Wrapper and Button/Button";
import WrapperForSection from "../Wrapper and Button/WrapperForSection";
import { later } from "../../utils/utilities";
import { doc, setDoc } from "firebase/firestore";
import { auth, dataBase } from "../../fire-base-config/firebase";
import { Time } from "../Wrapper and Button/Time";

export default function SendForm({ leftSide, text, page }) {
  const [formIsSended, setFormIsSended] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({ FirstName: "", LastName: "", Email: "", Message: "" });
  const [userFieldError, setUserFieldError] = useState({
    FirstName: "empty",
    LastName: "empty",
    Email: "empty",
    Message: "empty",
  });
  const FirstNameRequired = !userFieldError?.FirstName;
  const LastNameRequired = !userFieldError?.LastName;
  const emailRequired = !userFieldError?.Email;
  const messageRequired = !userFieldError?.Message;
  function handleUserInfo(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }
  function submitUserInfo(e) {
    e.preventDefault();
    Object.entries(userInfo).forEach(([key, value]) => {
      setUserFieldError((prev) => ({ ...prev, [key]: value }));
    });
    if (Object.values(userInfo).every((field) => field !== "")) {
      sendToServer();
    }
  }
  async function sendToServer() {
    try {
      setIsLoading(!isLoading);
      const sendForm = doc(dataBase, userInfo?.Email, `${Time} ${page} `);
      await later(1500);
      await setDoc(sendForm, {
        message: userInfo.Message,
        id: auth?.currentUser?.uid,
        name: `${userInfo.FirstName} ${userInfo.LastName}`,
      });
      setFormIsSended(!formIsSended);
      setIsLoading(!isLoading);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <WrapperForSection
      content={
        <div className="contact">
          <div className="contact-container">
            {leftSide}
            <div className="right-side-contact">
              <div className="html-block">
                <div className="block-content">
                  <div className="form-wrapper">
                    <form action="" onSubmit={(e) => submitUserInfo(e)}>
                      {formIsSended ? (
                        <div className="field-list">
                          <fieldset>
                            <legend>
                              <div className="forspan">
                                <span>
                                  <strong>Name</strong>
                                </span>
                                <span style={{ opacity: 0.5 }}>(required)</span>
                              </div>
                            </legend>
                            <div className="field-first-name field">
                              <label>First Name</label>
                              {FirstNameRequired && (
                                <div className="error-fied">First Name is required</div>
                              )}
                              <input
                                type="text"
                                onChange={(e) => handleUserInfo(e)}
                                value={userInfo.FirstName}
                                name="FirstName"
                              />
                            </div>
                            <div className="field-last-name field">
                              <label>Last Name</label>
                              {LastNameRequired && (
                                <div className="error-fied">Last Name is required</div>
                              )}
                              <input
                                type="text"
                                onChange={(e) => handleUserInfo(e)}
                                value={userInfo.LastName}
                                name="LastName"
                              />
                            </div>
                          </fieldset>
                          <div className="field-email field">
                            <legend>
                              <div className="forspan">
                                <span>
                                  <strong>Email</strong>
                                </span>
                                <span style={{ opacity: 0.5 }}>(required)</span>
                              </div>
                            </legend>
                            {emailRequired && <div className="error-fied">Email is required</div>}
                            <input
                              type="text"
                              onChange={(e) => handleUserInfo(e)}
                              value={userInfo.Email}
                              name="Email"
                            />
                          </div>
                          <div className="field-message field">
                            <legend>
                              <div className="forspan">
                                <span>
                                  <strong>{page}</strong>
                                </span>
                                <span style={{ opacity: 0.5 }}>(required)</span>
                              </div>
                            </legend>
                            {messageRequired && (
                              <div className="error-fied">Message is required</div>
                            )}
                            <textarea
                              onChange={(e) => handleUserInfo(e)}
                              value={userInfo.Message}
                              name="Message"
                            />
                          </div>
                          <div className="form-button-wrapper">
                            <Button
                              text={isLoading ? "Sending" : "Send"}
                              type={"submit"}
                              disabled={isLoading}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="form-sended-wrapper">{text}</div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}

import { useState } from "react";
import Button from "../Wrapper and Button/Button";
import WrapperForSection from "../Wrapper and Button/WrapperForSection";

export default function Reviews() {
  const [formIsSended, setFormIsSended] = useState(true);
  const [userInfo, setUserInfo] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [userFieldError, setUserFieldError] = useState({
    firstName: "empty",
    lastName: "empty",
    email: "empty",
    message: "empty",
  });
  const firstNameRequired = !userFieldError?.firstName;
  const lastNameRequired = !userFieldError?.lastName;
  const emailRequired = !userFieldError?.email;
  const messageRequired = !userFieldError?.message;
  function handleUserInfo(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }
  function submitUserInfo(e) {
    e.preventDefault();
    Object.entries(userInfo).forEach(([key, value]) => {
      setUserFieldError((prev) => ({ ...prev, [key]: value }));
    });
    if (Object.values(userInfo).every((field) => field !== "")) {
      console.log("Our manager will call you soon");
      setFormIsSended(!formIsSended);
    }
  }
  return (
    <WrapperForSection
      content={
        <div className="contact">
          <div className="contact-container">
            <div className="left-side-contact">
              <div className="html-block">
                <div className="block-content">
                  <h1>Live review</h1>
                  <p>
                    Your satisfaction is extremely important to us. Please take just a minute to let
                    us know what we’re doing well. And if there’s anything you’d like to see done
                    differently, don’t hesitate to tell us. Your feedback can only make us better!
                  </p>
                </div>
              </div>
            </div>
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
                              {firstNameRequired && (
                                <div className="error-fied">First Name is required</div>
                              )}
                              <input
                                type="text"
                                onChange={(e) => handleUserInfo(e)}
                                value={userInfo.firstName}
                                name="firstName"
                              />
                            </div>
                            <div className="field-last-name field">
                              <label>Last Name</label>
                              {lastNameRequired && (
                                <div className="error-fied">Last Name is required</div>
                              )}
                              <input
                                type="text"
                                onChange={(e) => handleUserInfo(e)}
                                value={userInfo.lastName}
                                name="lastName"
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
                            {emailRequired && (
                              <div className="error-fied">Email Name is required</div>
                            )}
                            <input
                              type="text"
                              onChange={(e) => handleUserInfo(e)}
                              value={userInfo.email}
                              name="email"
                            />
                          </div>
                          <div className="field-message field">
                            <legend>
                              <div className="forspan">
                                <span>
                                  <strong>Message</strong>
                                </span>
                                <span style={{ opacity: 0.5 }}>(required)</span>
                              </div>
                            </legend>
                            {messageRequired && (
                              <div className="error-fied">Message is required</div>
                            )}
                            <textarea
                              onChange={(e) => handleUserInfo(e)}
                              value={userInfo.message}
                              name="message"
                            />
                          </div>
                          <div className="form-button-wrapper">
                            <Button text={"Send"} type={"submit"} />
                          </div>
                        </div>
                      ) : (
                        <div className="form-sended-wrapper">Thank you for your review</div>
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

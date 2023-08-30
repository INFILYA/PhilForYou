import { useState } from "react";
import Button from "../Wrapper and Button/Button";
import WrapperForSection from "../Wrapper and Button/WrapperForSection";

export default function NewsletterBlock() {
  const [formIsSended, setFormIsSended] = useState(true);
  const [userInfo, setUserInfo] = useState({ firstName: "", lastName: "", email: "" });
  const [userFieldError, setUserFieldError] = useState({
    firstName: "empty",
    lastName: "empty",
    email: "empty",
  });
  const firstNameRequired = !userFieldError?.firstName;
  const lastNameRequired = !userFieldError?.lastName;
  const emailRequired = !userFieldError?.email;
  function handleUserInfo(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }
  function submitUserInfo(e) {
    e.preventDefault();
    Object.entries(userInfo).forEach(([key, value]) => {
      setUserFieldError((prev) => ({ ...prev, [key]: value }));
    });
    if (Object.values(userInfo).every((field) => field !== "")) {
      console.log("We will send any news on your Email");
      setFormIsSended(!formIsSended);
    }
  }
  return (
    <WrapperForSection
      styleContentWrapper={{ paddingBottom: 0 }}
      content={
        <div className="newsletter-block html-block">
          <form action="" onSubmit={(e) => submitUserInfo(e)}>
            {formIsSended ? (
              <div>
                <div className="newsletter-header">
                  <h2>Subscribe for news and updates</h2>
                  <p>Sign up with your email address to receive news and updates</p>
                </div>
                <div className="newsletter-form-body">
                  <div className="newsletter-form-fields-wrapper">
                    <div className="newsletter-form-field-wrapper">
                      {firstNameRequired && (
                        <div className="error-fied">First Name is required</div>
                      )}
                      <input
                        type="text"
                        placeholder="First Name"
                        onChange={(e) => handleUserInfo(e)}
                        value={userInfo.firstName}
                        name="firstName"
                      />
                    </div>
                    <div className="newsletter-form-field-wrapper">
                      {lastNameRequired && <div className="error-fied">Last Name is required</div>}
                      <input
                        type="text"
                        placeholder="Last Name"
                        onChange={(e) => handleUserInfo(e)}
                        value={userInfo.lastName}
                        name="lastName"
                      />
                    </div>
                    <div className="newsletter-form-field-wrapper">
                      {emailRequired && <div className="error-fied">Email is required</div>}
                      <input
                        type="text"
                        placeholder="Email Address"
                        onChange={(e) => handleUserInfo(e)}
                        value={userInfo.email}
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="newsletter-button-wrapper">
                    <Button text={"Siqn up"} type={"submit"} />
                  </div>
                </div>
                <div>
                  <p>We respect your privacy</p>
                </div>
              </div>
            ) : (
              <div>
                <p>Thank you for subscribe! All news will come on your Email!</p>
              </div>
            )}
          </form>
        </div>
      }
    />
  );
}

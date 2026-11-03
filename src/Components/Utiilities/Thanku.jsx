import React from "react";
import "./ThankYou.css";

const Thanku = (props) => {
  return (
    <div className="thanku">
      <div className="thanku-card">
        <div className="thanku-icon">😊</div>

        <h1 className="thanku-title">Thankyou !</h1>

        <p className="thanku-message">
          <span className="check">✔</span> We’ve received your form submission.
          Thank you for taking the time to connect with us!
        </p>

        <p className="thanku-subtext">
          If you didn’t receive any mail, kindly contact{" "}
          <strong>partners@apps365.com</strong>
        </p>

        <button className="thanku-btn"><a href={props.pageurl}>View More</a></button>
      </div>
    </div>
  );
};

export default Thanku;

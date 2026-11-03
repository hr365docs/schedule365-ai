import React from "react";
import CustomPlans from "./CustomPlans";
// const Paddle = window.Paddle;
const Plans = (props) => {
  return (
    <>
      {!props?.appName ? (
        <>
          <div className="plans-container">
            {props.plans.map((plan, index) => (
              <div key={index} className="plan">
                <h3 className="HR_planprice">{plan.name}</h3>

                <p className="HR_plan">
                  {plan.price} <sup className="sup"> {plan.sup}</sup>
                </p>
                <p className="text">per month, billed yearly</p>
                <p className="Ptext">{plan.text}</p>
                <span>
                  <ul className="features">
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        {" "}
                        <span className="tick-icon">✔</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <CustomPlans AppName={props.appName} />
      )}
    </>
  );
};

export default Plans;

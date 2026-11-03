import React, { useState } from "react";
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h4>{title}</h4>
        <span className="arrow">{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [isPromo, setIsPromo] = useState(false);
  
  // React.useEffect(() => {
  //   document.getElementsByClassName("Promo-Offtext").length > 0
  //     ? setIsPromo(true)
  //     : setIsPromo(false);
  // }, []);
  React.useEffect(() => {
  const observer = new MutationObserver(() => {
    const exists =
      document.getElementsByClassName("Promo-Offtext").length > 0;
    setIsPromo(exists);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  return () => observer.disconnect();
}, []);
  return (
    <div className="supTag">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;

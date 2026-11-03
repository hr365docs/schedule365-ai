import React, { useState } from 'react';
const FAQItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h4>{title}</h4>
        <span className="arrow">{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const FAQCommon = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <FAQItem key={index} title ={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default FAQCommon;

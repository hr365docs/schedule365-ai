import React, { useState } from "react";
import { FaExpand } from "react-icons/fa";

const TabsWithImage = (props) => {
  const [activeTab, setActiveTab] = useState(props?.tabs[0]);
  const [showModal, setShowModal] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {props?.tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${
              activeTab.id === tab.id ? "active" : ""
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tab-content-container">
         <div className="tab-content">
          <h2>{activeTab.Heading}</h2>
          <p>{activeTab.content}</p>
        </div>
        <div className="tab-image">
          <img
            src={activeTab.image}
            alt={activeTab.title}
            onClick={() => setShowModal(true)}
          />

          <div
            className="expand-icon"
            onClick={() => setShowModal(true)}
          >
            <FaExpand />
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="image-modal"
          onClick={() => setShowModal(false)}
        >
          <span
            className="close-modal"
            onClick={() => setShowModal(false)}
          >
            ✕
          </span>

          <img
            src={activeTab.image}
            alt={activeTab.title}
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default TabsWithImage;
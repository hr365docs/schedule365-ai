import React from "react";
import Slider from "./Slider";

const App = () => {
  const logos = [
    'https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/ServiceDesk_MostImplementable_Total_neul3c0nTw.png?updatedAt=1720007370227',
    'https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/ServiceDesk_MostImplementable_Total_neul3c0nTw.png?updatedAt=1720007370227',
    'https://ik.imagekit.io/zn4au2jftpm5/hr365/Badges/ServiceDesk_MostImplementable_Total_neul3c0nTw.png?updatedAt=1720007370227',
  ];

  return (
    <div className="App">
      <h1>Logo Slider</h1>
      <Slider logos={logos} />
    </div>
  );
};

export default App;

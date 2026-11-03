// import React, { useState, useEffect } from 'react';
// import './LogoSlider.css'; // Import the CSS file

// const logos = [
//   'https://www.apps365.com/wp-content/uploads/2024/06/02.webp',
//   'https://www.apps365.com/wp-content/uploads/2024/06/land.webp',
//   'https://www.apps365.com/wp-content/uploads/2024/06/logo5-1.webp',
//   'https://www.apps365.com/wp-content/uploads/2024/06/logo7-1.webp',
//   'https://ik.imagekit.io/apps365/Client-Logo/Sephora.png',
//   'https://ik.imagekit.io/zn4au2jftpm5/hr365/ClientLogos/NewHampshire_4f-QEoGg9.png',
//   'https://ik.imagekit.io/zn4au2jftpm5/hr365/ClientLogos/DP-World_CVBluROtd.png',
//   'https://www.apps365.com/wp-content/uploads/2024/06/logo6-1.webp',
//   'https://www.apps365.com/wp-content/uploads/2024/06/logo9-1.webp',
//   'https://www.apps365.com/wp-content/uploads/2024/06/logo10-1.webp',
//   // 'https://www.apps365.com/wp-content/uploads/2024/06/PANlogo.webp',
//   'https://www.apps365.com/wp-content/uploads/2024/06/01.webp',
//   // 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Newclients/logo1_cAXEfyb7NY.png?updatedAt=1724243961384',
// ];


// const LogoSlider = (props) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
//     }, 1000); // Move to the next slide every 2 seconds

//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, []);

//   // Dynamic number of visible logos depending on screen size
//   const visibleLogos = Array.from({ length: window.innerWidth <= 768 ? 3 : 8 }).map(
//     (_, i) => logos[(currentIndex + i) % logos.length]
//   );

//   return (
//     <div className="slider" style={{paddingBottom:props.LMS365=="LMS365"? "1vw":"3vw"}}>
//       <div className="slider-inner">
//         {visibleLogos.map((logo, index) => (
//           <div key={index} className="slideh">
//             <img src={logo} alt={`Logo ${index + 1}`} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LogoSlider;


import React from "react";
import "./LogoSlider.css";

const logos = [
   'https://www.apps365.com/wp-content/uploads/2024/06/02.webp',
  'https://www.apps365.com/wp-content/uploads/2024/06/land.webp',
  'https://www.apps365.com/wp-content/uploads/2024/06/logo5-1.webp',
  'https://www.apps365.com/wp-content/uploads/2024/06/logo7-1.webp',
  'https://ik.imagekit.io/apps365/Client-Logo/Sephora.png',
  'https://ik.imagekit.io/zn4au2jftpm5/hr365/ClientLogos/NewHampshire_4f-QEoGg9.png',
  'https://ik.imagekit.io/zn4au2jftpm5/hr365/ClientLogos/DP-World_CVBluROtd.png',
  'https://ik.imagekit.io/zn4au2jftpm5/Apps365/LMS365/Daimler-1_aJtKwmely.png',
  'https://ik.imagekit.io/zn4au2jftpm5/Apps365/LMS365/OEB_Logo_u0fvw-Rhf.svg',
  'https://ik.imagekit.io/zn4au2jftpm5/Apps365/LMS365/Nassr_jVG2qAWQP.png',
  'https://www.apps365.com/wp-content/uploads/2024/06/logo6-1.webp',
  'https://www.apps365.com/wp-content/uploads/2024/06/logo9-1.webp',
  'https://www.apps365.com/wp-content/uploads/2024/06/logo10-1.webp',
  'https://www.apps365.com/wp-content/uploads/2024/06/01.webp',
];

const Slider = () => {
  return (
    <>
    <div className="logo-slider-wrapper">
      <div className="logo-slider">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo} alt={`logo-${index}`} />
          </div>
        ))}
      </div>
    </div>

        </>
  );
};

export default Slider;

import React, { useState, useEffect } from 'react';
import './LogoSlider.css'; // Import the CSS file

const logos = [
  'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Clients/white3_ZWb_VLUuG.png?updatedAt=1725625080557',
  'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Clients/1_UJXyc29FvS.png',
  'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Clients/3_KI0ymeA72.png',
  // 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Clients/6_1AFja1Ti8.png',
  // 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Clients/4_3H_lKmOjP.png',
  'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Clients/5_y1rutDNP8.png',
// 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Newclients/PANlogowhite_jA9Y13mbR.png?updatedAt=1725878183776',
'https://ik.imagekit.io/apps365/Client-Logo/Sephora-white.png',
// 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Clients/white1_JRA27r1Rjn.png?updatedAt=1725625080456',
'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Clients/white5_SB0Ms_tQV4.png?updatedAt=1725625080438',
// 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Clients/white2_gT9XkXapaa.png?updatedAt=1725625080442',
'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Clients/white6_jJiL6crTfi.png?updatedAt=1725625080439',
'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Clients/white4_T9-sDKEF_.png?updatedAt=1725625080215',
'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Newclients/landwhite_Df78A3HdY.png?updatedAt=1725878169702',
// 'https://ik.imagekit.io/zn4au2jftpm5/Apps365/Newclients/kpmg_14ojmPCIk.png?updatedAt=1725878169355',
];
const LogoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 1500); // Move to the next slide every 2 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Dynamic number of visible logos depending on screen size
  const visibleLogos = Array.from({ length: window.innerWidth <= 768 ? 3 : 6 }).map(
    (_, i) => logos[(currentIndex + i) % logos.length]
  );

  return (
    <div >
      <div className="slider-inner">
        {visibleLogos.map((logo, index) => (
          <div key={index} className="slideh">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;


import { Label } from '@fluentui/react';
import React from 'react'
import { FaRegThumbsUp } from 'react-icons/fa6'
import { Link, useNavigate } from "react-router-dom";
function Thankyou(props) {
const navigate = useNavigate();

function close(){
  props.setIsThankuPage(false);
  props.onClose();
}
  return (

    <>
   
      <div className='thankyouboxMainClass'>
        <div className='thankYouboxcss'>
          <div className="HR_FlexCenterSpcBetween" style={{ display: 'flex' }}>
          </div>
          <Label className="CrossIcon">
                  <span className='crossthanku' onClick={()=>close()}>
                    ✕
                  </span>
                </Label>
          <div className='thankuicon'> <FaRegThumbsUp /></div>
          <div><span className='thankutext '>Thank you !</span></div>
          <div><span className='thankucontent' style={{fontWeight:600}}>✔ We’ve received your form submission.</span></div>
          <div><span className='thankucontent thankyouMT1' >  Thank you for taking the time to connect with us! </span></div>
          <div className='thankucontent'>If you did not receive mail from us, kindly contact appsupport@hr365.us </div>
          <div> <span className='learncontent
        '  >Learn more about our products by clicking the button below.</span></div>
          <div className='HR_PrimaryButton thankuviewmore'>

            <button id='thankyoubutton' onClick={ ()=>navigate('/')}>View More</button>

          </div>

        </div>
      </div>
   
    </>

  )
}

export default Thankyou
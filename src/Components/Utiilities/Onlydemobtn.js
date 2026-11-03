import * as React from "react";
import {
  DialogFooter,
  Dropdown,
  TextField,
  Label,
  PrimaryButton,
} from "@fluentui/react";
import { Dialog, DialogContent } from "@mui/material";
import SliderDialogbox from "./../Utiilities/SliderDialogbox";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";
import Thankyou from "../Thankyou";
import Offerpopup from "./Offerpopup";
import { getAppName, getRandomIPToken } from "../GlobalMultiple/GlobalConstants";

let IPDATA;
let lpIPAddress = "";
let lpCountry = "";
let lpCity = "";
let lpstate = "";
let lpTimeZone = "";
function DemoButtons(props) {
  const Navigate = useNavigate();
  const [isThankuPage, setIsThankuPage] = React.useState(false);
  const SiteName = React.useContext(MyContext);
  const [openGetStarted, setOpenGetStarted] = React.useState(false);
  const [openBookaDemo, setOpenBookaDemo] = React.useState(false);
  const [Name, setName] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [PhoneNumber, setPhoneNumber] = React.useState("");
  const [CompanyWebsite, setCompanyWebsite] = React.useState("");
  const [anyRemarks, setAnyRemarks] = React.useState("");
  const [NoOfUsers, setNoOfUsers] = React.useState("");
  const [IAmInterested, setIAmInterested] = React.useState("");
  const [ButtonSaveText1, setButtonSaveText1] = React.useState("Submit");
  const [loading1, setLoading1] = React.useState(false);
  const [isSuccessMessage, setisSuccessMessage] = React.useState(false);
  const [isErroMessage, setisErrorMessage] = React.useState(false);
  const [isBookaDemoSaved, setIsBookaDemoSaved] = React.useState(false);
  const [BusinessEmailMessage, setBusinessEmailMessage] = React.useState(false);
  const [FormatEmailMessage, setFormatEmailMessage] = React.useState(false);

  const handleClickOpen = () => {
    setOpenGetStarted(true);
    // getIPAddress();
    setisSuccessMessage(false);
    setisErrorMessage(false);
    setLoading1(false);
    setBusinessEmailMessage(false);
    setFormatEmailMessage(false);
    setButtonSaveText1("Submit");
  };
  const handleClose = () => {
    setOpenGetStarted(false);
    ResetData();
  };

  const handleClickOpenBookaDemo = () => {
    setOpenBookaDemo(true);
    // getIPAddress();
    setLoading1(false);
    setisSuccessMessage(false);
    setisErrorMessage(false);
    setIsBookaDemoSaved(false);
    setBusinessEmailMessage(false);
    setFormatEmailMessage(false);
    setButtonSaveText1("Select a Time Slot");
  };
  const handleCloseBookaDemo = () => {
    setOpenBookaDemo(false);
    ResetData();
    setButtonSaveText1("Submit");
  };
  function isStringValidated(value) {
    if (value === null || value === undefined || value === "") {
      return false;
    } else {
      return true;
    }
  }

  // function PopupToast(type,message,isButton) {
  //   const Toast = Swal.mixin({
  //     toast: true,
  //     focusCancel: true,
  //     // position: "",
  //     showConfirmButton: isButton,
  //     showCloseButton: true,
  //     timer: false,
  //     target: "#popupScreen",
  //     icon: type,
  //     confirmButtonText: "Ok",
  //     width: "330px",
  //   });
  //   Toast.fire({
  //     title: `${message}`,
  //   });
  // }

  const getNameValue = (event) => {
    setName(event.target.value);
  };
  const getEmailValue = (event) => {
    setEmail(event.target.value);
  };
  const getPhoneValue = (event) => {
    setPhoneNumber(event.target.value);
  };
  // const getCompanyWebSite = (event) => {
  //   setCompanyWebsite(event.target.value);
  // };
  const getAnyRemarks = (event) => {
    setAnyRemarks(event.target.value);
  };


  const IAmInterestedOptions = [
    { key: "Employee Directory 365", text: "Employee Directory 365" },
    { key: "Helpdesk 365", text: "Helpdesk 365" },
    { key: "Asset 365", text: "Asset 365" },
    { key: "Employee Onboarding 365", text: "Employee Onboarding 365" },
    { key: "Task 365", text: "Task 365" },
    { key: "Performance Management 365", text: "Performance Management 365" },
    { key: "Recruitment Management 365", text: "Recruitment Management 365" },
    { key: "CLM 365 - Contract Management ", text: "CLM 365 - Contract Management " },
    { key: "Time Off Manager 365", text: "Time Off Manager 365" },
    { key: "Timesheet 365", text: "Timesheet 365" },
    { key: "Expense 365", text: "Expense 365" },
    { key: "Custom Projects", text: "Custom Projects" },
  ];
  const NoOfUsersOPtions = [
    { key: "Upto 50", text: "Upto 50" },
    { key: "50 - 100", text: "50 - 100" },
    { key: "100 - 200", text: "100 - 200" },
    { key: "200 - 300", text: "200 - 300" },
    { key: "300 - 500", text: "300 - 500" },
    { key: "500 - 750", text: "500 - 750" },
    { key: "750 - 1000", text: "750 - 1000" },
    { key: "1000 - 1500", text: "1000 - 1500" },
    { key: "1500 - 2000", text: "1500 - 2000" },
    { key: "2000 - 5000", text: "2000 - 5000" },
    { key: "5000 and above", text: "5000 and above" },
  ];

  function ResetData() {
    setAnyRemarks("");
    setCompanyWebsite("");
    setEmail("");
    setName("");
    setPhoneNumber("");
    setIAmInterested("");
    setNoOfUsers("");
    // setCity("");
    // setIPAddress("");
    // setTimezone("");
    // setCountry("");
    // setState("");
    lpstate = "";
    lpCity = "";
    lpCountry = "";
    lpIPAddress = "";
    lpTimeZone = "";
  }
  const onChangeOfInterstedIn = (event, item) => {
    setIAmInterested(item.key);
  };
  const onChangeOfNoOfUsers = (event, item) => {
    setNoOfUsers(item.key);
  };

  //  async function getIPAddress() {
  //     const ipAddress = ""; // Replace with the IP address you want to query
  //     const access_token = "843b85132fe7ea"; // Replace with your actual IPinfo access token
  //     // Make a request to IPinfo API
  //     fetch(`https://ipinfo.io/${ipAddress}?token=${access_token}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         return data;
  //       })
  //       .catch((error) => console.error("Error fetching IPInfo:", error));
  //   }

  function asyncOperation() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const ipAddress = ""; // Replace with the IP address you want to query
        // const access_token = "843b85132fe7ea"; // Replace with your actual IPinfo access token
        const access_token = getRandomIPToken(); // Replace with your actual IPinfo access token
        const success = true; // Simulating success
        if (success) {
          resolve(
            fetch(`https://ipinfo.io/${ipAddress}?token=${access_token}`)
            // fetch(`https://freeipapi.com/api/json/`)
              .then((response) => response.json())
              .then((data) => {
                return data;
              })
          );
        } else {
          reject(console.error("Error fetching IPInfo:"));
        }
      }, 2000); // Simulate async operation (e.g., network request)
    });
  }

  async function awaitFunction() {
    try {
      console.log("Starting async operation...");

      // Await the promise returned by asyncOperation
      const result = await asyncOperation();
      console.log(result); // Logs "Operation successful!" after 2 seconds
      return result;
    } catch (error) {
      console.error("Error:", error); // Handles any errors that occur
    }
  }

  async function submitEmailData(buttonType) {
    let BuisnessEMailflag = false;
    let FormatEMailflag = false;
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (isStringValidated(Email) && Email?.toLowerCase()?.match(validRegex)) {
      FormatEMailflag = false;
    } else {
      FormatEMailflag = true;
    }



    if (
      isStringValidated(Email) &&
      !["@yahoo.com", "@gmail.com", "@outlook.com", "hotmail.com", "icloud.com"].some(domain => Email?.toLowerCase().endsWith(domain))
    ) {
      BuisnessEMailflag = false;
    } else {
      BuisnessEMailflag = true;
    }
    //Current Data
    const currentDate = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = currentDate.toLocaleDateString("en-US", options);

    //Current Time
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    const amOrPm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    let Iminutes = minutes < 10 ? "0" + minutes : minutes;
    const currentTime = `${hours}:${Iminutes} ${amOrPm}`;

    //Current page URL
    const PageURL = window.location.href;

   

    if (!BuisnessEMailflag && !FormatEMailflag) {
      IPDATA = await awaitFunction();

      // lpstate = IPDATA?.regionName || "";
      // lpCity = IPDATA?.cityName || "";
      // lpCountry = IPDATA?.countryName || "";
      // lpIPAddress = IPDATA?.ipAddress || "";
      // lpTimeZone = IPDATA?.timeZone || "";

         lpstate = IPDATA?.region || "";
        lpCity = IPDATA?.city || "";
        lpCountry = IPDATA?.country || "";
        lpIPAddress = (IPDATA?.ip || "");
        lpTimeZone = IPDATA?.timezone || "" || "";

      let data = {};

       //Current Email Body
    let EmailBodyFormat =
    "Name: " +
    Name +
    "<br>" +
    "Business Email Id: " +
    Email +
    "<br>" +
    "Phone Number: " +
    PhoneNumber +
    "<br>" +
    "<br>" +
    "<br>" +
    "--" +
    "<br>" +
    "<br>" +
    "<br>" +
    "Date: " +
    formattedDate +
    "<br>" +
    "Time: " +
    currentTime +
    "<br>" +
    "Page URL: " +
    PageURL +
    "<br>" +
    "User Agent: " +
    "<br>" +
    "Remote IP: " +
    lpIPAddress +
    "<br>";

  let EmailBody2 =
    "<html><head>" +
    '<meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head><body><div style="padding:0; border:1pt solid red"><p id="x_warning"' +
    'style="padding:0; border-style:none"><b><span style="color:red"></span></b>' +
    `<span style="color:red">&nbsp;Ext. email, don't open links / files unless sender is reliable.</span></p></div>` +
    "<div>Name:" +
    Name +
    "<br>Business Email id: " +
    Email +
    "<br>Phone Number: " +
    PhoneNumber +
    "<br><br>---<br><br>" +
    "Date: " +
    formattedDate +
    "<br>Time: " +
    currentTime +
    "<br>Page URL: " +
    PageURL +
    "<br>" +
    'User Agent: "" <br>' +
    "Remote IP: " +
    lpIPAddress +
    "<br></div></body></html>";

      const url1 = "https://apps.m365online.us/api/Home/TrialRequest";
      const url2 =
        "https://prod-03.centralindia.logic.azure.com:443/workflows/d91375fc5ae349b4ac907ab1eee46d1a/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=shtJjLt_PDc1aC2oWNSxGZWTgnWFLYKPaHyLaSLx4P0";
      if (buttonType === "getstarted") {
        data = {
          Name: Name,
          EmailID: Email?.toLowerCase(),
          PhoneNumber: PhoneNumber,
          PageUrl: PageURL,
          AppName: props.OfferPage ==="CubicAnniversary" ? ( isStringValidated(IAmInterested) ? IAmInterested :"" ) : getAppName(),
          DateTime: formattedDate + " " + currentTime,
          Company: "",
          IPAddress: lpIPAddress || "",
          Country: lpCountry || "",
          City: lpCity || "",
          Region: lpstate || "",
          Timezone: lpTimeZone || "",
          EmailBody: isStringValidated(EmailBody2)
            ? EmailBody2
            : EmailBodyFormat,
          RequestType: "Trial",
          Intrest: isStringValidated(IAmInterested) ? IAmInterested : "",
        };
      } else if (buttonType === "bookademo") {
        data = {
          Name: isStringValidated(Name) ? Name : "",
          EmailID: isStringValidated(Email) ? Email?.toLowerCase() : "",
          PhoneNumber: isStringValidated(PhoneNumber) ? PhoneNumber : "",
          PageUrl: PageURL || "",
          AppName: props.OfferPage ==="CubicAnniversary" ? ( isStringValidated(IAmInterested) ? IAmInterested :"" ) : getAppName(),
          DateTime: formattedDate + " " + currentTime,
          Company: "",
          EmailBody: isStringValidated(EmailBody2)
            ? EmailBody2
            : EmailBodyFormat,
          IPAddress: lpIPAddress || "",
          Country: lpCountry || "",
          City: lpCity || "",
          Region: lpstate || "",
          Timezone: lpTimeZone || "",
          RequestType: "Demo",
          Intrest: isStringValidated(IAmInterested) ? IAmInterested : "",
          Webiste: isStringValidated(CompanyWebsite) ? CompanyWebsite : "",
          EmployeeSize: isStringValidated(NoOfUsers) ? NoOfUsers : "",
          Remarks: isStringValidated(anyRemarks) ? anyRemarks : "",
        };
      }
      console.log(data);
      try {
        fetch(url1, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok.");
            }
            return response.json();
          })
          .then((data) => {
            console.log("Response:", data);
          })
          .catch((error) => {
            console.log("There was a problem with the fetch operation:", error);
          });
      } catch {}

      try {
        fetch(url2, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok.");
            } else {
              console.log("Success");
            }
            return response.json();
          })
          .catch((error) => {
            console.log("There was a problem with the fetch operation:", error);
          });
      } catch {}
    } else {
      console.log("email is not valid");
    }
  }
  async function submitRequest(buttonType) {
    setisErrorMessage(false);
    setBusinessEmailMessage(false);
    setLoading1(true);
    setButtonSaveText1("");
    let Requiredflag = false;
    let BuisnessEMailflag = false;
    let FormatEMailflag = false;
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (buttonType === "getstarted") {
      if (isStringValidated(Name)) {
        if (
          isStringValidated(Email) &&
          Email?.toLowerCase()?.match(validRegex)
        ) {
          FormatEMailflag = false;
        } else {
          FormatEMailflag = true;
          // PopupToast('success', 'Please enter valid Email Address', true)
          setisSuccessMessage(false);
          setFormatEmailMessage(true);
          setBusinessEmailMessage(false);
          setLoading1(false);
          setButtonSaveText1("Submit");
        }

        if (
          isStringValidated(Email) &&
          !["@yahoo.com", "@gmail.com", "@outlook.com", "hotmail.com", "icloud.com"].some(domain => Email?.toLowerCase().endsWith(domain))
        ) {
          BuisnessEMailflag = false;
        } else {
          // PopupToast('error', 'Please enter your business Email Address', true)
          BuisnessEMailflag = true;
          setisSuccessMessage(false);
          setBusinessEmailMessage(true);
          setFormatEmailMessage(false);
          setLoading1(false);
          setButtonSaveText1("Submit");
        }
      }else{
        Requiredflag = true;
      }
      if (!BuisnessEMailflag && !FormatEMailflag) {
      
        if (
          props.OfferPage == "CubicAnniversary" ? 
          isStringValidated(Name) &&
          isStringValidated(Email) &&
          isStringValidated(PhoneNumber) && isStringValidated(IAmInterested)
         : isStringValidated(Name) &&
         isStringValidated(Email) &&
         isStringValidated(PhoneNumber) 
        ) {
          Requiredflag = false;
        } else {
          Requiredflag = true;
          setisSuccessMessage(false);
          setisErrorMessage(true);
          setLoading1(false);
          setButtonSaveText1("Submit");
        }
      }
    } else if (buttonType === "bookademo") {
      if (isStringValidated(Email) && Email?.toLowerCase()?.match(validRegex)) {
        FormatEMailflag = false;
      } else {
        FormatEMailflag = true;
        setisSuccessMessage(false);
        setFormatEmailMessage(true);
        setBusinessEmailMessage(false);
        setLoading1(false);
        setButtonSaveText1("Select a Time Slot");
      }
      if (
        isStringValidated(Email) &&
        !["@yahoo.com", "@gmail.com", "@outlook.com", "hotmail.com", "icloud.com"].some(domain => Email?.toLowerCase().endsWith(domain))
      ) {
        BuisnessEMailflag = false;
      } else {
        BuisnessEMailflag = true;
        setisSuccessMessage(false);
        setBusinessEmailMessage(true);
        setFormatEmailMessage(false);
        setLoading1(false);
        setButtonSaveText1("Select a Time Slot");
      }
      if (!BuisnessEMailflag && !FormatEMailflag) {
        let cubicann = props.OfferPage == "CubicAnniversary";
        if (
          
          // isStringValidated(Name) &&
          // isStringValidated(PhoneNumber) &&
          // isStringValidated(CompanyWebsite) &&
         ( cubicann ? isStringValidated(IAmInterested) : true ) &&
          isStringValidated(Email) &&
          isStringValidated(anyRemarks) &&
          isStringValidated(NoOfUsers)
        ) {
          Requiredflag = false;
        } else {
          Requiredflag = true;
          setisSuccessMessage(false);
          setisErrorMessage(true);
          setLoading1(false);
          setButtonSaveText1("Select a Time Slot");
        }
      }
    }
    //Current Data
    const currentDate = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = currentDate.toLocaleDateString("en-US", options);

    //Current Time
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    const amOrPm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    let Iminutes = minutes < 10 ? "0" + minutes : minutes;
    const currentTime = `${hours}:${Iminutes} ${amOrPm}`;

    //Current page URL
    const PageURL = window.location.href;

    //Current Email Body
    let EmailBodyFormat =
      "Name: " +
      Name +
      "<br>" +
      "Business Email Id: " +
      Email +
      "<br>" +
      "Phone Number: " +
      PhoneNumber +
      "<br>" +
      "<br>" +
      "<br>" +
      "--" +
      "<br>" +
      "<br>" +
      "<br>" +
      "Date: " +
      formattedDate +
      "<br>" +
      "Time: " +
      currentTime +
      "<br>" +
      "Page URL: " +
      PageURL +
      "<br>" +
      "User Agent: " +
      "<br>" +
      "Remote IP: " +
      lpIPAddress +
      "<br>";
    let EmailBody2 =
      "<html><head>" +
      '<meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head><body><div style="padding:0; border:1pt solid red"><p id="x_warning"' +
      'style="padding:0; border-style:none"><b><span style="color:red"></span></b>' +
      `<span style="color:red">&nbsp;Ext. email, don't open links / files unless sender is reliable.</span></p></div>` +
      "<div>Name:" +
      Name +
      "<br>Business Email id: " +
      Email +
      "<br>Phone Number: " +
      PhoneNumber +
      "<br><br>---<br><br>" +
      "Date: " +
      formattedDate +
      "<br>Time: " +
      currentTime +
      "<br>Page URL: " +
      PageURL +
      "<br>" +
      'User Agent: "" <br>' +
      "Remote IP: " +
      lpIPAddress +
      "<br></div></body></html>";
    if (!Requiredflag && !BuisnessEMailflag && !FormatEMailflag) {
      // await getIPAddress();
      IPDATA = await awaitFunction();

      // lpstate = IPDATA?.regionName || "";
      // lpCity = IPDATA?.cityName || "";
      // lpCountry = IPDATA?.countryName || "";
      // lpIPAddress = IPDATA?.ipAddress || "";
      // lpTimeZone = IPDATA?.timeZone || "";

         lpstate = IPDATA?.region || "";
        lpCity = IPDATA?.city || "";
        lpCountry = IPDATA?.country || "";
        lpIPAddress = (IPDATA?.ip || "");
        lpTimeZone = IPDATA?.timezone || "" || "";

      setisErrorMessage(false);
      setFormatEmailMessage(false);
      setBusinessEmailMessage(false);
      let data = {};
      const url1 = "https://apps.m365online.us/api/Home/TrialRequest";
      const url2 =
        "https://prod-03.centralindia.logic.azure.com:443/workflows/d91375fc5ae349b4ac907ab1eee46d1a/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=shtJjLt_PDc1aC2oWNSxGZWTgnWFLYKPaHyLaSLx4P0";
      if (buttonType === "getstarted") {
        data = {
          Name: Name,
          EmailID: Email?.toLowerCase(),
          PhoneNumber: PhoneNumber,
          PageUrl: PageURL,
          AppName: props.OfferPage ==="CubicAnniversary" ? ( isStringValidated(IAmInterested) ? IAmInterested :"" ) : getAppName(),
          DateTime: formattedDate + " " + currentTime,
          Company: "",
          IPAddress: lpIPAddress || "",
          Country: lpCountry || "",
          City: lpCity || "",
          Region: lpstate || "",
          Timezone: lpTimeZone || "",
          EmailBody: isStringValidated(EmailBody2)
            ? EmailBody2
            : EmailBodyFormat,
          RequestType: "Trial",
          Intrest: isStringValidated(IAmInterested) ? IAmInterested : "",
        };
        console.log(data);
      } else if (buttonType === "bookademo") {
        data = {
          Name: isStringValidated(Name) ? Name : "",
          EmailID: isStringValidated(Email) ? Email?.toLowerCase() : "",
          PhoneNumber: isStringValidated(PhoneNumber) ? PhoneNumber : "",
          PageUrl: PageURL || "",
          AppName: props.OfferPage ==="CubicAnniversary" ? ( isStringValidated(IAmInterested) ? IAmInterested :"" ) : getAppName(),
          DateTime: formattedDate + " " + currentTime,
          Company: "",
          EmailBody: isStringValidated(EmailBody2)
            ? EmailBody2
            : EmailBodyFormat,
          IPAddress: lpIPAddress || "",
          Country: lpCountry || "",
          City: lpCity || "",
          Region: lpstate || "",
          Timezone: lpTimeZone || "",
          RequestType: "Demo",
          Intrest: isStringValidated(IAmInterested) ? IAmInterested : "",
          Webiste: isStringValidated(CompanyWebsite) ? CompanyWebsite : "",
          EmployeeSize: isStringValidated(NoOfUsers) ? NoOfUsers : "",
          Remarks: isStringValidated(anyRemarks) ? anyRemarks : "",
        };
      }
      try {
        fetch(url1, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok.");
            }
            return response.json();
          })
          .then((data) => {
            console.log("Response:", data);
            setLoading1(false);
            ResetData();
            setisSuccessMessage(true);
            setisErrorMessage(false);

            switch (buttonType) {
              case "bookademo":
                setButtonSaveText1("Select a Time Slot");
                setTimeout(() => {
                  handleCloseBookaDemo();
                  setisSuccessMessage(false);
                  // Navigate("/thank-you")
                }, 1000);
                setTimeout(() => {
                  window.open(BookaDemoURl, "_self");
                }, 2000);
                break;
              default:
                // setTimeout(() => {
                //   setIsThankuPage(true);
                // }, 2000);
                setButtonSaveText1("Submit");
                break;
            }
            // }, 3000);
          })
          .catch((error) => {
            console.error(
              "There was a problem with the fetch operation:",
              error
            );
          });
      } catch {}

      try {
        fetch(url2, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok.");
            } else {
              setLoading1(false);
              ResetData();
              setisSuccessMessage(true);
              setisErrorMessage(false);
              switch (buttonType) {
                case "bookademo":
                  setButtonSaveText1("Select a Time Slot");
                  // setIsBookaDemoSaved(true);
                  setTimeout(() => {
                    handleCloseBookaDemo();
                    // setisSuccessMessage(false);
                    // setisErrorMessage(false);
                  }, 3000);
                  break;
                default:
                  setButtonSaveText1("Submit");
                  break;
              }
            }
            return response.json();
          })
          .catch((error) => {
            console.error(
              "There was a problem with the fetch operation:",
              error
            );
          });
      } catch {}
    } else {
      console.log("Please fill the required fields");
    }
  }
  let BookaDemoURl =
    "https://outlook.office365.com/owa/calendar/HR365AndBizApps365@cubiclogics.com/bookings/s/fsSfagBEDUyqAxMPzD8UWg2";
  function SuccessMessage(messageType) {
    return (
      <>
        {messageType === "success" && (
          <>
            <div>
              <Label className="SuccessColor">
                Thankyou! <span className="green-tick-icon">✔</span> We’ve
                received your form submission.
              </Label>
            </div>
            <div>
              <Label className="redmarkMessag">
                Based on organization's spam settings, confirmation email may
                land in your spam, junk or quarantine, please check or suggest
                your admin to release the mail and whitelist the
                cubiclogics.com.
              </Label>
            </div>
            <Label className="textColorStyle whitemarkMessag">
              This trial is offered to business domain email ids only, any
              personal email ids such as gmail.com, yahoo.com, outlook.com, etc.
              will not be entertained.
            </Label>
          </>
        )}
        {messageType === "error" && (
          <div>
            <Label className="ErrorColor" style={{ textAlign: "left" }}>
              Please fill the required fields!
            </Label>
          </div>
        )}
        {messageType === "businessemail" && (
          <div>
            <Label className="ErrorColor" style={{ textAlign: "left" }}>
              Please enter your business email address!
            </Label>
          </div>
        )}
        {messageType === "formatemail" && (
          <div>
            <Label className="ErrorColor" style={{ textAlign: "left" }}>
              Please enter valid email address!
            </Label>
          </div>
        )}
      </>
    );
  }
  function BookaDemoSuccessMessage(messageType) {
    return (
      <>
        {messageType === "success" && (
          <>
            <div>
              <Label className="SuccessColor">
                <span className="green-tick-icon">✔</span>
                <span className="BookADemoMessage">
                  Now you can select your timeslot for the demo.
                </span>
              </Label>
            </div>
          </>
        )}
        {messageType === "error" && (
          <div>
            <Label className="ErrorColor" style={{ textAlign: "left" }}>
              Please fill the required fields!
            </Label>
          </div>
        )}
        {messageType === "businessemail" && (
          <div>
            <Label className="ErrorColor" style={{ textAlign: "left" }}>
              Please enter your business email address!
            </Label>
          </div>
        )}
        {messageType === "formatemail" && (
          <div>
            <Label className="ErrorColor" style={{ textAlign: "left" }}>
              Please enter valid email address!
            </Label>
          </div>
        )}
      </>
    );
  }
  return (
    <>
      {/* <div className="OfferHeader">
        <img
          id="HalloweenOfferHeader"
          className="HalloweenOfferHeader"
          src="https://ik.imagekit.io/zn4au2jftpm5/Early%20Bird%20(2)_tMUx8niGV.gif?updatedAt=1728710130828"
          alt="Halloween Offer"
          onClick={handleClickOpenBookaDemo}
          style={{ cursor: "pointer" }}
        />
      </div> */}
      {!props.StickyButton ? (
        <div>
          <div className="HR_DemoButtonsSectionpm">
            <div className="HR_DemoButtons">
              {/* <div className="HR_DefaultButton">
                <button
                  className="buuttonvolou"
                  id="lpgetstartedbutton"
                  onClick={handleClickOpen}
                >
                  Get Started
                </button>
              </div> */}
              <div className="HR_PrimaryButton" styles="padding-left:8vw;">
                <button
                  className="buuttonvolou"
                  id="lpbookademobutton"
                  onClick={handleClickOpenBookaDemo}
                >
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* <div className="stickyBookDemo">
            <div className="HR_PrimaryButton">
              <button onClick={handleClickOpenBookaDemo}>Book a Demo</button>
            </div>
          </div> */}
        </>
      )}
      {props.getStarted ? (
        <>
          <div className="HR_DemoButtonsSection">
            <div className="HR_DemoButtons">
              <div className="HR_DefaultButton">
                <button
                  className="buuttonvolou"
                  id="lpgetstartedbutton"
                  onClick={handleClickOpen}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      {/* Get Started Dialog */}
      <div className="GetStartedModal" id="popupScreen">
        <Dialog
          open={openGetStarted}
          onClose={handleClose}
          maxWidth={"xl"}
          className="GetStartedModal"
        >
          <DialogContent className="DialogBoxStyles DialogBoxStylesgetStrted">
            {isThankuPage ? (
              <Thankyou
                onClose={handleClose}
                isThankuPage={isThankuPage}
                setIsThankuPage={setIsThankuPage}
              />
            ) : (
              <>
                <div className="getStartedDialogbox">
                  <Label className="CrossIcon positionSetStyleOnDissmisIcon">
                    <span className="textColorStyle" onClick={handleClose}>
                      ✕
                    </span>
                  </Label>
                  <div className="imageFieldsstyles">
                    <div className="StartExperienceFields">
                      <div>
                        <Label className="HR_DialogLabel textColorStyle">
                        Try It Free, No Obligation
                        </Label>
                        <div className="availOffer">
                          {/* {"Avail upto 30% Halloween Offer Now"} */}
                        </div>
                      </div>
                      <form
                        id="lpgetstartedform"
                        className="lpgetstartedformclass"
                      >
                        <TextField
                          className="textColorStyle"
                          margin="dense"
                          id="name"
                          label="Contact Name"
                          placeholder="Enter contact name"
                          type="text"
                          fullWidth
                          required
                          value={Name}
                          variant="outlined"
                          onChange={getNameValue}
                        />
                        <TextField
                          margin="dense"
                          className="textColorStyle"
                          id="email"
                          onBlur={() => submitEmailData("getstarted")}
                          label="Email address"
                          placeholder="Enter email address"
                          type="email"
                          required
                          fullWidth
                          variant="outlined"
                          value={Email?.toLowerCase()}
                          onChange={getEmailValue}
                        />
                        <TextField
                          className="textColorStyle"
                          margin="dense"
                          id="name"
                          label="Phone Number"
                          placeholder="Enter phone number"
                          type="tel"
                          required
                          fullWidth
                          variant="outlined"
                          value={PhoneNumber}
                          onChange={getPhoneValue}
                        />
                        {props.OfferPage=="CubicAnniversary" ? <>
                          <Dropdown
                          options={IAmInterestedOptions}
                          className="textColorStyle"
                          label="I am interested in"
                          placeholder="Please select your option here"
                          required
                          defaultSelectedKey={IAmInterested}
                          onChange={onChangeOfInterstedIn}
                        />
                        </>:<>
                        {/* <Dropdown
                          options={IAmInterestedOptions}
                          className="textColorStyle"
                          label="I am interested in"
                          placeholder="Please select your option here"
                          required
                          defaultSelectedKey={IAmInterested}
                          onChange={onChangeOfInterstedIn}
                        /> */}
                        </>}
                     

                      {isErroMessage
                        ? SuccessMessage("error")
                        : BusinessEmailMessage
                        ? SuccessMessage("businessemail")
                        : FormatEmailMessage
                        ? SuccessMessage("formatemail")
                        : null}
                      <div className="SubmitbtngetStarted">
                        <PrimaryButton
                          id="lpgetstartedsubmitbutton"
                          className="subButton"
                          onClick={() => submitRequest("getstarted")}
                        >
                          {ButtonSaveText1}
                          {loading1 && (
                            <div className="elementToFadeInAndOut">
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          )}
                        </PrimaryButton>
                      </div>
                      <p className="PrivacypolicyText textColorStyle">
                        By proceeding, you accept Cubic Logics’s{" "}
                        <a
                          className="LinkTextUI"
                          href="https://www.cubiclogics.com/terms-and-conditions/"
                        >
                          terms and conditions
                        </a>{" "}
                        {" and "}
                        <a
                          className="LinkTextUI"
                          href="https://www.cubiclogics.com/privacy-policy/"
                        >
                          privacy policy
                        </a>
                      </p>
                      </form>
                    </div>
                    <div className="TextColorImage">
                      <p className="OutstandingText">
                        "Exceptional tool that delivers seamless integration,
                        powerful features, and unmatched reliability."
                      </p>
                    </div>
                  </div>
                  <form id="GetStratedSuccessMessageformid">
                  {/* {isSuccessMessage ? ( */}
                  <div
                    className="GetStratedSuccessMessage"
                    style={{
                      padding: "0vw 1vw",
                      display: isSuccessMessage ? "block" : "none",
                    }}
                  >
                    {SuccessMessage("success")}
                  </div>
                  {/* ) : null} */}
                  </form>
                </div>

                <DialogFooter>
                  <div className="FooterSlider">
                    <SliderDialogbox />
                  </div>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>

      {/* Book a Demo Dialog */}
      <Dialog
        open={openBookaDemo}
        onClose={handleCloseBookaDemo}
        maxWidth={"xm"}
        className="GetStartedModal"
      >
        <DialogContent
          className="DialogBoxStyles"
          style={{ paddingTop: "2vw" }}
        >
          <Label className="CrossIcon positionSetStyleOnDissmisIcon2">
            <span className="textColorStyle " onClick={handleCloseBookaDemo}>
              ✕
            </span>
          </Label>
          <div className="BookDemoHeading DialogBoxHeading">
            <Label className="HR_DialogLabel textColorStyle ">
              {isBookaDemoSaved
                ? "Book your slot"
                : "Schedule a free personalized 1:1 demo"}
            </Label>
            <div className="availOffer">
              {/* {"Avail upto 30% Halloween Offer Now"} */}
            </div>
          </div>

          {isBookaDemoSaved ? (
            <>
              <div className="bookademoButton">
                <Label className="textColorStyle">
                  Please click the below button to book your time slot
                </Label>
                <PrimaryButton
                  onClick={() => (
                    window.open(BookaDemoURl, "_self"),
                    setIsBookaDemoSaved(false),
                    handleCloseBookaDemo
                  )}
                  className="textColorStyle"
                >
                  Book
                </PrimaryButton>
              </div>
            </>
          ) : (
            <div className="getStartedDialogbox" style={{ padding: "0" }}>
              <div className="BookaDemoFields">
                <div className="widthSetForm">
                  <form id="lpbookademoform" className="lpbookademoformclass">
                    {/* <TextField
            margin="dense"
            placeholder="Please enter name"
            id="name"
            label="Name"
            type="text"
            fullWidth
            required
            value={Name}
            variant="outlined"
            onChange={getNameValue}
          /> */}
                    <TextField
                      margin="dense"
                      className="textColorStyle"
                      id="email"
                      label="Email address"
                      onBlur={() => submitEmailData("bookademo")}
                      placeholder="Enter email address"
                      type="email"
                      required
                      fullWidth
                      variant="outlined"
                      value={Email?.toLowerCase()}
                      onChange={getEmailValue}
                    />
                    {/* <TextField
            margin="dense"
            id="name"
            label="Phone number"
            placeholder="Please enter phone number"
            type="text"
            required
            fullWidth
            variant="outlined"
            value={PhoneNumber}
            onChange={getPhoneValue}
          /> */}
                  {props.OfferPage == "CubicAnniversary" ? <>
                    <Dropdown
            options={IAmInterestedOptions}
            className="textColorStyle"
            label="I am interested in"
            placeholder="Please select your option here"  
            required
            defaultSelectedKey={IAmInterested}
            onChange={onChangeOfInterstedIn}
          /> 
                  </>:<>
                  {/* <Dropdown
            options={IAmInterestedOptions}
            label="I am interested in"
            placeholder="Please select your option here"  
            required
            defaultSelectedKey={IAmInterested}
            onChange={onChangeOfInterstedIn}
          />  */}
                  </>} 
                    {/* <TextField
            margin="dense"
            placeholder="Please enter your answer here..."
            id="CompanyWebSite"
            label="Company website"
            type="text"
            required
            fullWidth
            variant="outlined"
            value={CompanyWebsite}
            onChange={getCompanyWebSite}
          /> */}
                    <Dropdown
                      options={NoOfUsersOPtions}
                      className="textColorStyle"
                      label="No. of Microsoft 365 users"
                      required
                      placeholder="Select no. of Microsoft 365 users"
                      defaultSelectedKey={NoOfUsers}
                      onChange={onChangeOfNoOfUsers}
                    />
                    <TextField
                      id="anyremarks"
                      className="textColorStyle"
                      placeholder="Enter your answer here..."
                      label="Is there anything specific you would like us to include in the meeting ?"
                      type="text"
                      required
                      fullWidth
                      variant="outlined"
                      value={anyRemarks}
                      onChange={getAnyRemarks}
                      multiline
                      rows={2}
                    />
               
                  {isErroMessage
                    ? BookaDemoSuccessMessage("error")
                    : BusinessEmailMessage
                    ? BookaDemoSuccessMessage("businessemail")
                    : FormatEmailMessage
                    ? BookaDemoSuccessMessage("formatemail")
                    : null}
                  <div className="SubmitbtngetStarted">
                    <PrimaryButton
                      id="lpbookademosubmitbutton"
                      className="subButton"
                      onClick={() => submitRequest("bookademo")}
                    >
                      {ButtonSaveText1}
                      {loading1 && (
                        <div className="elementToFadeInAndOut">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      )}
                    </PrimaryButton>
                  </div>
                  </form>
                  <p className="PrivacypolicyText textColorStyle">
                    By proceeding, you accept Cubic Logics’s{" "}
                    <a
                      className="LinkTextUI"
                      href="https://www.cubiclogics.com/terms-and-conditions/"
                    >
                      terms and conditions
                    </a>{" "}
                    {" and "}
                    <a
                      className="LinkTextUI"
                      href="https://www.cubiclogics.com/privacy-policy/"
                    >
                      privacy policy
                    </a>
                  </p>
                </div>
                <div className="BorderSet"></div>
                <div className="TextColorImage">
                  <p className="OutstandingText">
                    "Outstanding product that combines ease of use, robust
                    security, and excellent value for money."
                  </p>
                </div>
              </div>
              {/* {isSuccessMessage ? ( */}
              <div
              className="bookademoSuccessClass"
                style={{
                  padding: "0vw 1vw",
                  display: isSuccessMessage ? "block" : "none",
                }}
              >
                {" "}
                {BookaDemoSuccessMessage("success")}{" "}
              </div>
              {/* ) : null} */}
              <DialogFooter>
                <div className="FooterSlider">
                  <SliderDialogbox />
                </div>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
export default DemoButtons;

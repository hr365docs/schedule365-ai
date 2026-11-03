import * as React from "react";
import {
  DialogFooter,
  Dropdown,
  TextField,
  Link,
  Label,
  PrimaryButton,
} from "@fluentui/react";
import { Dialog, DialogContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Thankyou from "../Thankyou";
import { MyContext } from "../../App";
import { getAppName, getRandomIPToken } from "../GlobalMultiple/GlobalConstants";

let IPDATA;
let lpIPAddress = "";
let lpCountry = "";
let lpCity = "";
let lpstate = "";
let lpTimeZone = "";
function SpecailButtons(props) {
  const Navigate = useNavigate();
  const [isThankuPage, setIsThankuPage] = React.useState(false);
  // const [isthankupage, setIsthankupage] = React.useState(false)
  const [openGetStarted, setOpenGetStarted] = React.useState(false);
  const [openBookaDemo, setOpenBookaDemo] = React.useState(false);
  const [Name, setName] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [PhoneNumber, setPhoneNumber] = React.useState("");
  const [organization, setOrganization] = React.useState("");
  // const [CompanyWebsite, setCompanyWebsite] = React.useState("");
  // const [anyRemarks, setAnyRemarks] = React.useState("");
  const [NoOfUsers, setNoOfUsers] = React.useState("");
  const [IPAddress, setIPAddress] = React.useState("");
  const SiteName = React.useContext(MyContext);
  // const [timezone, setTimezone] = React.useState("");
  // const [country, setCountry] = React.useState("");
  // const [state, setState] = React.useState("");
  // const [city, setCity] = React.useState("");
  const [IAmInterested, setIAmInterested] = React.useState("Helpdesk 365");
  const [ButtonSaveText1, setButtonSaveText1] = React.useState("Submit");
  const [loading1, setLoading1] = React.useState(false);
  const [isSuccessMessage, setisSuccessMessage] = React.useState(false);
  const [isErroMessage, setisErrorMessage] = React.useState(false);
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
  };
  const handleClose = () => {
    setOpenGetStarted(false);
    ResetData();
  };

  const handleClickOpenBookaDemo = () => {
    setOpenBookaDemo(true);
    // getIPAddress();
    setisSuccessMessage(false);
    setisErrorMessage(false);
    setLoading1(false);
    setBusinessEmailMessage(false);
    setFormatEmailMessage(false);
  };
  const handleCloseBookaDemo = () => {
    setOpenBookaDemo(false);
    ResetData();
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
  const getOrganiZation = (event) => {
    setOrganization(event.target.value);
  };
  const getNoOfUsers = (event) => {
    setNoOfUsers(event.target.value);
  };

  // const getCompanyWebSite = (event) => {
  //   setCompanyWebsite(event.target.value);
  // };
  // const getAnyRemarks = (event) => {
  //   setAnyRemarks(event.target.value);
  // };



  const IAmInterestedOptions = [
    { key: "Employee Directory 365", text: "Employee Directory 365" },
    { key: "Helpdesk 365", text: "Helpdesk 365" },
    { key: "Asset 365", text: "Asset 365" },
    { key: "Employee Onboarding 365", text: "Employee Onboarding 365" },
    { key: "Performance Management 365", text: "Performance Management 365" },
    { key: "Time Off Manager 365", text: "Time Off Manager 365" },
    { key: "Timesheet 365", text: "Timesheet 365" },
    { key: "Expense 365", text: "Expense 365" },
    { key: "CLM 365", text: "CLM 365" },
    { key: "Revenue 365", text: "Revenue 365" },
    { key: "LMS 365", text: "LMS 365" },
    { key: "HCM 365", text: "HCM 365" },
    { key: "Civic 365", text: "Civic 365" },
    { key: "Recruitment Management 365", text: "Recruitment Management 365" },
    { key: "Task 365", text: "Task 365" },
    { key: "Custom Projects", text: "Custom Projects" },
  ];
  // const NoOfUsersOPtions = [
  //   { key: "Upto 50", text: "Upto 50" },
  //   { key: "50 - 100", text: "50 - 100" },
  //   { key: "100 - 200", text: "100 - 200" },
  //   { key: "200 - 300", text: "200 - 300" },
  //   { key: "300 - 500", text: "300 - 500" },
  //   { key: "500 - 750", text: "500 - 750" },
  //   { key: "750 - 1000", text: "750 - 1000" },
  //   { key: "1000 - 1500", text: "1000 - 1500" },
  //   { key: "1500 - 2000", text: "1500 - 2000" },
  //   { key: "2000 - 5000", text: "2000 - 5000" },
  //   { key: "5000 and above", text: "5000 and above" },
  // ];

  function ResetData() {
    // setAnyRemarks('');
    // setCompanyWebsite('');
    setEmail("");
    setName("");
    setPhoneNumber("");
    setIAmInterested("");
    setNoOfUsers("");
    setOrganization("");

    lpstate = "";
    lpCity = "";
    lpCountry = "";
    lpIPAddress = "";
    lpTimeZone = "";
    // setCity("");
    // setIPAddress("");
    // setTimezone("");
    // setCountry("");
    // setState("");
  }
  const onChangeOfInterstedIn = (event, item) => {
    setIAmInterested(item.key);
  };
  // const onChangeOfNoOfUsers = (event, item) => {
  //   setNoOfUsers(item.key);
  // };

  // function getIPAddress() {
  //   const ipAddress = ""; // Replace with the IP address you want to query
  //   const access_token = "843b85132fe7ea"; // Replace with your actual IPinfo access token
  //   // Make a request to IPinfo API
  //   fetch(`https://freeipapi.com/api/json/`).then((response) => response.json())
  //   .then((data) => {
  //     console.log("IPInfo Response:", data);
  //     // Access specific details
  //     // setCity(data?.city);
  //     // setState(data?.region);
  //     // setCountry(data?.country);
  //     // setIPAddress(data?.ip);
  //     // setTimezone(data?.timezone);
  //   })
  //   .catch((error) => console.error("Error fetching IPInfo:", error));
  //   // fetch(`https://ipinfo.io/${ipAddress}?token=${access_token}`)
  //   //   .then((response) => response.json())
  //   //   .then((data) => {
  //   //     console.log("IPInfo Response:", data);
  //   //     // Access specific details
  //   //     setCity(data?.city);
  //   //     setState(data?.region);
  //   //     setCountry(data?.country);
  //   //     setIPAddress(data?.ip);
  //   //     setTimezone(data?.timezone);
  //   //   })
  //   //   .catch((error) => console.error("Error fetching IPInfo:", error));
  // }

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
  // async function submitEmailData(buttonType) {
  //   let BuisnessEMailflag = false;
  //   let FormatEMailflag = false;
  //   var validRegex =
  //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //   if (isStringValidated(Email) && Email?.toLowerCase()?.match(validRegex)) {
  //     FormatEMailflag = false;
  //   } else {
  //     FormatEMailflag = true;
  //   }

  //   if (
  //     isStringValidated(Email) &&
  //     !Email?.toLowerCase()?.includes(
  //       "@gmail.com",
  //       "@yahoo.com",
  //       "@outlook.com",
  //       "hotmail.com"
  //     )
  //   ) {
  //     BuisnessEMailflag = false;
  //   } else {
  //     BuisnessEMailflag = true;
  //   }
  //   //Current Data
  //   const currentDate = new Date();
  //   const options = { year: "numeric", month: "long", day: "numeric" };
  //   const formattedDate = currentDate.toLocaleDateString("en-US", options);

  //   //Current Time
  //   let hours = currentDate.getHours();
  //   let minutes = currentDate.getMinutes();
  //   const amOrPm = hours >= 12 ? "pm" : "am";
  //   hours = hours % 12;
  //   hours = hours ? hours : 12;
  //   let Iminutes = minutes < 10 ? "0" + minutes : minutes;
  //   const currentTime = `${hours}:${Iminutes} ${amOrPm}`;

  //   //Current page URL
  //   const PageURL = window.location.href;

  //   //Current Email Body
  //   let EmailBodyFormat =
  //     "Name: " +
  //     Name +
  //     "<br>" +
  //     "Business Email Id: " +
  //     Email +
  //     "<br>" +
  //     "Phone Number: " +
  //     PhoneNumber +
  //     "<br>" +
  //     "<br>" +
  //     "<br>" +
  //     "--" +
  //     "<br>" +
  //     "<br>" +
  //     "<br>" +
  //     "Date: " +
  //     formattedDate +
  //     "<br>" +
  //     "Time: " +
  //     currentTime +
  //     "<br>" +
  //     "Page URL: " +
  //     PageURL +
  //     "<br>" +
  //     "User Agent: " +
  //     "<br>" +
  //     "Remote IP: " +
  //     IPAddress +
  //     "<br>";

  //   let EmailBody2 =
  //     "<html><head>" +
  //     '<meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head><body><div style="padding:0; border:1pt solid red"><p id="x_warning"' +
  //     'style="padding:0; border-style:none"><b><span style="color:red"></span></b>' +
  //     `<span style="color:red">&nbsp;Ext. email, don't open links / files unless sender is reliable.</span></p></div>` +
  //     "<div>Name:" +
  //     Name +
  //     "<br>Business Email id: " +
  //     Email +
  //     "<br>Phone Number: " +
  //     PhoneNumber +
  //     "<br><br>---<br><br>" +
  //     "Date: " +
  //     formattedDate +
  //     "<br>Time: " +
  //     currentTime +
  //     "<br>Page URL: " +
  //     PageURL +
  //     "<br>" +
  //     'User Agent: "" <br>' +
  //     "Remote IP: " +
  //     IPAddress +
  //     "<br></div></body></html>";

  //   if (!BuisnessEMailflag && !FormatEMailflag) {
  //     await getIPAddress();
  //     let data = {};
  //     const url1 = "https://apps.m365online.us/api/Home/TrialRequest";
  //     const url2 =
  //       "https://prod-03.centralindia.logic.azure.com:443/workflows/d91375fc5ae349b4ac907ab1eee46d1a/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=shtJjLt_PDc1aC2oWNSxGZWTgnWFLYKPaHyLaSLx4P0";
  //       if (buttonType === "specialprice") {
  //         data = {
  //           Name: Name,
  //           EmailID: Email?.toLowerCase(),
  //           PhoneNumber: PhoneNumber,
  //           PageUrl: PageURL,
  //           AppName: getAppName(),
  //           DateTime: formattedDate + " " + currentTime,
  //           Company: organization || '',
  //           IP: IPAddress || '',
  //           Country: country || '',
  //           City: city || '',
  //           State: state || '',
  //           Timezone: timezone || '',
  //           EmailBody: isStringValidated(EmailBody2)
  //             ? EmailBody2
  //             : EmailBodyFormat,
  //           RequestType: "Special Price",
  //           EmployeeSize: isStringValidated(NoOfUsers) ? NoOfUsers : "",
  //         };
  //       } else if (buttonType === "leadnpo") {
  //         data = {
  //           Name: isStringValidated(Name) ? Name : "",
  //           EmailID: isStringValidated(Email) ? Email?.toLowerCase() : "",
  //           PhoneNumber: isStringValidated(PhoneNumber) ? PhoneNumber : "",
  //           PageUrl: PageURL,
  //           AppName: getAppName(),
  //           DateTime: formattedDate + " " + currentTime,
  //           Company: organization || '',
  //           IP: IPAddress || '',
  //           Country: country || '',
  //           City: city || '',
  //           State: state || '',
  //           Timezone: timezone || '',
  //           EmailBody: isStringValidated(EmailBody2)
  //             ? EmailBody2
  //             : EmailBodyFormat,
  //           RequestType: "Lead NPO",
  //           Intrest: isStringValidated(IAmInterested) ? IAmInterested : "",
  //           // Webiste: isStringValidated(CompanyWebsite) ? CompanyWebsite : '',
  //           EmployeeSize: isStringValidated(NoOfUsers) ? NoOfUsers : "",
  //           // Remarks: isStringValidated(anyRemarks)? anyRemarks : ''
  //         };
  //       }
  //       console.log(data);
  //     try {
  //       fetch(url1, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       })
  //         .then((response) => {
  //           if (!response.ok) {
  //             throw new Error("Network response was not ok.");
  //           }
  //           return response.json();
  //         })
  //         .then((data) => {
  //           console.log("Response:", data);
  //         })
  //         .catch((error) => {
  //           console.log("There was a problem with the fetch operation:", error);
  //         });
  //     } catch {}

  //     try {
  //       fetch(url2, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       })
  //         .then((response) => {
  //           if (!response.ok) {
  //             throw new Error("Network response was not ok.");
  //           } else {
  //             console.log("Success");
  //           }
  //           return response.json();
  //         })
  //         .catch((error) => {
  //           console.log("There was a problem with the fetch operation:", error);
  //         });
  //     } catch {}
  //   } else {
  //     console.log("email is not valid");
  //   }
  // }

  async function submitRequest(buttonType) {
    setisErrorMessage(false);
    setLoading1(true);
    setButtonSaveText1("");
    let Requiredflag = false;
    let BuisnessEMailflag = false;
    let FormatEMailflag = false;
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (buttonType === "specialprice") {
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
      }
      if (!BuisnessEMailflag && !FormatEMailflag) {
        if (
          isStringValidated(Name) &&
          isStringValidated(Email) &&
          isStringValidated(PhoneNumber) &&
          isStringValidated(IAmInterested) &&
          isStringValidated(organization)
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
    } else if (buttonType === "leadnpo") {
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
      }
      if (!BuisnessEMailflag && !FormatEMailflag) {
        if (
          isStringValidated(Name) &&
          isStringValidated(Email) &&
          isStringValidated(PhoneNumber) &&
          isStringValidated(organization) &&
          isStringValidated(NoOfUsers)
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

    if (!Requiredflag && !BuisnessEMailflag && !FormatEMailflag) {
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
        "Remote IP :" +
        lpIPAddress +
        "<br></div></body></html>";

      setisErrorMessage(false);
      setFormatEmailMessage(false);
      setBusinessEmailMessage(false);
      let data = {};
      const url1 = "https://apps.m365online.us/api/Home/TrialRequest";
      const url2 =
        "https://prod-03.centralindia.logic.azure.com:443/workflows/d91375fc5ae349b4ac907ab1eee46d1a/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=shtJjLt_PDc1aC2oWNSxGZWTgnWFLYKPaHyLaSLx4P0";
      if (buttonType === "specialprice") {
        data = {
          Name: Name,
          EmailID: Email?.toLowerCase(),
          PhoneNumber: PhoneNumber,
          PageUrl: PageURL,
          AppName: getAppName(),
          DateTime: formattedDate + " " + currentTime,
          Company: organization || "",
          IP: lpIPAddress || "",
          Country: lpCountry || "",
          City: lpCity || "",
          State: lpstate || "",
          Timezone: lpTimeZone || "",
          EmailBody: isStringValidated(EmailBody2)
            ? EmailBody2
            : EmailBodyFormat,
          RequestType: "Special Price",
          EmployeeSize: isStringValidated(NoOfUsers) ? NoOfUsers : "",
        };
      } else if (buttonType === "leadnpo") {
        data = {
          Name: isStringValidated(Name) ? Name : "",
          EmailID: isStringValidated(Email) ? Email?.toLowerCase() : "",
          PhoneNumber: isStringValidated(PhoneNumber) ? PhoneNumber : "",
          PageUrl: PageURL,
          AppName: getAppName(),
          DateTime: formattedDate + " " + currentTime,
          Company: organization || "",
          IP: lpIPAddress || "",
          Country: lpCountry || "",
          City: lpCity || "",
          State: lpstate || "",
          Timezone: lpTimeZone || "",
          EmailBody: isStringValidated(EmailBody2)
            ? EmailBody2
            : EmailBodyFormat,
          RequestType: "Lead NPO",
          Intrest: isStringValidated(IAmInterested) ? IAmInterested : "",
          // Webiste: isStringValidated(CompanyWebsite) ? CompanyWebsite : '',
          EmployeeSize: isStringValidated(NoOfUsers) ? NoOfUsers : "",
          // Remarks: isStringValidated(anyRemarks)? anyRemarks : ''
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
            setButtonSaveText1("Submit");
            ResetData();
            setisSuccessMessage(true);
            setisErrorMessage(false);

            setTimeout(() => {
              // Navigate("/thank-you");
              setIsThankuPage(true);
            }, 2000);
            // switch (buttonType) {
            //   case "leadnpo":
            //     handleCloseBookaDemo();
            //     break;
            //   case "specialprice":
            //     handleClose();
            //     break;
            //   default:
            //     handleClose();
            //     break;
            // }
          })
          .catch((error) => {
            console.error(
              "There was a problem with the fetch operation:",
              error
            );
          });
      } catch { }

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
              setButtonSaveText1("Submit");
              ResetData();
              setisSuccessMessage(true);
              setisErrorMessage(false);
              setTimeout(() => {
                setIsThankuPage(true);
                //   Navigate("/thank-you");
              }, 2000);
            }
            return response.json();
          })
          .catch((error) => {
            console.error(
              "There was a problem with the fetch operation:",
              error
            );
          });
      } catch { }
    } else {
      console.log("Please fill the required fields");
    }
  }
  function SuccessMessage(messageType) {
    return (
      <>
        {messageType === "success" && (
          <>
            <div>
              <Label className="SuccessColor">
                <span className="green-tick-icon">✔</span>Your request has been
                submitted successfully.
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

  function BookaDemoSuccessMessage(messageType) {
    return (
      <>
        {messageType === "success" && (
          <>
            <div>
              <Label className="SuccessColor">
                <span className="green-tick-icon">✔</span>Your request has been
                submitted successfully.
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
      <div className="Hr_flex Mb_grid" style={{alignItems:props.LMS365=="LMS365"?"center":"",flexDirection:props.LMS365=="LMS365"? "column":"",}}>
        {props?.hideSpecialrequest=="hideSpecialrequest" ? "":<>
       <span>
  {props.SpecailButtonsTextUser || `${props.userCount} users?`}
</span>
        <Link
          className="Hr_Link"
          id="lpspecialpricebutton"
          onClick={handleClickOpen}
          underline
        >
          Contact us for special price
        </Link>
        </> }
       
      </div>
      <div className="Hr_flex Mb_grid" style={{flexDirection:props.LMS365=="LMS365"?"column":"",alignItems:props.LMS365=="LMS365"?"center":""}}>
       {props?.hideNPOrequest==="hideNPOrequest"?"":(<>
           <span>
        {props.SpecailButtonsText ||" For non profit organizations and govt funded educational institute pricing,"} 
        </span>
        <Link
          className="Hr_Link"
          id="lpnpopricebutton"
          onClick={handleClickOpenBookaDemo}
          underline
        >
          Click to know more
        </Link>
       </>)}
    
      </div>
      <div className="Hr_flex Mb_grid">
      </div>

      {/* Get Started Dialog */}
      <Dialog open={openGetStarted} onClose={handleClose} maxWidth={"xl"}>
        <DialogContent>
          {isThankuPage ? (
            <Thankyou
              onClose={handleClose}
              isThankuPage={isThankuPage}
              setIsThankuPage={setIsThankuPage}
            />
          ) : (
            <>
              <div
                className="HR_FlexCenterSpcBetween"
                style={{ display: "flex" }}
              >
                <Label className="HR_DialogLabel">
                  Custom Application Discussion
                </Label>
                <Label className="CrossIcon">
                  <span onClick={handleClose}>✕</span>
                </Label>
              </div>

              <form id="lpspecialpriceform">
                <TextField
                  margin="dense"
                  id="name"
                  label="Name"
                  placeholder="Please enter name"
                  type="text"
                  fullWidth
                  required
                  value={Name}
                  variant="outlined"
                  onChange={getNameValue}
                />
                <TextField
                  margin="dense"
                  // onBlur={() => submitEmailData("specialprice")}
                  id="email"
                  label="Email Address"
                  placeholder="Please enter email address"
                  type="email"
                  required
                  fullWidth
                  variant="outlined"
                  value={Email?.toLowerCase()}
                  onChange={getEmailValue}
                />
                <TextField
                  margin="dense"
                  id="name"
                  label="Phone Number"
                  placeholder="Please enter phone number"
                  type="text"
                  required
                  fullWidth
                  variant="outlined"
                  value={PhoneNumber}
                  onChange={getPhoneValue}
                />

                <Dropdown
                  options={IAmInterestedOptions}
                  label="Product"
                  placeholder="Product"
                  required
                  defaultSelectedKey={IAmInterested}
                  onChange={onChangeOfInterstedIn}
                />
                <TextField
                  margin="dense"
                  placeholder="Organization"
                  id="Organization"
                  label="Organization"
                  type="text"
                  required
                  fullWidth
                  variant="outlined"
                  value={organization}
                  onChange={getOrganiZation}
                />
                <TextField
                  margin="dense"
                  placeholder="Employee Size"
                  id="EmployeeSize"
                  label="Employee Size"
                  type="text"
                  required
                  fullWidth
                  variant="outlined"
                  value={NoOfUsers}
                  onChange={getNoOfUsers}
                />
              </form>
              {isErroMessage
                ? SuccessMessage("error")
                : BusinessEmailMessage
                  ? SuccessMessage("businessemail")
                  : FormatEmailMessage
                    ? SuccessMessage("formatemail")
                    : null}

              <DialogFooter>
                <PrimaryButton
                  className="specialbuuton"
                  id="lpspecialpricesubmitbutton"
                  onClick={() => submitRequest("specialprice")}
                >
                  {" "}
                  {ButtonSaveText1}
                  {loading1 && (
                    <div className="elementToFadeInAndOut">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  )}
                </PrimaryButton>
              </DialogFooter>
              <div
                className="customDiscussionSuccessClass"
                style={{
                  // padding: "0vw 1vw",
                  display: isSuccessMessage ? "block" : "none",
                }}
              >
                {SuccessMessage("success")}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Book a Demo Dialog */}
      <Dialog
        open={openBookaDemo}
        onClose={handleCloseBookaDemo}
        maxWidth={"xm"}
      >
        <DialogContent>
          {isThankuPage ? (
            <Thankyou
              onClose={handleClose}
              isThankuPage={isThankuPage}
              setIsThankuPage={setIsThankuPage}
            />
          ) : (
            <>
              <div
                className="HR_FlexCenterSpcBetween"
                style={{ display: "flex" }}
              >
                <Label className="HR_DialogLabel">NPO Price Request</Label>
                <Label className="CrossIcon">
                  <span onClick={handleCloseBookaDemo}>✕</span>
                </Label>
              </div>
              <form id="lpnpopriceform">
                <TextField
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
                />
                <TextField
                  margin="dense"
                  id="email"
                  label="Email address"
                  placeholder="Please enter email address"
                  type="email"
                  required
                  fullWidth
                  variant="outlined"
                  // onBlur={() => submitEmailData("leadnpo")}
                  value={Email?.toLowerCase()}
                  onChange={getEmailValue}
                />
                <TextField
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
                />
                <TextField
                  margin="dense"
                  placeholder="Organization"
                  id="Organization"
                  label="Organization"
                  type="text"
                  required
                  fullWidth
                  variant="outlined"
                  value={organization}
                  onChange={getOrganiZation}
                />

                <TextField
                  margin="dense"
                  placeholder="Employee Size"
                  id="EmployeeSize"
                  label="Employee Size"
                  type="text"
                  required
                  fullWidth
                  variant="outlined"
                  value={NoOfUsers}
                  onChange={getNoOfUsers}
                />
              </form>
              {isErroMessage
                ? BookaDemoSuccessMessage("error")
                : BusinessEmailMessage
                  ? BookaDemoSuccessMessage("businessemail")
                  : FormatEmailMessage
                    ? BookaDemoSuccessMessage("formatemail")
                    : null}
              <DialogFooter>
                <PrimaryButton
                  className="specialbuuton"
                  id="lpnpopricesubmitbutton"
                  onClick={() => submitRequest("leadnpo")}
                >
                  {" "}
                  {ButtonSaveText1}
                  {loading1 && (
                    <div className="elementToFadeInAndOut">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  )}
                </PrimaryButton>
              </DialogFooter>
              <div
                className="npoRequestSuccessMessage"
                style={{
                  // padding: "0vw 1vw",
                  display: isSuccessMessage ? "block" : "none",
                }}
              >
                {BookaDemoSuccessMessage("success")}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
export default SpecailButtons;

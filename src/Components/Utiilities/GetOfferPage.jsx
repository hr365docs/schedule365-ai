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
import { useEffect, useState } from 'react';
import { getAppName, getRandomIPToken } from "../GlobalMultiple/GlobalConstants";

let IPDATA;
let lpIPAddress = "";
let lpCountry = "";
let lpCity = "";
let lpstate = "";
let lpTimeZone = "";
function GetOfferPage(props) {
    console.log(props)
    const Navigate = useNavigate();
    const [isThankuPage, setIsThankuPage] = React.useState(false);
    const SiteName = React.useContext(MyContext);
    const [openGetStarted, setOpenGetStarted] = React.useState(false);
    const [openBookaDemo, setOpenBookaDemo] = React.useState(false);
    const [openOfferPopup, setOpenOfferPopup] = React.useState(false);
    const [Name, setName] = React.useState("");
    const [Email, setEmail] = React.useState("");
    const [PhoneNumber, setPhoneNumber] = React.useState("");
    const [CompanyWebsite, setCompanyWebsite] = React.useState("");
    const [anyRemarks, setAnyRemarks] = React.useState("");
    const [NoOfUsers, setNoOfUsers] = React.useState("");
    const [IAmInterested, setIAmInterested] = React.useState("Helpdesk 365");
    const [ButtonSaveText1, setButtonSaveText1] = React.useState("Submit");
    const [loading1, setLoading1] = React.useState(false);
    const [isSuccessMessage, setisSuccessMessage] = React.useState(false);
    const [isErroMessage, setisErrorMessage] = React.useState(false);
    const [isBookaDemoSaved, setIsBookaDemoSaved] = React.useState(false);
    const [BusinessEmailMessage, setBusinessEmailMessage] = React.useState(false);
    const [FormatEmailMessage, setFormatEmailMessage] = React.useState(false);
      const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
        
        React.useEffect(() => {
            const handleResize = () => {
                setIsMobile(window.innerWidth <= 767);
            };
    
            window.addEventListener('resize', handleResize);
    
            return () => {
                window.removeEventListener('resize', handleResize);
            };
    }, []);

    React.useEffect(() => {
        setTimeout(() => {
            handleClickOpenOfferPopup();
            setButtonSaveText1("Get Offer");
        }, 9000);
    }, []);

    const handleClickOpenOfferPopup = () => {
        setButtonSaveText1("Get Offer");
        setOpenOfferPopup(true);
        ResetData();
        setisErrorMessage(false);
        setFormatEmailMessage(false);
        setBusinessEmailMessage(false);
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
    const handleCloseOfferPopup = () => {
        setButtonSaveText1("Get Offer");
        setOpenOfferPopup(false);
        ResetData();
        setisErrorMessage(false);
        setFormatEmailMessage(false);
        setBusinessEmailMessage(false);
    };

    function isStringValidated(value) {
        if (value === null || value === undefined || value === "") {
            return false;
        } else {
            return true;
        }
    }

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
        { key: "CLM 365 - Contract Management 365 ", text: "CLM 365 - Contract Management 365 " },
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
            const url1 = "https://apps.m365online.us/api/Home/TrialRequest";
            const url2 =
                "https://prod-03.centralindia.logic.azure.com:443/workflows/d91375fc5ae349b4ac907ab1eee46d1a/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=shtJjLt_PDc1aC2oWNSxGZWTgnWFLYKPaHyLaSLx4P0";
            if (buttonType === "getstarted") {
                data = {
                    Name: Name,
                    EmailID: Email?.toLowerCase(),
                    PhoneNumber: PhoneNumber,
                    PageUrl: PageURL,
                    AppName: getAppName(),
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
                    AppName: getAppName(),
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
                            console.log("Success");
                        }
                        return response.json();
                    })
                    .catch((error) => {
                        console.log("There was a problem with the fetch operation:", error);
                    });
            } catch { }
        } else {
            console.log("email is not valid");
        }
    }

    async function submitRequest(e, buttonType) {
        // setTimeout(function() {
        // e.preventDefault(); // Prevent default behavior after tracking
        //  }, 0);
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
            }
            if (!BuisnessEMailflag && !FormatEMailflag) {
                if (
                    isStringValidated(Name) &&
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
                if (
                    // isStringValidated(Name) &&
                    // isStringValidated(PhoneNumber) &&
                    // isStringValidated(CompanyWebsite) &&
                    // isStringValidated(IAmInterested) &&
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
        } else if (buttonType === "offerPopup") {
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
                    setButtonSaveText1("Get Offer");
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
                    setButtonSaveText1("Get Offer");
                }
            }
            if (!BuisnessEMailflag && !FormatEMailflag) {
                if (
                    isStringValidated(Name) &&
                    isStringValidated(Email) &&
                    isStringValidated(IAmInterested) &&
                    isStringValidated(PhoneNumber)
                ) {
                    Requiredflag = false;
                } else {
                    Requiredflag = true;
                    setisSuccessMessage(false);
                    setisErrorMessage(true);
                    setLoading1(false);
                    setButtonSaveText1("Get Offer");
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
                    AppName: getAppName(),
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
                    AppName: getAppName(),
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
            } else if (buttonType === "offerPopup") {
                data = {
                    Name: isStringValidated(Name) ? Name : "",
                    EmailID: isStringValidated(Email) ? Email?.toLowerCase() : "",
                    PhoneNumber: isStringValidated(PhoneNumber) ? PhoneNumber : "",
                    PageUrl: PageURL || "",
                    AppName: getAppName(),
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
                    RequestType: "Offer",
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
                        } else {
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
                                case "offerPopup":
                                    setLoading1(false);
                                    setButtonSaveText1("Get Offer");
                                    setTimeout(() => {
                                        handleCloseOfferPopup();
                                        // setOpenOfferPopup(false);
                                        setisSuccessMessage(false);
                                    }, 1000);
                                    // e.preventDefault();
                                    break;
                                default:
                                    setTimeout(() => {
                                        setIsThankuPage(true);
                                    }, 2000);
                                    setButtonSaveText1("Submit");
                                    break;
                            }
                        }
                        return response.json();
                    })
                    .then((data) => {
                        // }, 3000);
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
                                case "offerPopup":
                                    setButtonSaveText1("Get Offer");
                                    setLoading1(false);
                                    setTimeout(() => {
                                        handleCloseOfferPopup();
                                        // setOpenOfferPopup(false);
                                    }, 3000);
                                    // e.preventDefault();
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
            } catch { }
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
                                <span className={props.footer ? "green-tick-iconFooter" : "green-tick-icon"}>✔</span>Your request has been
                                submitted successfully.
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
                            <Label className="SuccessColor" style={{display:'flex'}}>
                                <span className="green-tick-icon">✔</span>
                                <div className="BookADemoMessage">
                                    Now you can select your timeslot for the demo.
                                </div>
                            </Label>
                        </div>
                    </>
                )}
                {messageType === "successOffer" && (
                    <>
                        <div>
                            <Label className="SuccessColor">
                                <span className="green-tick-icon">✔</span>
                                <span className="BookADemoMessage">
                                    Thankyou for submitting the request.
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
    function handleEntailmentRequest() {
        // e.preventDefault();
        console.log("handle request");
    }
    return (
        <>
            {/* <div className="OfferHeader">
        <img
          id="HalloweenOfferHeader"
          className="HalloweenOfferHeader"
          src="https://ik.imagekit.io/zn4au2jftpm5/Header_V4IgUgpwwr.gif?updatedAt=1731497910075"
          alt="Cubic Anniversary "
          onClick={handleClickOpenOfferPopup}
          style={{ cursor: "pointer" }}
        />
      </div> */}



            {/* <div className="HR_PrimaryButton">
                <button
                    className="buuttonvolou"
                    style={{padding:"0.7vw 2vw"}}
                    id="lpbookademobutton"
                onClick={handleClickOpenOfferPopup}
                >
                    Get Offer
                </button>
            </div> */}


            <div className="HR_PrimaryButton">
  {props.Type == "Image" ? (
    
  <div className='Margin-top' style={{cursor:"pointer"}}
  onClick={handleClickOpenOfferPopup}>
            {isMobile ? (
                <img 
                    src="https://ik.imagekit.io/zn4au2jftpm5/Apps365/offers/Mobile.webp?updatedAt=1734109577056" 
                    alt="Christmas Offer - Mobile" 
                />
            ) : (
                <img className="christmassale"
                    src="https://ik.imagekit.io/zn4au2jftpm5/Apps365/offers/christamas-banner_45ZY4n1n6.webp?updatedAt=1734411811211" 
                    alt="Christmas Offer - Desktop" 
                />
                
            )}
        </div>



    
 
 
     


 
  ) : (
    <button
    className="buuttonvolou"
    style={{ padding: "0.7vw 2vw" }}
    id="lpbookademobutton"
    onClick={handleClickOpenOfferPopup}
  >
    Get Offer
  </button>
  )}
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
                        <span className="textColorStyle" onClick={handleCloseBookaDemo}>
                            ✕
                        </span>
                    </Label>
                    <div className="BookDemoHeading DialogBoxHeading">
                        <Label className="HR_DialogLabel textColorStyle ">
                            {isBookaDemoSaved
                                ? "Book your slot"
                                : "Schedule a free personalized 1:1 demo"}
                        </Label>
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
                                    <form id="lpbookademoform">
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
                                            placeholder="Please enter email address"
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
                                        {/* <Dropdown
            options={IAmInterestedOptions}
            label="I am interested in"
            placeholder="Please select your option here"  
            required
            defaultSelectedKey={IAmInterested}
            onChange={onChangeOfInterstedIn}
          /> */}
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
                                            placeholder="Please select no. of Microsoft 365 users"
                                            defaultSelectedKey={NoOfUsers}
                                            onChange={onChangeOfNoOfUsers}
                                        />
                                        <TextField
                                            id="anyremarks"
                                            className="textColorStyle"
                                            placeholder="Please enter your answer here..."
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
                                    </form>
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
                                            onClick={(e) => submitRequest(e, "bookademo")}
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
                                </div>
                                <div className="BorderSet"></div>
                                <div className="TextColorImage">
                                    <p className="OutstandingText">
                                        "Outstanding product that combines ease of use, robust
                                        security, and excellent value for money."
                                    </p>
                                </div>
                            </div>
                            {isSuccessMessage ? (
                                <div style={{ padding: "0vw 1vw" }}>
                                    {" "}
                                    {BookaDemoSuccessMessage("success")}{" "}
                                </div>
                            ) : null}
                            <DialogFooter>
                                <div className="FooterSlider">
                                    <SliderDialogbox />
                                </div>
                            </DialogFooter>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

            {/* Offer Dialog */}
            {openOfferPopup && (
                <Dialog
                    open={openOfferPopup}
                    onClose={handleCloseOfferPopup}
                    maxWidth={"xm"}
                    className="OfferPopupModal"
                >
                    <DialogContent
                        style={{ padding: "0vw" }}
                        className="OfferpopupBoxStyles"
                    >
                        <Label className="CrossIconOffer positionSetStyleOnDissmisIcon2">
                            <span
                                className="textColorStyleOffer"
                                onClick={handleCloseOfferPopup}
                            >
                                ✕
                            </span>
                        </Label>
                        <div className="offermainContainer">
                           
                               
                            
                                < div className={`${props.page == "BlackFriday" ? "offerBelowContainerBlackfriday " : "offerBelowContainer"}`}>
                                <div
                                // className="offerBelowContainerDiv"
                                >
                                  <h5>Offer is expiring soon! Fill in your details
below to receive your personalized
coupon code.</h5>
                                    <div
                                        // className="SubmitbtngetStarted"
                                        style={{ margin: "0" }}
                                    >
                                        <form
                                            id="lpgetOffersubmitButtonForm"
                                            className="lpgetOffersubmitButtonFormClass"
                                        >
                                            <TextField
                                                margin="dense"
                                                placeholder="Contact Name *"
                                                id="name"
                                                // label="Name"
                                                type="text"
                                                fullWidth
                                                // required
                                                value={Name}
                                                variant="outlined"
                                                onChange={getNameValue}
                                            />
                                            <TextField
                                                margin="dense"
                                                className="textColorStyle"
                                                id="email"
                                                // onBlur={() => submitEmailData("offerpopup")}
                                                // label="Email address"
                                                placeholder="Business email id *"
                                                type="email"
                                                // required
                                                fullWidth
                                                variant="outlined"
                                                value={Email?.toLowerCase()}
                                                onChange={getEmailValue}
                                            />
                                            <TextField
                                                margin="dense"
                                                id="name"
                                                // label="Phone number"
                                                placeholder="Phone No *"
                                                type="text"
                                                // required
                                                fullWidth
                                                variant="outlined"
                                                value={PhoneNumber}
                                                onChange={getPhoneValue}
                                            />
                                            <Dropdown
                                                options={IAmInterestedOptions}
                                                // label="I am interested in"
                                                placeholder="Select Application *"
                                                // required
                                                defaultSelectedKey={IAmInterested}
                                                onChange={onChangeOfInterstedIn}
                                            />
                                            {/* {isSuccessMessage ? ( */}
                                            <div style={{ padding: "0vw 1vw", display: isSuccessMessage ? "block" : "none" }}>
                                                {" "}
                                                {BookaDemoSuccessMessage("successOffer")}{" "}
                                            </div>
                                            {/* ) : null} */}
                                            {/* <span></span> */}
                                            {isErroMessage
                                                ? SuccessMessage("error")
                                                : BusinessEmailMessage
                                                    ? SuccessMessage("businessemail")
                                                    : FormatEmailMessage
                                                        ? SuccessMessage("formatemail")
                                                        : null}

                                            <button
                                                id="lpGetOfferbutton"
                                                type="button"
                                                className="subButton getOfferbutton"
                                                onClick={(e) => submitRequest(e, "offerPopup")}
                                            // onClick={()=>handleEntailmentRequest()}
                                            >
                                                {ButtonSaveText1}
                                                {loading1 && (
                                                    <div className="elementToFadeInAndOut">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                )}
                                            </button>
                                            {/* <PrimaryButton
                      id="lpGetOfferbutton"
                      className="subButton getOfferbutton"
                      onClick={() => submitRequest("offerPopup")}
                    >
                      {ButtonSaveText1}
                      {loading1 && (
                        <div className="elementToFadeInAndOut">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      )}
                    </PrimaryButton> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </>
    );
}
export default GetOfferPage;

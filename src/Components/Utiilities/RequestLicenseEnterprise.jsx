
import React, { useState, useEffect } from 'react';
import './RequestLicense.css'; // Assuming you'll create this CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
export const RequestLicenseEnterprise = ({ handleClosepopup }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [companyWebsite, setCompanyWebsite] = useState('');
    const [noOfUsers, setNoOfUsers] = useState('');
    const [formMessage, setFormMessage] = useState({ type: 'success', text: '' });
    const [loading, setLoading] = useState(false);

    const [IAmInterested, setIAmInterested] = useState('');

  function handleClosepopup() {
    const popup = document.getElementById("customEnterPrisePopup");
    if (popup) popup.style.display = "none";
  }

    useEffect(() => {
        setIAmInterested(getEnterpriceLicenseAppName());
    }, []);
    const getEnterpriceLicenseAppName = () => {
        const PageURL = window.location.href?.toLowerCase();
        if (PageURL.includes("directory")) {
            return "Employee Directory 365";
        } else if (PageURL.includes("helpdesk")) {
            return "Helpdesk 365";
        } else if (PageURL.includes("asset-management")) {
            return "Asset 365";
        } else if (PageURL.includes("time-off")) {
            return "Time Off Manager 365";
        } else if (PageURL.includes("employee-onboarding")) {
            return "Employee Onboarding 365";
        } else if (PageURL.includes("performance-management")) {
            return "Performance Management 365";
        } else if (PageURL.includes("contract")) {
            return "CLM 365 - Contract Management";
        } else if (PageURL.includes("timesheet")) {
            return "Timesheet 365";
        } else {
            return window.location.href;
        }
    };



    const isStringValidated = (value) => {
        return value !== null && value !== undefined && value !== "";
    };

    const validateEmailidformat = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const validateBusinessEmailIDFormat = (email) => {
        const freeEmailDomains = [
           "@gmail.com",
            "@yahoo.com",
            "@hotmail.com",
            "@outlook.com",
            "@icloud.com",
            "@mailinator.com",
            "@aol.com",
            "@rediffmail.com",
            "@ymail.com",
            "@live.com",
            "@msn.com",
            "@me.com",
            "@mac.com",
            "@zoho.com",
            "@protonmail.com",
            "@gmx.com",
            "@mail.com",
            "@fastmail.com",
            "@hushmail.com",
            "@tutanota.com",
            "@inbox.com",
            "@yahoo.co.in",
            "@yahoo.co.uk",
            "@yahoo.in",
            "@yahoo.fr",
            "@yahoo.ca",
            "@yahoo.de",
            "@yahoo.co.id",
            "@hotmail.co.uk",
            "@live.co.uk",
            "@outlook.co.uk",
            "@windowslive.com",
            "@mail.ru",
            "@yandex.com",
            "@pm.me"
        ];
        return !freeEmailDomains.some((domain) =>
            email.toLowerCase().includes(domain)
        );
    };

 const getIpData = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const ipAddress = ""; 
                const access_token = "843b85132fe7ea"; 
                const success = true; 
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
            }, 2000);
        });
    };
        function showError(inputId, message) {
            $(inputId).next('.error-message').remove();
            $(inputId).after(`<p class="error-message">${message}</p>`);
        }
    const showMessage = (type, text) => {
        setFormMessage({ type, text });

    };
    const handleSubmit = async (e) => {
          e.preventDefault();
          setLoading(true);
          setFormMessage({ type: '', text: '' });
  
          $(".error-message").remove();
  
          let errors = [];
  
          if (!isStringValidated(name)) {
              showError("#HR-StandardPlan-Name", "Please enter your name.");
              errors.push("Please enter your name.");
          }
  
          if (!isStringValidated(email)) {
              showError("#HR-StandardPlan-email", "Please enter your business email address.");
              errors.push("Please enter your business email address.");
          } else {
              if (!validateEmailidformat(email)) {
                  showError("#HR-StandardPlan-email", "Invalid email format. Please enter a valid email address (e.g., user@example.com).");
                  errors.push("Invalid email format. Please enter a valid email address (e.g., user@example.com).");
              } else if (!validateBusinessEmailIDFormat(email)) {
                  showError("#HR-StandardPlan-email", "Please enter a business email address (e.g., user@company.com). Free email domains are not allowed.");
                  errors.push("Please enter a business email address (e.g., user@company.com). Free email domains are not allowed.");
              }
          }
  
          if (!isStringValidated(phoneNumber)) {
              showError("#HR-StandardPlan-PhoneNumber", "Please provide your phone number.");
              errors.push("Please provide your phone number.");
          }
  
          if (!isStringValidated(companyWebsite)) {
              showError("#HR-StandardPlan-CompanyWebsite", "Please enter your company website.");
              errors.push("Please enter your company website.");
          }
  
          if (!isStringValidated(noOfUsers)) {
              showError("#HR-StandardPlans-NoOfUsers", "Please select the number of users.");
              errors.push("Please select the number of users.");
          }
  
          if (errors.length > 0) {
              document.querySelector(".btn-text").style.display = "inline";
              document.querySelector(".dots-loader").style.display = "none";
            //   showMessage('error', errors.join(' '));
              setLoading(false);
              return;
          }
  
          try {
              const ip = await getIpData();
              const emailBody = generateLicenseRequestEmail(ip);
  
              const formattedDate = new Date().toLocaleDateString('en-GB');
              const currentTime = new Date().toLocaleTimeString('en-GB');
  
              const data = {
                  Name: name,
                  EmailID: email?.toLowerCase(),
                  PhoneNumber: phoneNumber,
                  PageUrl: window.location.href,
                  EmployeeSize: noOfUsers,
                  AppName: getEnterpriceLicenseAppName(),
                  DateTime: `${formattedDate} ${currentTime}`,
                  Company: companyWebsite,
                  IPAddress: ip.ip || "",
                  Country: ip.country || "",
                  City: ip.city || "",
                  Region: ip.region || "",
                  Timezone: ip.timezone || "",
                  EmailBody: emailBody,
                  RequestType: "EnterpriseRequestLicense",
                  Intrest: isStringValidated(IAmInterested) ? IAmInterested : "",
                  DateTime: new Date()
              };
              console.log(data)
              const url1 = "https://apps.m365online.us/api/Home/TrialRequest";
              const url2 = "https://prod-03.centralindia.logic.azure.com:443/workflows/d91375fc5ae349b4ac907ab1eee46d1a/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=shtJjLt_PDc1aC2oWNSxGZWTgnWFLYKPaHyLaSLx4P0";
  
              const res1 = await fetch(url1, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(data),
              });
  
              if (!res1.ok) throw new Error("Failed to submit data to TrialRequest API.");
  
              const res2 = await fetch(url2, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(data),
              });
  
              if (!res2.ok) throw new Error("Failed to submit data to Logic App webhook.");
  
                  showMessage("success", `Thankyou! ✔  We’ve received your request for Enterprise Request license of ${IAmInterested}.`);
              resetForm();
              setTimeout(() => {
                  showMessage();
              }, 3000);
  
          } catch (error) {
              console.error("Submission error:", error);
            //   showMessage('error', 'An error occurred during submission. Please try again.');
          } finally {
              document.querySelector(".btn-text").style.display = "inline";
              document.querySelector(".dots-loader").style.display = "none";
              setLoading(false);
          }
      };

    const resetForm = () => {
        setName('');
        setEmail('');
        setPhoneNumber('');
        setCompanyWebsite('');
        setNoOfUsers('');
    };

    const generateLicenseRequestEmail = (ip) => {
        const PageURL = window.location.href;
        const currentDate = new Date();
        const options = { year: "numeric", month: "long", day: "numeric" };
        const formattedDate = currentDate.toLocaleDateString("en-US", options);

        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        const amOrPm = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12;
        let Iminutes = minutes < 10 ? "0" + minutes : minutes;
        const currentTime = `${hours}:${Iminutes} ${amOrPm}`;

        return `
            <div style="width:100%; margin:auto; font-family:assistant,sans-serif; line-height:1.3">
                <p style="margin: 0;">Hi Team,</p>
                <p style="margin: 0;">You have received a new inquiry regarding the <b>${IAmInterested} - Enterprise Plan </b>with the following details:</p>

                <p style="margin: 0;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 0;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 0;"><strong>Phone Number:</strong> ${phoneNumber}</p>
                <p style="margin: 0;"><strong>Company Website:</strong> ${companyWebsite}</p>
                <p style="margin: 0;"><strong>No. of Users:</strong> ${noOfUsers}</p>
                <p style="margin: 0;"><strong>Interested In:</strong> ${IAmInterested}</p>
                <p style="margin: 0;"><strong>Date & Time:</strong> ${formattedDate} ${currentTime}</p>
                <br>
                <br>
                 <p style="margin: 0;"><strong>IP Address:</strong> ${ip.ip || 'N/A'}</p>
                <p style="margin: 0;"><strong>City:</strong> ${ip.city || 'N/A'}</p>
                <p style="margin: 0;"><strong>Region:</strong> ${ip.region || 'N/A'}</p>
                <p style="margin: 0;"><strong>Country:</strong> ${ip.country || 'N/A'} ${ip.postal ? `(${ip.postal})` : ''}</p>
                <p style="margin: 0;"><strong>Timezone:</strong> ${ip.timezone || 'N/A'}</p>

                <p style="margin: 0;"><strong>Page URL:</strong> <a href="${PageURL}" target="_blank">${PageURL}</a></p>
            </div>
        `;
    };

    return (
        <div className='mainClassforPopup'>

                <div className='closepopup-RequestLicense'>    <FontAwesomeIcon onClick={handleClosepopup} icon={faTimes} /> </div>
                <div>
                    <h2 className='Request-LicenseHeading'>Request for the Custom Price​</h2>
                    <form id="bookDemoForm" className="custombookademoform" onSubmit={handleSubmit}>
                        <div>
                            <input
                                className="PhonenumberInput"
                                type="text"
                                id="HR-StandardPlan-Name"
                                placeholder="Please enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <input
                                className="PhonenumberInput"
                                type="email"
                                id="HR-StandardPlan-email"
                                placeholder="Please enter your business email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <input
                                className="PhonenumberInput"
                                type="number"
                                id="HR-StandardPlan-PhoneNumber"
                                placeholder="Phone Number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <input
                                className="PhonenumberInput"
                                type="text"
                                id="HR-StandardPlan-CompanyWebsite"
                                placeholder="Company website"
                                value={companyWebsite}
                                onChange={(e) => setCompanyWebsite(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <select
                                id="HR-StandardPlans-NoOfUsers"
                                value={noOfUsers}
                                onChange={(e) => setNoOfUsers(e.target.value)}
                                required
                            >
                                <option value="" disabled>Please select no of users</option>
                                <option value="Upto 50">Upto 50</option>
                                <option value="50 - 100">50 - 100</option>
                                <option value="100 - 200">100 - 200</option>
                                <option value="200 - 300">200 - 300</option>
                                <option value="300 - 500">300 - 500</option>
                                <option value="500 - 750">500 - 750</option>
                                <option value="750 -1000">750 -1000</option>
                                <option value="1000 - 1500">1000 - 1500</option>
                                <option value="1500 - 2000">1500 - 2000</option>
                                <option value="2000 - 5000">2000 - 5000</option>
                                <option value="5000 and above">5000 and above</option>
                            </select>
                        </div>
                    </form>

                    <div className="displayFLexAlignCenter margin1vw">
                        <button
                            className="SubmitButtonEnterpriceLicense"
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            <span className="btn-text" style={{ display: loading ? 'none' : 'inline' }}>Submit</span>
                            <span className="dots-loader" style={{ display: loading ? 'inline-flex' : 'none' }}>
                                <span>.</span>
                                <span>.</span>
                                <span>.</span>
                            </span>
                        </button>
                    </div>
                    <p className='DescriptionsforRequest'>
                        By proceeding, you accept Cubic Logics <a href="https://www.cubiclogics.com/end-user-license-agreement-eula/"> Terms and Conditions</a> and <a href="https://www.cubiclogics.com/privacy-policy/"> Privacy Policy</a>
                    </p>
                    {formMessage.text && (
                        <div className={`message-box success`}>
                            {formMessage.text}
                        </div>
                    )}
                </div>
        
            
        </div>
    );
}
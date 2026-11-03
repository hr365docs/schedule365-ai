import React from "react";
const CyberSecurity = ({PageName}) => {
    return (
        <div className="cybersecurity-container features-grid" style={{margin:PageName==="ET365"?"0px":"0 auto",maxWidth:PageName==="ET365"?"100%":"90%"}}> 
            <div className="cybersecurity-content">
                <h3>Cyber Security</h3>
                <p>
                    Cyber Security in GCC & GCC High within the Microsoft environment places high importance on stringent measures to protect sensitive government data, ensuring security with robust defenses and Microsoft applications.
                </p>
                <button className="request-info-button">Request more info</button>
            </div>
            <div className="Cont2">
                <div className="features-grid">
                <div className="feature-item">
                <div  className="imagesize">
                   <img  src="https://ik.imagekit.io/zn4au2jftpm5/Lp-page-Logos/3_wP7g_ddHm-.svg?updatedAt=1742554897903" alt="gcc" className="Cyberimages" />
                   </div>
                       <div>
                       <h4>GCC & GCC High</h4>
                       <p>Our apps are built for GCC & GCC high tenants of US Federal clouds.</p>
                       </div>
                  
                    </div>
                    <div className="feature-item">
                    <div  className="imagesize CLMSOC2Logo">
                    <img  src="https://ik.imagekit.io/zn4au2jftpm5/Lp-page-Logos/2_YqB82Bd6p.svg?updatedAt=1742554897914" alt="soc2" className="Cyberimages"/>
                    </div>
                    <div className="cybox">
                        <h4>SOC2 Type II Certified</h4>
                        <p>Our apps ensure security compliance, and data protection</p>
                        </div>
                    </div>
                    
                   
                </div>
                
                <div className="features-grid">
                <div className="feature-item">
                <div  className="imagesize">
                        
                        <img src="https://ik.imagekit.io/zn4au2jftpm5/Lp-page-Logos/1_6uHDwGT8f.svg?updatedAt=1742554897746" alt="Microsoft" className="Cyberimages" />
                        </div>
                        
                         <div>
                             <h4> <a href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps?search=hr365bizapps365&page=1" alt="MS Azuer">MS Azure Marketplace</a></h4>
                             <p>Our apps are tested by Microsoft and available on MS app store.</p>
                         </div>
                    </div>
                    <div className="feature-item">
                    <div  className="imagesize CLMAzureLogo">
                   <img  src="https://ik.imagekit.io/apps365/Lp-pages/Micosoft-store.svg" alt="Azuer" className="Cyberimages" />
                   </div>
                        <div>
                        <h4> <a href="https://appsource.microsoft.com/en-us/marketplace/apps?search=hr365bizapps365&page=1" alt="Microsoft">Microsoft Azure Benefits​​</a></h4>
                        <p>Unlock your Azure credits, AI services, and scalability.</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default CyberSecurity;

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '../Utiilities/ScrolltoTop'

const EULA = () => {
    return (
        <>
             <ScrollToTop/>
        <Header/>
        <div className='privacy HR_panel'>
            <h1>EULA - End-User License Agreement</h1>
            <p>This end user license terms are an agreement between you and the Cubic Logics. Please read them. They apply to the software applications you download from the Cubic Logics & Cubic Logics site, Microsoft Store or Windows Store(each of which is referred to in these license terms as the “Store”), including any updates or supplements for the application, unless the application comes with separate terms, in which case those terms apply.</p>
            <h2>BY DOWNLOADING OR USING THE APPLICATION, OR ATTEMPTING TO DO ANY OF THESE, YOU ACCEPT THESE TERMS. IF YOU DO NOT ACCEPT THEM, YOU HAVE NO RIGHT TO AND MUST NOT DOWNLOAD OR USE THE APPLICATION</h2>
            <p>The Cubic Logics means the entity licensing the application to you, as identified in the Store.</p>
            <p>If you comply with these license terms, you have the rights below.</p>
            <h2>1. Consent for Internet-based or wireless services.</h2>
            <p> If the application connects to computer systems over the Internet, which may include via a wireless network, using the application operates as your consent to the transmission of standard device information (including but not limited to technical information about your device, system, and application software, and peripherals) for Internet-based or wireless services. If other terms are presented in connection with your use of services accessed using the application, those terms also apply.</p>
            <h2>2. Misuse of Internet-based services.</h2>
            <p> You may not use any Internet-based service in any way that could harm it or impair anyone else’s use of it or the wireless network. You may not use the service to try to gain unauthorized access to any service, data, account, or network by any means.</p>
            <h2>3. Scope of License.</h2>
            <p> The application is licensed, not sold. This agreement only gives you some rights to use the application. If Microsoft disables the ability to use the applications on your devices pursuant to your agreement with Cubic Logics , any associated license rights will terminate. The Cubic Logics reserves all other rights. Unless applicable law gives you more rights despite this limitation, you may use the application only as expressly permitted in this agreement. In doing so, you must comply with any technical limitations in the application that only allow you to use it in certain ways. You may not:</p>
            <ol><li>
            Work around any technical limitations in the application.
            </li>
            <li> Reverse engineer, decompile, or disassemble the application, except and only to the extent that applicable law expressly permits, despite this limitation.</li>
            <li> Make more copies of the application than specified in this agreement or allowed by applicable law, despite this limitation.</li>
            <li>Publish or otherwise make the application available for others to copy.</li>
            <li>Rent, lease, or lend the application.</li>
            <li>Transfer the application or this agreement to any third party.</li>
            </ol>
            <h2>4.Documentation.</h2>
            <p>If documentation is provided with the application, you may copy and use the documentation for personal reference purposes.</p>
            <h2>5.Technology and export restrictions.</h2>
            <p>The application may be subject to United States or international technology control or export laws and regulations. You must comply with all domestic and international export laws and regulations that apply to the technology used or supported by the application. These laws include restrictions on destinations, end users, and end use. For information on Cubic Logics branded products, go to the Cubic Logics exporting website www.Cubiclogics.com</p> 
            <h2>6. Support Services.</h2>
            <p> Contact the HR 365 to determine if any support services are available. Microsoft, your hardware manufacturer and your wireless carrier (unless one of them is the Cubic Logics) aren’t responsible for providing support services for the application.</p>
            <h2>7. Entire Agreement.</h2>
            <p> This agreement, any applicable privacy policy, any additional terms that accompany the application, and the terms for supplements and updates are the entire license agreement between you and Cubic Logics for the application.</p>
            <h2>8. Applicable law.</h2>
            <li> United States and Canada. If you acquired the application in the United States or Canada, the laws of the state or province where you live (or, if a business, where your principal place of business is located) govern the interpretation of these terms, claims for breach of them, and all other claims (including consumer protection, unfair competition, and tort claims), regardless of conflict of law principles.</li>
            <li>Outside the United States and Canada. If you acquired the application in any other country, the laws of that country apply.</li>
            <h2>9. Legal effect. </h2>
            <p>This agreement describes certain legal rights. You may have other rights under the laws of your state or country. This agreement doesn’t change your rights under the laws of your state or country if the laws of your state or country don’t permit it to do so.</p>
            <h2>10.Disclaimer of Warranty.</h2>
            <p>The application is licensed “as is,” “with all faults,” and “as available.” You bear the entire risk as to its quality, safety, comfort, and performance. Should it prove defective, you assume the entire cost of all necessary servicing or repair. The Cubic Logics, on behalf of itself, Microsoft, wireless carriers over whose network the application is provided, and each of our respective affiliates, vendors, agents, and suppliers (“Covered Parties”), gives no express warranties, guarantees, or conditions in relation to the application. You may have additional consumer rights under your local laws that this agreement can’t change. To the extent permitted under your local laws, Covered Parties exclude any implied warranties or conditions, including those of merchantability, fitness for a particular purpose, safety, comfort, and non-infringement. If your local laws impose a warranty, guarantee or condition even though these terms do not, its duration is limited to 14 days from when you download the application.</p>
            <h2>11. Limitation on and exclusion of remedies and damages .</h2>
            <p>To the extent not prohibited by law, if you have any basis for recovering damages, you can recover from the Cubic Logics only direct damages up to the amount you paid for the application as annual subscription or $1.00, whichever is greater. You will not, and waive any right to, seek to recover any other damages, including lost profits and consequential, special, direct, indirect, or incidental damages, from the Cubic Logics.</p>
            <p>This limitation applies to:</p>
            <li>Anything related to the application or services made available through the application; and</li>
            <li>Claims for breach of contract, warranty, guarantee or condition; strict liability, negligence, or other tort; violation of a statute or regulation; unjust enrichment; or under any other theory; all to the extent permitted by applicable law.</li>
            <p>It also applies even if:</p>
            <li>This remedy doesn’t fully compensate you for any losses; or</li>
            <li> The Cubic Logics knew or should have known about the possibility of the damages.</li>
        </div>
        <Footer/>
        </>

    )
}

export default EULA
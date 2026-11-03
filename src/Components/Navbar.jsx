import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Privacypolicy from "./Header and Footer/Privacypolicy";
import EULA from "./Header and Footer/EULA";
import Thankyou from "./Thankyou";
import { CelebrateOffer } from "./CelebrateOffer";
import ProductsAddon from "./ProductsAddon";
import LPCLM365 from "./LPCLM365";
function NavBar() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LPCLM365 />,
    },
    {
      path: "/black-day-offer",
      element: <CelebrateOffer page={"BlackFriday"} Type="Image" />,
      // loader: "",
      // key: "employee-directory-365",
    },
    {
      path: "/cubic-anniversary-offer",
      element: <CelebrateOffer page={"CubicAnniversary"} Type="Image" />,
      // loader: "",
      // key: "employee-directory-365",
    },
    // {
    //   path: "/sharepoint-contract-management-software",
    //   element: <LPCLM365 />,
    //   // loader: "",
    //   // key: "performance-management-365",
    // },
    {
      path: "/privacy-policy",
      element: <Privacypolicy />,
      // loader: "",
      // key: "helpdesk-365",
    },
    {
      path: "/end-user-license-agreement-eula",
      element: <EULA />,
      // loader: "",
      // key: "helpdesk-365",
    },
    {
      path: "/thank-you",
      element: <Thankyou />,
      // loader: "",
      // key: "helpdesk-365",
    },
    {
      path: "/product-addons",
      element: <ProductsAddon />,
      // loader: "",
      // key: "helpdesk-365",
    },

  ]);
  return (
    <>
      <div>
        {/* <Header/> */}
        <RouterProvider router={router} />
        {/* <Footer /> */}
      </div>
    </>
  );
}
export default NavBar;

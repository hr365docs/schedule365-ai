import * as React from "react";
import "./App.css";
import NavBar from "./Components/Navbar";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
// import { mouseflow} from "react-mouseflow";
const AppName = "Apps365";  //HR365 or Apps365
// const AppName = "HR365"; //HR365 or Apps365
function App() {
  // window.dataLayer.push({
  //   event: 'pageview'
  // });
  // React.useEffect(() => {
  //   mouseflow.initialize("d74e23c0-0490-4d54-925d-b4ea1ae7151a");
  //   }, []);

  React.useEffect(() => {
    let Bgvarcolor;
    if (AppName == "HR365") {
      Bgvarcolor = "#2323CE";
    } else {
      Bgvarcolor = "#c10161";
    }

    document.documentElement.style.setProperty("--btn-bg-color", Bgvarcolor);
  }, []);
  return (
    <div className="App">
      <div className="HR_MainPage" id="MainHRPage">
        <MyContext.Provider value={AppName}>
          <NavBar />
        </MyContext.Provider>
        <TawkMessengerReact
          propertyId="5c4f037d51410568a108fd36"
          widgetId="1g01fv347"
          // onLoad={onLoad}
        />
      </div>
    </div>
  );
}

export default App;
export const MyContext = React.createContext();

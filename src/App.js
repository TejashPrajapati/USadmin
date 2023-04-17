import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Login from "./scenes/login";
import { useSelector } from "react-redux";
import Products from "./scenes/products";
import Sliders from "./scenes/sliders";
import GetSpa from "./scenes/spas"
import AboutPage from "./scenes/aboutpage";
import Salon from "./scenes/saloon/salon";
import Mansalon from "./scenes/saloon/Mansaloon/mansalon";
import Addmansalon from "./scenes/servicesCreate/addmansalon";
import UpdateMansalon from "./scenes/UpdateServices/updatemansalon";
import Womansalon from "./scenes/saloon/Womensaloon/womansalon";
import Addwomansalon from "./scenes/servicesCreate/addwomansalon";
import UpdateWomanansalon from "./scenes/UpdateServices/updatewomansalon";
import Product from "./scenes/product";
import ServicesForm from "./scenes/servicesCreate";
import AddSliders from "./components/AddSliders";
import Addspa from "./scenes/servicesCreate/addspa";
import Addelectrician from "./scenes/servicesCreate/addelectrician";
import Electrician from "./scenes/electrician";
import UpdateElectrician from "./scenes/UpdateServices/updateelectrician";
import Addaboutpage from "./scenes/servicesCreate/addaboutpage";
import UpdateSpa from "./scenes/UpdateServices/updatespa";
import Appliance from "./scenes/Appliance";
import Carpenter from "./scenes/Carpenter";
import Disinfection from "./scenes/Disinfection";
import GetHomecleaning from "./scenes/Homeclener/Clener";
import Bathroom from "./scenes/Kitchan&Bathroom";
import Plumber from "./scenes/Plumber";
import Addappliance from "./scenes/servicesCreate/addappliance";
import Addcarpenter from "./scenes/servicesCreate/addcarpanter";
import Adddisinfiction from "./scenes/servicesCreate/adddisinfection";
import Addbathroom from "./scenes/servicesCreate/addkitchan";
import Addplumber from "./scenes/servicesCreate/addplumber";
import Updateappliance from "./scenes/UpdateServices/updateappliance";
import Updatebathroom from "./scenes/UpdateServices/updatebathroom";
import Updatecarpenter from "./scenes/UpdateServices/updatecarpenter";
import Updatedisinfection from "./scenes/UpdateServices/updatedisinfection";
import Updateplumber from "./scenes/UpdateServices/updateplumber";
import Booking from "./scenes/Booking";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const user = useSelector((state) => state.auth.auth);
  // const user = localStorage.getItem("user");

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {user  && user ? (
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/sliders/" element={<Sliders />} />
                <Route path="/aboutpage/" element={<AboutPage/>}/>
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/add-services" element={<ServicesForm />} />
                <Route path="/add-sliders" element={<AddSliders />} />
                <Route path="/add-aboutpage" element={<Addaboutpage />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/salon" element={<Salon />} />
                <Route path="/mansalon" element={<Mansalon />} />
                <Route path="/add-mansalon" element={<Addmansalon />} />
                <Route path="/update-mansalon/:id" element={<UpdateMansalon />} />
                <Route path="/womansalon" element={<Womansalon />} />
                <Route path="/add-womansalon" element={<Addwomansalon />} />
                <Route path="/update-womansalon/:id" element={<UpdateWomanansalon />} />
                <Route path="/spa/" element={<GetSpa />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/add-spa/" element={<Addspa />} />
                <Route path="/update-spa/:id" element={<UpdateSpa />} />
                <Route path="/electrician" element={<Electrician />} />
                <Route path="/add-electrician/" element={<Addelectrician />} />
                <Route path="/update-electrician/:id" element={<UpdateElectrician />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/appliance" element={<Appliance />} />
                <Route path="/carpenter" element={<Carpenter />} />
                <Route path="/disinfection" element={<Disinfection />} />
                <Route path="/homecleaning" element={<GetHomecleaning />} />
                <Route path="/bathroom" element={<Bathroom />} />
                <Route path="/plumber" element={<Plumber />} />
                <Route path="/add-addappliance" element={<Addappliance/>} />
                <Route path="/add-carpenter" element={<Addcarpenter/>} />
                <Route path="/add-disinfiction" element={<Adddisinfiction/>} />
                <Route path="/add-bathroom" element={<Addbathroom/>} />
                <Route path="/add-plumber" element={<Addplumber/>} />
                <Route path="/edit-appliance/:id" element={<Updateappliance/>} />
                <Route path="/update-bathroom/:id" element={<Updatebathroom/>} />
                <Route path="/update-carpenter/:id" element={<Updatecarpenter/>} />
                <Route path="/update-disinfection/:id" element={<Updatedisinfection/>} />
                <Route path="/update-plumber/:id" element={<Updateplumber/>} />
                <Route path="/bookings" element={<Booking/>} />
              </Routes>
            </main>
          </div>
        ) : (
          <Login />
        )}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

// router
import { Route, Routes } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// pages
import Home from "./pages/home/Home";
import Devices from "./pages/devices/Devices";
import SubscriberDetails from "./pages/SubscriberDetails";

// providers
import { SummaryCartProvider } from "./context/SummaryCartContext";
import { CompareProvider } from "./context/CompareContext";

function App() {
  return (
    <>
      <SummaryCartProvider>
        <CompareProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/subscriber-details" element={<SubscriberDetails />} />
          </Routes>
        </CompareProvider>
      </SummaryCartProvider>
      <Footer />
    </>
  );
}

export default App;

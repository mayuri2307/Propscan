import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/App.css";
import Home from "./pages/Home";
import Property from "./pages/Property";
import PropertyListingHome from "./pages/PropertyListingHome";
import Login from "./pages/Login";
import PropertyOwnerDashboard from "./pages/PropertyOwnerDashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<PropertyListingHome />} />
        <Route path="/property" element={<Property />} />
        <Route path="/login" element={<Login />} />
        <Route path="/properties-dashboard" element={<PropertyOwnerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

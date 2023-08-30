import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Property from "./pages/Property";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/property_website/" element={<Home />} />
        <Route path="/property_website/property/:id" element={<Property />} />
      </Routes>
    </>
  );
};

export default App;

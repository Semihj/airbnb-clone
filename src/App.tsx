import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import House from "./pages/House";
import Navbar from "./components/Navbar";
import MaxWidthWrapper from "./components/MaxWidthWrapper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/house/:id" element={<House />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

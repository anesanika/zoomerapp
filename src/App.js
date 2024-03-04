import Home from "./Pages/home/Home.jsx";
import Navbar from "./components/main/navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/main/footer/Footer.jsx";
import Productpage from "./Pages/product/Productpage.jsx";


function App() {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Productpage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

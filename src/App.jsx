import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import Footer from "./components/Footer/Footer";
import Features from "./components/Features/Features";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/Features" element={<Features />} />
      </Routes>
      {/* <Footer/> */}
      <Footer />
    </div>
  );
}

export default App;

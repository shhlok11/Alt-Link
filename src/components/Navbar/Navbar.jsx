import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow_icon.png";
import { useContext } from "react";
import { CoinContext } from "../../context/CoinContext.jsx";
import { Link } from "react-router-dom";
import Features from "../Features/Features.jsx";

function Navbar() {
  // Accessing the context value
  const { setCurrency } = useContext(CoinContext);

  // Function to handle currency change
  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd":
        setCurrency({
          name: "usd",
          symbol: "$",
        });
        break;
      case "euro":
        setCurrency({
          name: "eur",
          symbol: "€",
        });
        break;
      case "cad":
        setCurrency({
          name: "cad",
          symbol: "CAD$",
        });
        break;
      default:
        setCurrency({
          name: "usd",
          symbol: "$",
        });
    }
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <Link to={"/"}>
        <img src={logo} className="logo" alt="Logo" />
      </Link>
      {/* Navbar List */}
      <ul>
        <Link to={"/"}>
          <li>Home</li>{" "}
        </Link>

        <Link to = {"/Features"}>
        <li>Features</li>
        </Link>
      </ul>

      {/* Navbar Right */}
      <div className="nav-right">
        {/* Currency Selector */}
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="euro">EURO</option>
          <option value="cad">CAD</option>
        </select>
        <button>
          Know more <img src={arrow} alt="Know more" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

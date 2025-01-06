import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow_icon.png";

function Navbar() {
    return (
        <div className="navbar">

            <img src={logo} className = "logo" alt="Logo" />

            {/* Navbar List */}
            <ul>
                <li>Home</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>

            {/* Navbar Right */}
            <div className="nav-right">

                {/* Currency Selector */}
                <select>
                    <option value="cad">CAD</option>
                    <option value="euro">EURO</option>
                    <option value="usd">USD</option>
                </select>
                <button>Sign up <img src={arrow} alt="Sign up arrow" /></button>
            </div>
        </div>
    );
}

export default Navbar;
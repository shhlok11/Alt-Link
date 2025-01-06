import React, { useState, useContext, useEffect } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

// Home component
const Home = () => {
    // Accessing the context value
    const { allCoin, currency } = useContext(CoinContext);

    // State to store the filtered coins
    const [displayCoin, setDisplayCoin] = useState([]);

    // State to store the search input
    const [input, setInput] = useState("");

    const inputHandler = (event) => {
        setInput(event.target.value);
        if (event.target.value === "") {
            setDisplayCoin(allCoin);
        }
    };

    // Function to handle search input change
    const searchHandler = async (event) => {
        event.preventDefault();
        const coins = await allCoin.filter((item) => {
            return item.name.toLowerCase().includes(input.toLowerCase());
        });
        setDisplayCoin(coins);
    };

    // Effect to set the displayCoin state when allCoin changes
    useEffect(() => {
        setDisplayCoin(allCoin);
    }, [allCoin]);

    // Function to handle search input change
    return (
        <div className="home">
            {/* Hero */}
            <div className="hero">
                <h1>
                    <b>Crypto Marketplace</b>
                </h1>
                <p>
                    Welcome to cryptocurrency marketplace. Keep a tack of all the cryptocoins.
                </p>

                <form onSubmit={searchHandler}>
                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search crypto.."
                        onChange={inputHandler}
                        value={input}
                        list="coin-list"
                        required
                    />
                    <datalist id="coin-list">
                        {allCoin.map((item, index) => (
                            <option key={index} value={item.name} />
                        ))}
                    </datalist>
                    <button type="submit">Search</button>
                </form>
            </div>

            {/* Crypto Tabe */}
            <div className="crypto-table">
                {/* Table Header */}
                <div className="table-layout">
                    <p>#</p>
                    <p>Coins</p>
                    <p>Price</p>

                    <p style={{ textAlign: "center" }}>24H Change</p>
                    <p style={{ textAlign: "right" }} className="market-cap">
                        Market Cap
                    </p>
                </div>
                {/* Table Body */}
                {displayCoin.slice(0, 10).map((item, index) => (
                    <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
                        {/* Table Row */}
                        <p>{item.market_cap_rank}</p>
                        {/* Coin Name and Symbol */}
                        <div>
                            <img src={item.image} alt="Coin Image" />
                            <p>{item.name + " - " + item.symbol}</p>
                        </div>
                        {/* Price and 24H Change */}
                        <p>{currency.symbol + item.current_price.toLocaleString()}</p>
                        {/* Coin 24H Change */}
                        <p className={item.price_change_24h < 0 ? "red" : "green"}>
                            {Math.floor(item.price_change_24h * 100) / 100}
                        </p>
                        {/* Market Cap */}
                        <p className="market-cap">
                            {currency.symbol + item.market_cap.toLocaleString()}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;

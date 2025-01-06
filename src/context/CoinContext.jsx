import { useEffect } from "react";
import { createContext, useState } from "react";
import React from "react";


export const CoinContext = createContext();

const CoinContextProvider = (props) => {

    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: 'usd',
        symbol: '$'
    });

    // Fetch coin data from API
    const fetchAllCoin = async () => {
        const options = {
            method: 'GET',
            headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-s97y2s8Wps1edKWDMHEv4SQV' }
        };

        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setAllCoin(response))
            .catch(err => console.error(err));

    }

    // Call fetchAllCoin when currency changes
    useEffect(() => {
        fetchAllCoin();
    }, [currency])



    const contextValue = {
        allCoin,currency,setCurrency
    }

    // Return the context provider with the state and functions
    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    );
}

export default CoinContextProvider;
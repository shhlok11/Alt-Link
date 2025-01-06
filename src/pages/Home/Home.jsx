import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>

            {/* Hero */}
            <div className="hero">
                <h1><b>Crypto Marketplace</b></h1>
                <p>Welcome to cryptocurrency marketplace. Sign up to explore more about cryptos.</p>

                <form>
                    <input type="text" placeholder="Search crypto.." />
                    <button type='submit'>Search</button>
                </form>

            </div>

            {/* Crypto Tabe */}
            <div className="crypto-table">
                <div className="table-layout">
                    <p>#</p>
                    <p>Coins</p>
                    <p>Price</p>


                    <p style={
                        { textAlign: 'center' }
                    }>
                        24H Change</p>
                    <p style={
                        { textAlign: 'right' }
                    }
                    
                        className = 'market-cap'
                    >Market Cap</p>
                </div>
            </div>
        </div>
    )
}

export default Home
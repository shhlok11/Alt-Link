import React from 'react'
import { Link } from 'react-router-dom'
import "./Features.css"

function Features() {
  return (
    <div>
        
        <section class="features" id="features">
  <h2>Features</h2>
  <div class="feature-list">
    <div class="feature-item">
      <h3>Real-Time Crypto Tracking</h3>
      <p>Stay updated with live price tracking of your favorite cryptocurrencies.</p>
    </div>
    <div class="feature-item">
      <h3>Portfolio Management</h3>
      <p>Easily manage your crypto portfolio with intuitive tools and analytics.</p>
    </div>
    <div class="feature-item">
      <h3>Market Insights</h3>
      <p>Get expert insights and predictions to make informed investment decisions.</p>
    </div>
  </div>

  <h2>Upcoming Feature</h2>
  <div class="upcoming-feature">
    <h3>AI Chatbot</h3>
    <p>Coming soon: An intelligent AI chatbot to help you understand and navigate the world of crypto with ease.</p>
  </div>
</section>
    </div>
    
  )
}

export default Features
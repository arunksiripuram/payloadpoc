import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css' // Import your custom CSS file

function App() {
  const [cardDetails, setCardDetails] = useState([])

  // Fetch card details from the API
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/cards') // Adjust API endpoint as needed
      .then((response) => setCardDetails(response.data.docs)) // Assuming the data is in the 'docs' array
      .catch((error) => console.error('Error loading card details:', error))
  }, [])

  return (
    <div className="app-container">
      {cardDetails.length > 0 ? (
        cardDetails.map((card) => (
          <div key={card.id} className="card-container">
            <h2>Add New Card</h2>

            <div className="form-field">
              <label htmlFor="cardHolder">Card Holder:</label>
              <input type="text" id="cardHolder" value={card.cardHolder} readOnly />
            </div>

            <div className="form-field">
              <label htmlFor="cardType">Card Type:</label>
              <input type="text" id="cardType" value={card.cardType} readOnly />
            </div>

            <div className="form-field">
              <label htmlFor="cardNumber">Card Number:</label>
              <input type="text" id="cardNumber" value={card.cardNumber} readOnly />
            </div>

            <div className="form-field">
              <label htmlFor="expirationMonth">Expiration Month:</label>
              <input type="text" id="expirationMonth" value={card.expirationMonth} readOnly />
            </div>

            <div className="form-field">
              <label htmlFor="expirationYear">Expiration Year:</label>
              <input type="text" id="expirationYear" value={card.expirationYear} readOnly />
            </div>

            <div className="form-field">
              <label htmlFor="cvv">CVV:</label>
              <input type="text" id="cvv" value={card.cvv} readOnly />
            </div>

            <div className="form-field">
              <label htmlFor="addressLine1">Address Line 1:</label>
              <input type="text" id="addressLine1" value={card.addressLine1} readOnly />
            </div>

            <div className="form-field">
              <label htmlFor="city">City:</label>
              <input type="text" id="city" value={card.city} readOnly />
            </div>

            <div className="form-field">
              <label htmlFor="state">State:</label>
              <input type="text" id="state" value={card.state} readOnly />
            </div>

            <div className="form-field">
              <label htmlFor="zip">Zip:</label>
              <input type="text" id="zip" value={card.zip} readOnly />
            </div>

            <div className="form-field">
              <label htmlFor="country">Country:</label>
              <input type="text" id="country" value={card.country} readOnly />
            </div>

            <div className="form-field">
              <label htmlFor="useAsPrimary">Use as Primary Card:</label>
              <input type="checkbox" id="useAsPrimary" checked={card.useAsPrimary} disabled />
            </div>

            <div className="buttons">
              <button className="cancel-btn">Cancel</button>
              <button className="submit-btn">+ Add New Card</button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading card details...</p>
      )}
    </div>
  )
}

export default App

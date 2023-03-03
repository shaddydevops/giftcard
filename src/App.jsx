import React from "react";
import { useState } from "react";

export default function App() {
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

  function spendGiftCard() {
    setGiftCard(prevState => {  // Step 2 

      return {...prevState,     // Step 3 

      text: "Your coupon has been used.",   // Step 4 

      valid: false,   // Step 5 

      instructions: "Please visit our restaurant to renew your gift card."   // Step 5 

    };

    }
    );   // Step 2 

  }

  return (
    <div style={{padding: '40px', marginLeft:"600px"}}>
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      {/* // Updated value will display here after clicking the button.  */}
      <h3>{giftCard.text}</h3>   
      {/* //  Updated value will display here after clicking the button.  */}
      <p>{giftCard.instructions}</p>    

      {giftCard.valid && (     // Button will no longer show after clicking it.  

          <button onClick={spendGiftCard}>Spend Gift Card</button>     // Clicking this button will update the state object's values.  

        )}    
          {/* // Button will no longer show after clicking it.   */}
    </div>     // Closing div tag for App component.  

  );     // Closing return statement for App component.  
}
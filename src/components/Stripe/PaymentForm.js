import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import "./Paymentsuccess.css"
// import { Route, useNavigate } from "react-router-dom";
import axios from "axios"
import React, { useState } from 'react'
const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm(props) {
    
    const [success, setSuccess ] = useState(false)
    const [success2, setSuccess2 ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    // const btnClick=(e)=>{
    // e.preventDefault();
    // setSuccess2(success2=>!success2);
    // }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        console.log(props.prize);
    if(!error) {
        try {
            const {id} = paymentMethod
            // const amount=props.prize
            const response =await axios.post("http://localhost:4000/payment", {
           
                amount:props.prize*100,
                id:id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

// let navigate = useNavigate();
    return (
        <>
        {!success ?
          <form  onSubmit={handleSubmit}   >
          <fieldset  className="FormGroup">
              <div className="FormRow">
                <CardElement options={CARD_OPTIONS}/>
              </div>
          </fieldset>
          <button className="btn btn-block btn-pay" onClick={handleSubmit}>Checkout</button>
           </form> 
          :
          <div id='payment'>
          <body>
  
        <div className="card">
    <div
      style={{
        borderRadius: 200,
        height: 200,
        width: 200,
        background: "#F8FAF5",
        margin: "0 auto"
      }}
    >
      <i className="checkmark">✓</i>
    </div>
    <h1>Success</h1>
    <p>
      We received your purchase request;
      <br /> we'll be in touch shortly!
    </p>
  </div>
  
      
      </body>
      </div>
        }
            
        </>
    )
}
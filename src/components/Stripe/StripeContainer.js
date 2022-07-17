import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm";
// import PaymentForm from "./PaymentForm";


const PUBLIC_KEY = "pk_test_51LMC1UBzIrI8f3hBFOXEodV9ae4MrbaTUvgB00VUYMkHCGvfMPtviNSnphBhyIsZDunxsUWbiWMLiZn1KTpBA0q2000Dl9eN79";

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer(props) {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm prize={props.prizef}/>
		</Elements>
	)
}
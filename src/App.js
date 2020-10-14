import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./pages/CheckoutForm";
import "./App.css";
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe("pk_test_51Hc5P8GojcQr9e1dw4JVjdmx0V6I32DlfBUZ2UzaAkoEeNATAS8Ppt6LtI27YMAdIw63KUka8iKD3qMmzEiEdMOv00c4ySpQWu");

export default function App() {
  return (
    <div className="App">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
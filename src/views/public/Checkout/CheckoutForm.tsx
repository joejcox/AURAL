import { CardElement } from "@stripe/react-stripe-js"
import { FormEventHandler, FunctionComponent } from "react"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { ServerResponse } from "./"

interface CheckoutFormProps {
  success: boolean
  handleSubmit: FormEventHandler
  response: ServerResponse
}

const CheckoutForm: FunctionComponent<CheckoutFormProps> = ({
  success,
  handleSubmit,
  response,
}) => {
  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "14px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        fontFamily: "Arial, sans-serif",
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  }

  if (success) {
    return (
      <>
        <h2 className="text-2xl text-gray-800">Thank you for your order</h2>
        <p>We will notify you when your items are dispatched.</p>
      </>
    )
  }

  return (
    <>
      <span className="text-gray-800 block text-xl">
        Use test card 4000 0082 6000 0000
      </span>
      <span className="text-gray-500 block mb-6">
        You can use any future date and numbers for cvc and postcode
      </span>
      <form className="w-[300px]" onSubmit={handleSubmit}>
        <fieldset>
          <CardElement
            className="bg-white p-4 border border-gray-300 focus:border-main-400"
            options={cardStyle}
          />
        </fieldset>
        <button className="font-bold uppercase py-2 px-4 bg-black text-white mt-2 w-[300px]">
          Pay Now
        </button>
      </form>
    </>
  )
}

export default CheckoutForm

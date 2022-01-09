import Container from "core/Container"
import Section from "core/Section"
import { FormEvent, FunctionComponent, useState } from "react"
import { Helmet } from "react-helmet-async"
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import axios from "axios"
import CheckoutForm from "./CheckoutForm"
import { Plane } from "react-loader-spinner"

export interface ServerResponse {
  message: string
  orderId: string
  success: boolean
}

const Checkout: FunctionComponent = () => {
  const [success, setSuccess] = useState(false)
  const [response, setResponse] = useState<ServerResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    })

    setLoading(true)

    if (!error) {
      try {
        const response = await axios.post("https://api.joecoxdev.com/payment", {
          amount: 1000,
          paymentMethod: paymentMethod.id,
        })

        if (response.data.success) {
          setResponse(response.data)
          setSuccess(true)
          setLoading(false)
        }
      } catch (error) {
        console.log("Error", error)
        setLoading(false)
      }
    } else {
      console.log(error.message)
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center py-16 justify-center">
        <Plane
          arialLabel="loading-indicator"
          color="black"
          secondaryColor="orange"
        />

        <h2 className="text-3xl text-gray-800">Spinning the records</h2>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>Checkout | Aural Records</title>
      </Helmet>
      <Section>
        <Container>
          <h1 className="payments-title">Checkout</h1>
        </Container>
      </Section>
      <section className="py-8 bg-gray-50 border-y border-y-gray-200">
        <Container>
          <CheckoutForm
            handleSubmit={handleSubmit}
            response={response}
            success={success}
          />
        </Container>
      </section>
    </>
  )
}

export default Checkout

import FormContainer from "core/Container/FormContainer"
import ValidationError from "core/Form/ValidationError"
import { useState } from "react"
import { useForm, useFormState } from "react-hook-form"
import { Link } from "react-router-dom"

const SignInForm = ({ children }) => {
  const [firebaseError, setFirebaseError] = useState(null)
  const {
    register,
    handleSubmit,
    resetField,
    control,
    formState: { errors },
  } = useForm()

  const signIn = async (email, password) => {
    console.log(email, password)
    return { email: email, password: password }
  }

  const { isSubmitting } = useFormState({ control })

  const onSubmit = async (data) => {
    await signIn(data.email, data.password)
      .then((response) => console.log(response))
      .catch((error) => {
        let message = null

        if (error.code === "auth/too-many-requests") {
          message =
            "Too many unsuccessful attempts, please reset password or try again later"
        }

        if (error.code === "auth/wrong-password") {
          message = "Incorrect password, please try again"
        }

        if (error.code === "auth/user-not-found") {
          message = "User does not exist, please try again"
        }

        resetField("password")
        setFirebaseError(message)
      })
  }

  return (
    <FormContainer>
      {children}
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        {firebaseError && (
          <p className="my-4 text-red-500 text-sm">{firebaseError}</p>
        )}

        <div className="form-field">
          <input
            type="email"
            className="block placeholder-gray-400 border border-gray-200 bg-gray-50 text-gray-800 mb-2 w-full p-4 focus:border focus:outline-2 focus:outline-gray-200 outline-white"
            placeholder="Email"
            {...register("email", {
              required: {
                value: true,
                message: "Field can not be empty",
              },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalid email",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <ValidationError>{errors.email?.message}</ValidationError>
          )}
        </div>
        <div className="field">
          <input
            type="password"
            className="block placeholder-gray-400 border border-gray-200 bg-gray-50 text-gray-800 mb-2 w-full p-4 focus:border focus:outline-2 focus:outline-gray-200 outline-white"
            placeholder="Password"
            {...register("password", {
              required: "Field can not be empty",
              minLength: {
                value: 6,
                message: "Must be longer than 6 characters",
              },
            })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && (
            <ValidationError>{errors.password?.message}</ValidationError>
          )}
        </div>
        <button
          className="bg-black hover:bg-main-400 w-full py-2 px-4 mt-6 text-white inline-block outline-white border-0"
          type="submit"
          disabled={isSubmitting}
          click={handleSubmit(onSubmit)}
        >
          {isSubmitting ? "Signing In..." : "Sign In"}
        </button>

        <div className="w-full flex justify-end">
          <Link
            to="/account/reset-password"
            className="text-gray-400 underline mt-6 inline-block hover:text-black"
          >
            Forgotten password?
          </Link>
        </div>
      </form>
    </FormContainer>
  )
}

export default SignInForm

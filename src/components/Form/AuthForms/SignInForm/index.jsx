import FormContainer from "components/Form/AuthForms/AuthFormContainer"
import ValidationError from "components/Form/ValidationError"
import { useForm, useFormState } from "react-hook-form"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setError } from "features/user/userSlice"
import useAuth from "features/user/useAuth"
import { useNavigate } from "react-router-dom"
import Field from "components/Form/Field"
import FormButton from "components/Form/FormButton"
import Label from "components/Form/Label"

const SignInForm = ({ children }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { authError, signin } = useAuth()
  const {
    register,
    handleSubmit,
    control,
    resetField,
    formState: { errors },
  } = useForm()

  // react hook form requires control and useFormState hook to get submitting state
  const { isSubmitting } = useFormState({ control })

  // isSubmitting can only be used when the submit function is asynchronous
  const onSubmit = async (data) => {
    // the response should either return true or an error with a firebase error code
    const response = await signin(data)

    // error codes are handled in the userSlice within features/user
    if (response.error) {
      dispatch(setError(response.error.code))
      resetField("password")
      return false
    }

    resetField("email")
    resetField("password")
    navigate("/", { replace: true })
  }

  return (
    <FormContainer>
      {children}
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        {authError && <p className="my-4 text-red-500 text-sm">{authError}</p>}
        <Field>
          <Label htmlFor="email">Email:</Label>
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
        </Field>
        <Field>
          <Label htmlFor="password">Password:</Label>
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
        </Field>
        <FormButton disabled={isSubmitting} onClick={handleSubmit(onSubmit)}>
          {isSubmitting ? "Signing In..." : "Sign In"}
        </FormButton>

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

import FormContainer from "components/Form/FormContainer"
import ValidationError from "components/Form/ValidationError"
import { useForm, useFormState } from "react-hook-form"
import { useDispatch } from "react-redux"
import { setError } from "features/user/userSlice"
import useAuth from "hooks/useAuth"
import { useNavigate } from "react-router-dom"
import FormButton from "../FormButton"
import FlexFieldContainer from "../FlexField/FlexFieldContainer"
import FlexField from "../FlexField"

const SignUpForm = ({ children }) => {
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

  const { isSubmitting } = useFormState({ control })

  const onSubmit = async (data) => {
    const response = await signin(data)

    if (response.error) {
      dispatch(setError(response.error.code))
      resetField("password")
      return false
    }

    resetField("email")
    resetField("password")
    navigate("/", { replace: true })
  }

  const labelClasses = "text-sm text-gray-600 block mb-2 pl-2"
  const inputClasses =
    "block placeholder-gray-400 border border-gray-200 bg-gray-50 text-gray-800 w-full p-4 focus:border focus:outline-2 focus:outline-gray-200 outline-white"

  return (
    <FormContainer maxW="2xl">
      {children}
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        {authError && <p className="my-4 text-red-500 text-sm">{authError}</p>}
        <FlexFieldContainer>
          <FlexField marginPosition="lg:mr-2">
            <label className={labelClasses} htmlFor="firstName">
              Full Name
            </label>
            <input
              type="text"
              className={inputClasses}
              placeholder="Name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Field can not be empty",
                },
                pattern: {
                  value: /[a-zA-Z -]/,
                  message: "No special characters or numbers allowed",
                },
              })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <ValidationError>{errors.name?.message}</ValidationError>
            )}
          </FlexField>
          <FlexField marginPosition="lg:ml-2">
            <label className={labelClasses} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className={inputClasses}
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
          </FlexField>
        </FlexFieldContainer>
        <FlexFieldContainer>
          <FlexField marginPosition="lg:mr-2">
            <label className={labelClasses} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className={inputClasses}
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
          </FlexField>
          <FlexField marginPosition="lg:ml-2">
            <label className={labelClasses} htmlFor="passwordRepeat">
              Repeat Password
            </label>
            <input
              type="passwordRepeat"
              className={inputClasses}
              placeholder="Repeat Password"
              {...register("passwordRepeat", {
                required: "Field can not be empty",
                minLength: {
                  value: 6,
                  message: "Must be longer than 6 characters",
                },
              })}
              aria-invalid={errors.passwordRepeat ? "true" : "false"}
            />
            {errors.password && (
              <ValidationError>{errors.password?.message}</ValidationError>
            )}
          </FlexField>
        </FlexFieldContainer>
        <FormButton disabled={isSubmitting} onClick={handleSubmit(onSubmit)}>
          {isSubmitting ? "Signing In..." : "Sign In"}
        </FormButton>
      </form>
    </FormContainer>
  )
}

export default SignUpForm

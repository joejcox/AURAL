import FormContainer from "core/Form/FormContainer"
import ValidationError from "core/Form/ValidationError"
import { useForm, useFormState } from "react-hook-form"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setError } from "features/user/userSlice"
import useAuth from "hooks/useAuth"
import { useNavigate } from "react-router-dom"

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

  return (
    <FormContainer>
      {children}
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        {authError && <p className="my-4 text-red-500 text-sm">{authError}</p>}

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
          onClick={handleSubmit(onSubmit)}
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
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { sendLoginData, loginUser } from "../features/goals/goalsSlice"

const LoginForm = () => {
  const dispatch = useDispatch()
  const { loginData, loginResp } = useSelector((store) => store.goals)

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
    formState: { errors }
  } = useForm()

  // handle form submit
  const onSubmit = (data) => {
    dispatch(loginUser(data))
    dispatch(sendLoginData(data))
  }
  console.log(errors)

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset()
    }
  }, [formState, reset])

  return (
    <>
      <section className="flex-col justify-center items-center">
        <h1 className="text-lg font-bold mx-24">Login Here</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="">
          <input
            className="input input-bordered w-full max-w-xs m-2"
            type="text"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />

          <input
            className="input input-bordered w-full max-w-xs m-2"
            type="password"
            placeholder="Password"
            {...register("password", { min: 5 })}
          />
          <input className="btn w-full max-w-xs m-2" type="submit" />
        </form>
      </section>
    </>
  )
}

export default LoginForm

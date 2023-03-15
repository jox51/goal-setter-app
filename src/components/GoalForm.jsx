import React, { useEffect } from "react"
import { useForm, Controller } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { registerUser, sendData, goalData } from "../features/goals/goalsSlice"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const GoalForm = () => {
  const dispatch = useDispatch()
  const { userData } = useSelector((store) => store.goals)

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState,
    formState: { isSubmitSuccessful },
    formState: { errors }
  } = useForm()

  // handle form submit
  const onSubmit = (data) => {
    dispatch(goalData(data))
    console.log(data)
    // dispatch(sendData())
  }
  console.log(errors)
  console.log("redux state :", userData)

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset()
    }
  }, [formState, reset])

  return (
    <section className="flex-col justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <label className="mx-12">What you need to accomplish</label>
        <textarea
          className="textarea textarea-bordered w-full m-2 "
          type="text"
          placeholder="Target Goal"
          {...register("goal", { required: true, maxLength: 80 })}
        />
        <section>
          <label className="mx-12">Date To Accomplish Goal By</label>
          <Controller
            control={control}
            name="date-input"
            render={({ field }) => (
              <DatePicker
                placeholderText="Select date"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
                className="input input-bordered w-full max-w-xs m-2"
              />
            )}
          />
        </section>

        <input className="btn w-full max-w-xs m-2" type="submit" />
      </form>
    </section>
  )
}

export default GoalForm

import React, { useEffect } from "react"
import { useForm, Controller } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import {
  goalData,
  sendGoalData,
  updateGoals
} from "../features/goals/goalsSlice"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import moment from "moment"

const GoalForm = ({ targetDate, targetGoal }) => {
  const dispatch = useDispatch()
  const { userData, showEdit } = useSelector((store) => store.goals)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState,
    formState: { isSubmitSuccessful },
    formState: { errors }
  } = useForm()

  // handle form submit
  const onSubmit = (data) => {
    if (showEdit) {
      dispatch(updateGoals(data))
      return console.log(data)
    }
    dispatch(goalData(data))
    dispatch(sendGoalData(data))
  }
  console.log(errors)

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
          {...register("targetGoal", { required: true, maxLength: 80 })}
          defaultValue={targetGoal}
        />
        <section>
          <label className="mx-12">Date To Accomplish Goal By</label>
          <Controller
            control={control}
            name="targetDate"
            render={({ field }) => (
              <DatePicker
                placeholderText="Select date"
                // value={moment(targetDate).format("YYYY-MM-DD")}
                onChange={(date) => field.onChange(date)}
                selected={field.value}
                className="input input-bordered w-full max-w-xs m-2"
              />
            )}
          />
        </section>

        <button className="btn w-full max-w-xs m-2" type="submit">
          {showEdit ? "Submit Updates" : "Submit"}
        </button>
      </form>
    </section>
  )
}

export default GoalForm

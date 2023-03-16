import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  showEditForm,
  currEditGoal,
  deleteGoal
} from "../features/goals/goalsSlice"
import moment from "moment"

const Card = ({ goalId, targetGoal, targetDate }) => {
  const { showEdit } = useSelector((store) => store.goals)
  const dispatch = useDispatch()
  const editHandler = () => {
    dispatch(showEditForm(!showEdit))
    dispatch(currEditGoal({ goalId, targetGoal, targetDate }))
  }

  const deleteHandler = () => {
    dispatch(deleteGoal(goalId))
  }

  return (
    <div className="w-lg">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="card-actions justify-end">
            <button className="btn btn-square btn-sm" onClick={deleteHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <h2 className="card-title">{targetGoal}</h2>
          <p>{moment(targetDate).format("MMMM Do YYYY")}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={editHandler}>
              Click to Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

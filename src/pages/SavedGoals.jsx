import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Divider from "../components/Divider"
import Card from "../components/Card"
import { getGoals } from "../features/goals/goalsSlice"
import GoalForm from "../components/GoalForm"

const SavedGoals = () => {
  const dispatch = useDispatch()
  const { goalCards, showEdit, currEditGoal } = useSelector(
    (store) => store.goals
  )
  const localHandler = () => {
    dispatch(getGoals())
    console.log(goalCards)
  }
  return (
    <>
      <Divider title={"Saved Goals"} />
      <div className="flex justify-center p-3 h-screen ">
        <button className="btn shadow-xl" onClick={localHandler}>
          Load Goals
        </button>
      </div>
      {showEdit && (
        <article className={"flex justify-center items-center"}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mx-auto">
                {showEdit ? "Update Goals" : "Set Your Goals"}
              </h2>
              <GoalForm
                targetGoal={currEditGoal.targetGoal}
                targetDate={currEditGoal.targetDate}
              />
            </div>
          </div>
        </article>
      )}

      <section className="flex flex-wrap justify-center items-center gap-3 p-4 max-w-full">
        {goalCards.goals?.map((item, index) => {
          const { targetGoal, targetDate, _id: goalId } = item
          return (
            <Card
              key={index}
              goalId={goalId}
              targetGoal={targetGoal}
              targetDate={targetDate}
            />
          )
        })}
      </section>
    </>
  )
}

export default SavedGoals

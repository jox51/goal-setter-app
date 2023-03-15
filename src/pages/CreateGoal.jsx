import React from "react"
import GoalForm from "../components/GoalForm"

const CreateGoal = () => {
  return (
    <section className="flex-col justify-center items-center">
      <div className="divider">Create Your Goals</div>
      <h1 className="text-center m-4 text-xl font-bold">
        Welcome John, What Goals Will You Set Today
      </h1>
      <article className="flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title mx-auto">Set Your Goals</h2>
            <GoalForm />
          </div>
        </div>
      </article>
    </section>
  )
}

export default CreateGoal

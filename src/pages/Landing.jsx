import React from "react"
import CreateGoal from "./CreateGoal"
import Divider from "../components/Divider"
import LandingCard from "../components/LandingCard"
import motoImg1 from "../assets/images/moto_img1.jpg"
import motoImg2 from "../assets/images/moto_img2.jpg"
import motoImg3 from "../assets/images/moto_img3.jpg"

const Landing = () => {
  return (
    <>
      <Divider />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Track your goals here easily</h1>
            <p className="py-6">
              Register first to begin login your goals and track them
            </p>
            <a className="btn btn-primary" href="#register">
              Get Started, Register Today
            </a>
          </div>
        </div>
      </div>
      <Divider />
      <section className="sm:flex max-w-full justify-center items-center gap-2 space-y-3 space-x-3">
        <LandingCard img={motoImg1} title={"You got this"} desc={"Easy Day"} />
        <LandingCard img={motoImg2} title={"You got this"} desc={"Easy Day"} />
        <LandingCard img={motoImg3} title={"You got this"} desc={"Easy Day"} />
      </section>
    </>
  )
}

export default Landing

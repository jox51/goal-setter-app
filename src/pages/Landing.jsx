import React, { useEffect, useState } from "react"
import CreateGoal from "./CreateGoal"
import Divider from "../components/Divider"
import LandingCard from "../components/LandingCard"
import motoImg1 from "../assets/images/moto_img1.jpg"
import motoImg2 from "../assets/images/moto_img2.jpg"
import motoImg3 from "../assets/images/moto_img3.jpg"
import motoImg4 from "../assets/images/moto_img4.jpg"
import { getapi } from "../utils/quotes"

const Landing = () => {
  let defaultQuote = {
    author: "Audrey Hepburn",
    text: `Nothing is impossible, the word itself says, I'm Possible`
  }
  let [quote, setQuote] = useState({
    author: "Audrey Hepburn",
    text: `Nothing is impossible, the word itself says, I'm Possible`
  })

  useEffect(() => {
    const getQuote = async () => {
      const data = await getapi()
      setQuote({ author: data.author, text: data.text })
    }
    getQuote()
  }, [])

  console.log(quote)

  return (
    <>
      <Divider />
      <section className="flex justify-center px-8 ">
        <div className="hero min-h-screen rounded  bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src={motoImg4} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Track You Goals</h1>
              <p className="py-6">
                Track your goals here. Simply register and login. Begin
                achieving your goals and let us take care of tracking them for
                you.
              </p>
              <a href="#register" className="btn btn-primary">
                Register Today
              </a>
            </div>
            <article className=" absolute bottom-10">
              <blockquote className="relative p-4 text-xl italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote rounded">
                <p className="mb-4">{quote.text}</p>
                <cite className="flex items-center">
                  <div className="flex flex-col items-start">
                    <span className="mb-1 text-sm italic font-bold">
                      {quote.author}
                    </span>
                  </div>
                </cite>
              </blockquote>
            </article>
          </div>
        </div>
      </section>
      <Divider />
      <section className="w-lg md:flex max-w-full justify-center items-center flex-wrap gap-2 flex-1  ">
        <LandingCard
          img={motoImg1}
          title={"Solutions and results"}
          desc={"Easy Day"}
        />
        <LandingCard
          img={motoImg2}
          title={"Success, all day"}
          desc={"Easy Day"}
        />
        <LandingCard img={motoImg3} title={"You got this"} desc={"Easy Day"} />
      </section>
    </>
  )
}

export default Landing

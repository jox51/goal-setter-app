import React from "react"

const LandingCard = ({ img, title, desc }) => {
  return (
    <section className="flex justify-center items-center flex-1 ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="h-[250px]">
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </section>
  )
}

export default LandingCard

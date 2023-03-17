import React from "react"
import Divider from "./Divider"

const Footer = () => {
  const d = new Date()
  return (
    <>
      <Divider />
      <footer className="footer footer-center p-4 bg-base-300 text-base-content bottom-0 ">
        <div className="">
          <p>Copyright © {d.getFullYear()}- All right reserved by jox51</p>
        </div>
      </footer>
    </>
  )
}

export default Footer

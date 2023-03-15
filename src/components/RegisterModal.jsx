import React from "react"
import RegisterForm from "./RegisterForm"

const RegisterModal = () => {
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="register-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="register-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <RegisterForm />
        </div>
      </div>
    </>
  )
}

export default RegisterModal

import React from "react"
import RegisterForm from "./RegisterForm"
import { useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const RegisterModal = () => {
  const { hideRegister, registerResp } = useSelector((store) => store.goals)
  const { msg } = registerResp
  if (msg === "User created successfully") {
    toast.success("Registration Success")
    toast.clearWaitingQueue()
  }
  return (
    <>
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="register-modal"
        className={hideRegister ? `hidden` : `modal-toggle`}
      />
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
      <ToastContainer
        limit={1}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default RegisterModal

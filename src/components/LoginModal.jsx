import React from "react"
import LoginForm from "./LoginForm"
import { useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const LoginModal = () => {
  const { hideLogin, loginResp } = useSelector((store) => store.goals)

  if (loginResp.msg == "login success") {
    toast.success("Login Success")
    toast.clearWaitingQueue()
  }
  if (loginResp.data?.msg == "password is incorrect") {
    toast.error("Password is incorrect")
    toast.clearWaitingQueue()
  }
  if (loginResp.data?.msg == "Username is incorrect") {
    toast.error("Username is incorrect")
    toast.clearWaitingQueue()
  }
  return (
    <>
      {/* Put this part before </body> tag */}

      <input
        type="checkbox"
        id="login-modal"
        className={hideLogin ? `hidden` : `modal-toggle`}
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="login-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <LoginForm />
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

export default LoginModal

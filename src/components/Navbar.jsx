import React from "react"
import RegisterModal from "./RegisterModal"
import LoginModal from "./LoginModal"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "../features/goals/goalsSlice"

const Navbar = () => {
  const dispatch = useDispatch()
  const { hideLogin } = useSelector((store) => store.goals)

  const localHandler = (e) => {
    console.log(e.target.id)
    dispatch(logoutUser())
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to={"/creategoal"} className="justify-between">
                Create Goals
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link to={"/savedgoals"}>Saved Goals</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          Smart Goals
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li tabIndex={0}>
            <Link to={"/creategoal"}>Create Goals</Link>
          </li>
          <li>
            <Link to={"/savedgoals"}>Saved Goals</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!hideLogin && (
          <label htmlFor="register-modal">
            <a
              className="btn"
              htmlFor="register-modal"
              id="register"
              onClick={(e) => localHandler(e)}
            >
              Register
            </a>
          </label>
        )}
        <RegisterModal />
        {!hideLogin && (
          <label htmlFor="login-modal">
            <a
              className="btn mx-3"
              htmlFor="login-modal"
              id="login"
              onClick={(e) => localHandler(e)}
            >
              Login
            </a>
          </label>
        )}
        {hideLogin && (
          <a
            className="btn mx-3"
            htmlFor="login-modal"
            id="logout"
            onClick={localHandler}
          >
            Logout
          </a>
        )}
        <LoginModal />
      </div>
    </div>
  )
}

export default Navbar

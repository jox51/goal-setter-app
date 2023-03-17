import { Outlet, Navigate } from "react-router-dom"
import React from "react"
import { useSelector } from "react-redux"

const PrivateRoute = () => {
  const { loginResp } = useSelector((store) => store.goals)

  if (loginResp.msg === "login success") {
    return <Outlet />
  } else {
    return <Navigate to={loginWithRedirect()} />
  }
}

export default PrivateRoute

import { useContext, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";


export default function RequireAuth() {

    const location = useLocation()
    const token = localStorage.getItem("token")


    return (

        token? <Outlet /> : <Navigate state={{ from: location }} replace to='/login' />
    )
}
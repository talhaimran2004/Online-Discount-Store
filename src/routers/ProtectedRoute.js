import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../customHooks/useAuth'

const ProtectedRoute = () => {

    const navigate = useNavigate()

    const { currentUser } = useAuth();  

    return currentUser ? <Outlet /> : navigate('/login')
}

export default ProtectedRoute

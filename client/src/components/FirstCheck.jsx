import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { UseDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { authAction } from '../store/reducres/authReducer';
const FirstCheck = ({ children }) => {
    const navigate = useNavigate();
    let value = useSelector(state => state.authReducer.isLogin);

    if (value) {
        return (
            children
        )
    }
    else
        return (
            navigate("/login")
        )

}

export default FirstCheck
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { UseDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { authAction } from '../store/reducres/authReducer';
const FirstCheck = ({ children }) => {
    const navigate = useNavigate();
    let value = useSelector(state => state.authReducer.isLogin);
    // console.log('value', value)
    if (!value) {
        return <Navigate to={"/login"} />;
    }

    return (
        <Outlet />
    )

}

export default FirstCheck
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
const TogleNavbar = ({ children }) => {
    const location = useLocation();
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        if (location.pathname === "/login" || location.pathname === "/signup") {
            setVisible(false)
        }
        else {
            setVisible(true)
        }
    }, [location]);
    return (
        <div>
            {visible && children}
        </div>
    )
}

export default TogleNavbar

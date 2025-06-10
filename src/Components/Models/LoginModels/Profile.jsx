import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import LoginModel from "../LoginModels/LoginModel.jsx";
import UserModel from "../LoginModels/UserModel.jsx";

const Profile = ({ onClose }) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = Cookies.get("token");
        setToken(storedToken);
    }, [])

    if (token) {
        return <UserModel onClose={onClose} />
    } else {
        return <LoginModel onClose={onClose} />
    }
}

export default Profile;
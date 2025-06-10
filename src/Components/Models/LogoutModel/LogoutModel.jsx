import React, { useState } from "react";
import Cookies from "js-cookie";
import { showToast } from "../../Toast";
import "../LogoutModel/LogoutModel.css";

const LogoutModel = ({ onLogout, onClose }) => {

    const handleLogoutConfirm = () => {
        Cookies.remove("token");
        showToast("Logout Successful", "green");
        onLogout();
    }

    return (
        <>
            <div className="logout-overlay">
                <div className="logout-modal">
                    <p>Are you sure you want to logout?</p>
                    <div className="logout-buttons">
                        <button className="logout-confirm" onClick={handleLogoutConfirm}>
                            Yes, Logout
                        </button>
                        <button className="logout-cancel" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogoutModel;
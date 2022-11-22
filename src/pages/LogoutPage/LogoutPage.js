import React from "react";
import { useLogoutPage } from "./useLogoutPage";

export const LogoutPage = () => {
  const { handleLogout, handleBackToMenu, userProfile } = useLogoutPage();

  return (
    <section className="bungkus">
      <div className="ingfo">
        <div className="bulat"></div>
        <div className="nama">{userProfile.username}</div>
        <div className="email">{userProfile.email}</div>
        <div onClick={handleBackToMenu} className="menu">
          Back to menu
        </div>
        <div onClick={handleLogout} className="logout">
          Logout
        </div>
      </div>
    </section>
  );
};

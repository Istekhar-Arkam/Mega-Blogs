import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import authService from "../../appWrite/auth";
function LogoutBtn() {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button className="px-6 py-2 duration-200 rounded-full inline-bock hover:bg-blue-100">
      Logout
    </button>
  );
}

export default LogoutBtn;

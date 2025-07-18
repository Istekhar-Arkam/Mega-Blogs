import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import authService from "./appWrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from 'react-router-dom'
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen bg-gray-500">
      <div className="block w-full">
        <Header />
        <main>
          TODO: <Outlet />
          </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;

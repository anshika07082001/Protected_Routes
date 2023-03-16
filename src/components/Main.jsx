import React, { useEffect, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";
import Settings from "./Settings";
import UserContext from "../context/UserContext";
import Navbar from "./Navbar";
import ProtectedHoc from "./ProtectedHoc";

const Main = () => {
  const [data, setData] = useState([]);
  const [sign, setSign] = useState([]);
  const [login, setLogin] = useState({});
  // fetching the data from dummy json in useEffect
  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((result) => {
        setData(result.quotes);
      });
  }, []);

  // created the router object
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/protected",
          // elements wrapped in protected hoc component
          element: (
            <ProtectedHoc>
              <Outlet />
            </ProtectedHoc>
          ),
          children: [
            {
              path: "/protected/profile",
              element: <Profile />,
            },
            {
              path: "/protected/settings",
              element: <Settings />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <UserContext.Provider value={{ login, setLogin, sign, setSign, data }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
};

export default Main;

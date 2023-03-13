import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import useContextHook from "../customHook/useContextHook";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Profile from "./Profile";
import Settings from "./Settings";
import UserContext from "../context/UserContext";

const Main = () => {
  const [data, setData] = useState([]);
  const [sign, setSign] = useState([]);
  const [login, setLogin] = useState({});
  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((result) => {
        setData(result.quotes);
        // console.log(result.quotes);
      });
  }, []);

  let User = useContextHook(login);
  //   console.log(User);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home data={data} />,
    },
    {
      path: "/signup",
      element: <SignUp sign={sign} setSign={setSign} />,
    },
    {
      path: "/login",
      element: (
        <Login
          sign={sign}
          setSign={setSign}
          login={login}
          setLogin={setLogin}
        />
      ),
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
  ]);

  return (
    <UserContext.Provider value={User}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
};

export default Main;

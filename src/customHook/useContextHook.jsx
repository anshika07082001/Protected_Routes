import React, { useState } from "react";

const useContextHook = () => {
  const [login, setLogin] = useState({});
  return login;
};

export default useContextHook;
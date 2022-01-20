import React, { createContext, useEffect } from "react";
import usePersistedState from "../utils/usePeristedState";


export const AuthContext = createContext({});

export const AuthProvider = (props: any) => {
  const [user, setUser] = usePersistedState("user",  "");


  useEffect(() => {
    const userStorage = user || '';
   setUser(userStorage)
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};



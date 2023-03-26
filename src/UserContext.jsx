import { createContext, useReducer } from "react";
import reducer, { init } from "./reducer";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, init);

  function changeName(name) {
    setName(name);
  }
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

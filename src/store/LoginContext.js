import { createContext, useState } from "react";

let LoginContext = createContext({
  seConnecter: () => {},
  seDeconnecter: () => {},
  estConnecte: () => {},
});

export function LoginContextProvider(props) {
  let [isLogging, setIsLogging] = useState(false);

  function login(credentials) {
    if (
      credentials.email == "n@gmail.com" &&
      credentials.password == "azerty"
    ) {
      setIsLogging(true);
      return true;
    } else {
      setIsLogging(false);
      return false;
    }
  }

  function logout() {
    setIsLogging(false);
  }

  const c = {
    seConnecter: login,
    seDeconnecter: logout,
    estConnecte: isLogging,
  };

  return (
    <LoginContext.Provider value={c}>{props.children}</LoginContext.Provider>
  );
}

export default LoginContext;

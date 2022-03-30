import { createContext, useState } from "react";

export const FormContext = createContext();

export default ({ children }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const formData = {
    email: [email, setEmail],
    password: [password, setPassword],
    username: [username, setUsername],
  };

  return (
    <FormContext.Provider value={formData}>{children}</FormContext.Provider>
  );
};

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log("user", user);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ token }); 
    }
  }, []);


  const login = async (email, password) => {
    try {
      const response = await fetch("https://react-a5c8d-default-rtdb.firebaseio.com/users.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: email, password }),
      });

      if (!response.ok) throw new Error("Invalid credentials");

      const data = await response.json();
      localStorage.setItem("token", data.token); 
      setUser({ token: data.token });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

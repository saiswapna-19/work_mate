
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("workmate_user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const register = (details) => {
    const newUser = {
      ...details,
      verified: false,
      profileCompleted: false,
      completedTasks: 0,
    };

    localStorage.setItem("workmate_user", JSON.stringify(newUser));
    setUser(newUser);
  };

  const updateUser = (details) => {
    setUser((currentUser) => {
      if (!currentUser) return currentUser;

      const updatedUser = {
        ...currentUser,
        ...details,
      };

      localStorage.setItem(
        "workmate_user",
        JSON.stringify(updatedUser)
      );

      return updatedUser;
    });
  };

  const logout = () => {
    localStorage.removeItem("workmate_user");
    localStorage.removeItem("workmate_profile");
    localStorage.removeItem("workmate_profile_photo");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, register, updateUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}



import { createContext, useState, useEffect } from 'react';

export const useUser = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(() => {
    // Check if the username is saved in localStorage
    const savedUsername = localStorage.getItem("userUsername");
    return savedUsername || "";
  });

  // Sync username to localStorage whenever it changes
  useEffect(() => {
    if (username) {
      localStorage.setItem("userUsername", username);  // Save username to localStorage
    }
  }, [username]);

  return (
    <useUser.Provider value={{ username, setUsername }}>
      {children}
    </useUser.Provider>
  );
};


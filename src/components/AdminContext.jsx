// import { createContext, useState, useEffect } from 'react';

// export const AdminContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [username, setUsername] = useState(() => {
//     // Check if the username is saved in localStorage
//     const savedUsername = localStorage.getItem("username");
//     return savedUsername || "";
//   });

//   // Sync username to localStorage whenever it changes
//   useEffect(() => {
//     if (username) {
//       localStorage.setItem("username", username);  // Save username to localStorage
//     }
//   }, [username]);

//   return (
//     <UserContext.Provider value={{ username, setUsername }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

import React, { createContext, useState, useContext } from 'react';

const AdminContext = createContext();

export const useAdmin = () => {
  return useContext(AdminContext);
};

export const AdminProvider = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem("adminUsername"));
  const [authToken, setAuthToken] = useState(localStorage.getItem("adminAuthToken"));

  return (
    <AdminContext.Provider value={{ username, setUsername, authToken, setAuthToken }}>
      {children}
    </AdminContext.Provider>
  );
};

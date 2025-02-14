import React, { useEffect, useState } from "react";
import axios from "axios";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);

//   useEffect(() => {
//     const fetchnotifications = async () => {
//       try {
//         const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
//         const response = await axios.get(`${API_BASE_URL}/admin/notification`);

//         console.log("API Response:", response.data); // Debugging log

//         if (Array.isArray(response.data)) {
//           setNotifications(response.data);
//         } else {
//           console.error("Invalid data format:", response.data);
//           setNotifications([]); // Set empty array if response is incorrect
//         }
//       } catch (error) {
//         console.error("Error fetching notifications:", error);
//         setNotifications([]); // Set empty array in case of error
//       }
//     };

//     fetchnotifications();
//   }, []);

  // Inside the notificationsTable component


  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
        const response = await axios.get(`${API_BASE_URL}/admin/notification`);
  
        console.log("API Response:", response.data); // Debugging log
  
        if (response.data && Array.isArray(response.data.allNotifications)) {
        //   setNotifications(response.data.allNotifications);
        setNotifications(response.data.allNotifications.flatMap(user => user.notifications));

        } else {
          console.error("Invalid data format:", response.data);
          setNotifications([]); // Set empty array if response is incorrect
        }
      } catch (error) {
        console.error("Error fetching notifications:", error);
        setNotifications([]); // Set empty array in case of error
      }
    };
  
    fetchNotifications();
  }, []);
  
  return (
    <table>
      <thead>
        <tr>
          <th>Notification ID</th>
          <th>Username</th>
          <th>Title</th>
          <th>Date</th>
          <th>Description</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <React.Fragment key={notification.notificationId || index}>
              <tr
                onClick={() =>
                  setExpandedRow(expandedRow === index ? null : index)
                }
              >
                <td>{notification._id}</td>
                <td>{notification.username}</td>
                <td>{notification.title}</td>
                <td>{notification.date}</td>
                <td>{notification.description}</td>
                <td>{notification.update}</td>
              </tr>
              {expandedRow === index && (
                <tr>
                  <td colSpan="4">
                    {/* Render additional notification details here */}
                    <div>
                      <p>
                        <strong>Notification ID:</strong> {notification._id}
                      </p>
                      <p>
                        <strong>Description:</strong> {notification.description}
                      </p>
                      <p>
                        <strong>Method:</strong> {notification.method}
                      </p>
                      <p>
                        <strong>Description:</strong> {notification.description}
                      </p>
                      <p>
                        <strong>Update:</strong> {notification.update}
                      </p>
                      {/* Add more details as needed */}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))
        ) : (
          <tr>
            <td colSpan="6">No notifications found</td>
          </tr>
        )}
      </tbody>
    </table>
  );

  // Rest of the component...
};

export default Notifications;

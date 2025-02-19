import React, { useEffect, useState } from "react";
import style from "../styles/usernotification.module.css";
import axios from "axios";

function Notification() {
  const [notifications, setNotifications] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
        const response = await axios.get(`${API_BASE_URL}/admin/notification`);

        console.log("API Response:", response.data); // Debugging log

        if (response.data && Array.isArray(response.data.allNotifications)) {
          const formattedNotifications = response.data.allNotifications.flatMap(
            (user) =>
              user.notifications.map((notification) => ({
                ...notification,
                username: user.username, // Attach username to each notification
              }))
          );

          setNotifications(formattedNotifications);
        } else {
          console.error("Invalid data format:", response.data);
          setNotifications([]);
        }
      } catch (error) {
        console.error("Error fetching notifications:", error);
        setNotifications([]);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div>
      {notifications.length > 0 ? (
        notifications.map((notification, index) => (
          <React.Fragment key={notification.notificationId || index}>
            <div className={style.notification}>
              <div className={style.notificationLeft}>
                <p className={style.notiInvest}>{notification.update}</p>
                <p className={style.notiPlan}>{notification.title}</p>
                {/* <p>{notification.description}</p> */}
                <p>{notification.date}</p>
              </div>

              <div
                className={style.notificationRight}
                onClick={() =>
                  setExpandedRow(expandedRow === index ? null : index)
                }
              >
                <button className={style.btn}>View detail</button>
              </div>
            </div>
            {expandedRow === index && (
              <tr>
                <td colSpan="4">
                  {/* Render additional notification details here */}
                  <div>
                    <p>
                      <strong>Notification ID:</strong> {notification._id}
                    </p>
                    <p>
                      <strong>Title:</strong> {notification.title}
                    </p>
                    <p>
                      <strong>Update:</strong> {notification.update}
                    </p>
                    <p>
                      <strong>Description:</strong> {notification.description}
                    </p>
                    <p>
                      <strong>Date:</strong> {notification.date}
                    </p>
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
    </div>
  );
}

export default Notification;

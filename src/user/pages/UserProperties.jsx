import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SideBar from "../components/UserSideBar";
import UserHeader from "../components/UserHeader";
import style from "../styles/userdashboard.module.css";
import { Link } from "react-router-dom";

import Transaction from "../../components/Transaction"

function UserProperties() {
  // const [openIndex, setOpenIndex] = useState(null); // To toggle property details
  // const [properties, setProperties] = useState([]); // Stores the property list
  const [loading, setLoading] = useState(true); // Tracks loading state
  // const [error, setError] = useState(null); // Tracks errors
  // const navigate = useNavigate();

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
        const res = await axios.get(
          `${API_BASE_URL}/admin/all-properties`
        );
        setProperties(res.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };
    fetchProperties();
  }, []);

  // const toggleAnswer = (index) => {
  //   setOpenIndex(openIndex === index ? null : index);
  // };

  // const handleViewDetail = (investmentCategory) => {
  //   navigate(`/user/properties/${investmentCategory}`);
  // };

  // if (loading) {
  //   return <p>Loading properties...</p>; // Display loading state
  // }

  // if (error) {
  //   return <p className={style.error}>{error}</p>; // Display error message
  // }

  return (
    <>
      <div className={style.componentContent}>
        <SideBar />
        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline}>
            <div className={style.propertyList}>
              {properties.map((property) => (
                <div key={property._id} className={style.propertyCard}>
                  <div className={style.propertyHeader}>
                    <h3>{property.title}</h3>
                    <p>{property.description}</p>
                  </div>

                  <img
                    src={
                      property.images.length > 0
                        ? property.images[0]
                        : "/default-image.jpg"
                    }
                    alt={property.title}
                    className={style.propertyImage}
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                    }}
                  />

                  <div className={style.propertyDetails}>
                    <p>Price: {property.amount}</p>
                    <p>Venue: {property.propertyLocation}</p>

                    <div className={style.propertyMoreInfo}></div>

                    <Link
                      to={`/property/${property._id}`}
                      className={style.detailsButton}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
              {/* <p>No properties found.</p> */}
              {/* <Transaction/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProperties;

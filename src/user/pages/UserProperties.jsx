import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SideBar from "../components/UserSideBar";
import UserHeader from "../components/UserHeader";
import style from "../styles/userinvestments.module.css";
import { Link } from "react-router-dom";
import Transaction from "../components/AddTransaction";
import CompoundInterest from "./CompoundInterest";

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
        const res = await axios.get(`${API_BASE_URL}/admin/all-properties`);
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
            <div className={style.property}>
              {properties.map((property) => (
                <div key={property._id} className={style.propertyCard}>
                  <div className={style.img}>
                    <img
                      src={
                        property.images.length > 0
                          ? property.images[0]
                          : "/default-image.jpg"
                      }
                      alt={property.title}
                      className={style.contain}
                    />
                  </div>

                  <div className={style.propertyDiv}>
                    <div className={style.propertyTitle}>
                      <img
                        src="/images/buy.png"
                        alt="property"
                        className={style.contai}
                      />
                      <h2 className={style.package}>{property.propertyType}</h2>
                    </div>

                    <div className={style.propertyTitle}>
                      <h2 className={style.package}>{property.title}</h2>
                      <h2 className={style.package}>
                        {property.currency} {property.amount}
                      </h2>
                    </div>

                    <p className={style.par}>{property.description}</p>

                    <div className={style.period1}>
                      <div className={style.period}>
                        <img
                          src="/images/hourglass.png"
                          alt="property"
                          className={style.contai}
                        />
                        <p className={style.pary}>
                          {property.propertyLocation}
                        </p>
                      </div>

                      <div className={style.period}>
                        <img
                          src="/images/hourglass.png"
                          alt="property"
                          className={style.contai}
                        />
                        <p className={style.pary}>{property.propertyUnit}</p>
                      </div>
                    </div>

                    <div className={style.period}>
                      <img
                        src="/images/hourglass.png"
                        alt="property"
                        className={style.contai}
                      />
                      <p className={style.pary}>{property.duration}</p>
                    </div>

                    <div className={style.periodH}>
                      {property.features.map((feature, index) => (
                        <div className={style.periodL}>
                          <img
                            src="/images/hourglass.png"
                            alt="property"
                            className={style.contai}
                          />
                          <p className={style.pary} key={index}>
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={`/user/property/${property._id}`}
                      className={style.investDetail}
                    >
                      View Details
                      <span className="material-symbols-outlined">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
              {/* <p>No properties found.</p> */}
              {/* <Transaction/> */}

              {/* <CompoundInterest /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProperties;

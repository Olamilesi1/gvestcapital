import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import style from "../styles/addinvest.module.css";

function PropertyList() {
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

  return (
    <div className={style.container}>
      <h2>Available Properties</h2>
      <div className={style.propertyGrid}>
        {properties.map((property) => (
          <div key={property._id} className={style.propertyCard}>
            <img
              src={property.images.length > 0 ? property.images[0] : "/default-image.jpg"}
              alt={property.title}
              className={style.propertyImage}
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        
            />
            <h3>{property.title}</h3>
            <p>{property.description.substring(0, 50)}...</p>
            <p>
              <strong>Location:</strong> {property.propertyLocation}
            </p>
            <p>
              <strong>Price:</strong> {property.currency} {property.amount}
            </p>
            <Link to={`/property/${property._id}`} className={style.detailsButton}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyList;

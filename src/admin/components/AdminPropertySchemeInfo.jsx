import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "../styles/addinvest.module.css";

import Transaction from "../../user/components/AddTransaction"

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {

        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
        const res = await axios.get(`${API_BASE_URL}/admin/property/${id}`);
        setProperty(res.data);
      } catch (error) {
        console.error("Error fetching property:", error);
      }
    };
    fetchProperty();
  }, [id]);

  if (!property) return <p>Loading property details...</p>;

  return (
    <>
    <div className={style.container}>
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <p>
        <strong>Location:</strong> {property.propertyLocation}
      </p>
      <p>
        <strong>Price:</strong> {property.currency} {property.amount}
      </p>
      <p>
        <strong>Property Type:</strong> {property.propertyType}
      </p>
      <p>
        <strong>Units:</strong> {property.propertyUnit}
      </p>
      <p>
        <strong>Duration:</strong> {property.duration}
      </p>

      <h3>Features:</h3>
      <ul>
        {property.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <h3>Property Images:</h3>
      <div className={style.imageGallery}>
        {property.images.map((img, index) => (
          <img key={index} src={img} alt={`Property ${index}`}    style={{ width: "100px", height: "100px", borderRadius: "50%" }}
           className={style.propertyImage} />
        ))}
      </div>

    </div>
    <Transaction/>
    </>
  );
}

export default PropertyDetails;

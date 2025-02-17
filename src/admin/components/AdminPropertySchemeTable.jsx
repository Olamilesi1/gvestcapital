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
      <h2 className={style.eme}> Property Schemes</h2>

      <table>
        <thead className={style.head}>
          <tr>
            <th className={style.headr}>ID</th>
            {/* <th className={style.headr}>Image</th> */}
            <th className={style.headr}>Title</th>
            <th className={style.headr}>Type</th>
            <th className={style.headr}>Amount</th>
            <th className={style.headr}>Property Unit</th>
            <th className={style.headr}></th>
          </tr>
        </thead>

        <tbody>
          {properties.map((property) => (
            <tr key={property._id}>
              <td>{property.date}</td>

              <td className={style.eyl}>
                <img className={style.contain} src={property.images.length > 0 ? property.images[0] : "/default-image.jpg" }/>
                {property.title}
              </td>

              {/* <td>{property.description.substring(0, 50)}...</td> */}
             
              <td>{property.propertyType}</td>
              
              <td>
                {property.currency}
                {property.amount}
              </td>

              <td>{property.propertyUnit}</td>

              <td>
                <Link to={`/property/${property._id}`} className={style.scheme}>
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PropertyList;

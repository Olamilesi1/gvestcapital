import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "../../user/styles/userinvestments.module.css";
import SideBar from "../../user/components/UserSideBar";
import UserHeader from "../../user/components/UserHeader";
import { Link } from "react-router-dom";
import Transaction from "../../user/components/AddTransaction";

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  const [showTransaction, setShowTransaction] = useState(false);

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
      <div className={style.componentContent}>
        <SideBar />
        <div className={style.headerContent}>
          <UserHeader />

          <div
            className={`${style.componentContent} ${
              showTransaction ? style.blur : ""
            }`}
          >
            <div className={style.outline}>
              <div className={style.property}>
                {property && (
                  <div key={property._id} className={style.propertyCardD}>
                    <div className={style.imageDiv}>
                      {/* First image on the left */}
                      <div className={style.imag}>
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

                      {/* Remaining 4 images in a 2x2 grid on the right */}
                      <div className={style.imgDiv}>
                        <div className={style.imgGrid}>
                          {property.images.slice(1, 5).map((img, index) => (
                            <img
                              key={index}
                              src={img}
                              alt={`Property ${index + 1}`}
                              className={style.smallImg}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className={style.propertyDiv}>
                      <div className={style.propertyTitle}>
                        <img
                          src="/images/buy.png"
                          alt="property"
                          className={style.contai}
                        />
                        <h2 className={style.package}>
                          {property.propertyType}
                        </h2>
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

                      <div className={style.butins}>
                        {/* <button
                          className={style.investDetail}
                          onClick={() => setShowTransaction(true)}
                        >
                          Invest Now
                        </button> */}

                        <button
                          className={style.investDetail}
                          onClick={() =>
                            setShowTransaction({
                              show: true,
                              transactionData: {
                                amount: property.amount,
                                currency: property.currency,
                                description: property.description,
                                type: property.propertyType,
                            },
                            })
                          }
                        >
                          Invest Now
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* {showTransaction && (
            <div className={style.transactionModal}>
              <Transaction />
              <button
                className={style.closeButton}
                onClick={() => setShowTransaction(false)}
              >
                Close
              </button> */}
          {showTransaction.show && (
            <div className={style.transactionModal}>
              <Transaction transactionData={showTransaction.transactionData} />
              <button
                className={style.closeButton}
                onClick={() =>
                  setShowTransaction({ show: false, transactionData: null })
                }
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PropertyDetails;

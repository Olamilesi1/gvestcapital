import React, { useState } from "react";
import SimpleMap from "../components/reusables/Map";
import { NavLink } from "react-router-dom";
import style from "../styles/Contact.module.css";
import Footer from "../components/reusables/Footer";
import Header from "../components/reusables/Header";
import axios from "axios";  // <-- Import axios to send request

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:4000/contact/api/contact", formData);  // Point to your backend
      alert(response.data.message); // success feedback
   
     // Clear the form
     setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: ""
  });
  
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again later.");
    }
  };
  return (
    <div>
      <Header />
      <div className={style.home}>
        <div className={style.homeText}>
          <h1 className={style.contactText}>Contact Us</h1>
        </div>
      </div>

      <div className={style.contacts}>
        <div className={style.center}>
          <h1>Get in Touch with Gtext</h1>
          <p>Your journey to successful real estate investment starts here.</p>
        </div>

        <div className={style.contact}>
          <div className={style.contactLeft}>
            <p>
              Whether you have questions, need assistance, or are ready to
              invest, our team is here to help.
            </p>

            <div className={style.para}>
              <div className={style.para1}>
                <label htmlFor="">First Name</label>
                <input
                  className={style.input}
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  required
                />
              </div>

              <div className={style.para1}>
                <label htmlFor="">Last Name</label>
                <input
                  className={style.input}
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            <div className={style.nuph}>
              <label htmlFor="">Phone Number</label>
              <input
                className={style.input}
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
              />
            </div>

            <div className={style.nuph}>
              <label htmlFor="">Email</label>
              <input
                className={style.input}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className={style.nuph}>
              <label htmlFor="">Message</label>
              <textarea
                className={style.input}
                name="message"
                value={formData.message}
                onChange={handleChange}
                id=""
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button className={style.investConsult3} onClick={handleSubmit}>
              Ready to Invest? Let's Start the Conversation!
            </button>

            <p>
              Schedule a free consultation with our experts and explore
              opportunities talented to your goals.
            </p>
          </div>

          <div className={style.contactRight}>
            <div className={style.contactIc}>
              <div className={style.contactIcon}>
                <img src="./images/Map.png" alt="map" className={style.map} />
                <p className={style.ad}>Gvest HQ Office Address:</p>
              </div>
              <p className={style.address}>
                518, Westgreen Blvd. Katy, Texas, 77450
              </p>
            </div>

            <div className={style.contactIc}>
              <div className={style.contactIcon}>
                <img
                  src="./images/Phone.png"
                  alt="phone"
                  className={style.map}
                />
                <p className={style.ad}>Phone: +1 (346) 575-4852</p>
              </div>
              <p className={style.address1}>
                (Monday to Friday, 9:00 AM-6:00PM EST)
              </p>
            </div>

            <div className={style.contactIc}>
              <div className={style.contactIcon}>
                <img src="./images/AT.png" alt="at" className={style.map} />
                <p className={style.ad}>Email: info@gtexthomesusa.com</p>
              </div>
            </div>

            <SimpleMap />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "../styles/Home.module.css";
import Footer from "../components/reusables/Footer";
import Header from "../components/reusables/Header";

function Contact() {
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
                  placeholder="Enter your first name"
                  required
                />
              </div>

              <div className={style.para1}>
                <label htmlFor="">Last Name</label>
                <input
                  className={style.input}
                  type="text"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            <label htmlFor="">Phone Number</label>
            <input
              className={style.input}
              type="number"
              placeholder="Enter your phone"
            />

            <label htmlFor="">Email</label>
            <input
              className={style.input}
              type="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="">Message</label>
            <textarea
              className={style.input}
              name=""
              id=""
              placeholder="Enter your message"
              required
            ></textarea>

            <button className={style.investConsult3}>
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
                <p className={style.ad}>Gtext HQ Office Address:</p>
              </div>
              <p className={style.address}>
                18851 NE 29th Ave, Suite 1000 Aventura, FL 33180
              </p>
            </div>

            <div className={style.contactIc}>
              <div className={style.contactIcon}>
                <img
                  src="./images/Phone.png"
                  alt="phone"
                  className={style.map}
                />
                <p className={style.ad}>Phone: +1 305 407 0276</p>
              </div>
              <p className={style.address1}>
                (Monday to Friday, 9:00 AM-6:00PM EST)
              </p>
            </div>

            <div className={style.contactIc}>
              <div className={style.contactIcon}>
                <img src="./images/AT.png" alt="at" className={style.map} />
                <p className={style.ad}>Email: invest@gtext.com</p>
              </div>
            </div>

            <h1>MAP</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

import { NavLink } from "react-router-dom";
import style from "../../styles/Footer.module.css";

function Footer() {
  return (
    <>
      <div className={style.footB}>
        <div className={style.footDiv}>
          <img src="./images/logo.png" alt="img" className={style.logo} />

          <div className={style.footNav}>
            <div className={style.footNav2}>
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
              />

              <div className={style.contact}>
                <h5 className={style.p}>CONTACT</h5>
                <p className={style.p}>09078652556276</p>
                <p className={style.p}>gtext@gmail.com</p>
                <p className={style.p}>
                  4, Joe Faraday, Mojisola Estate, Onikoyi, Ikoyi
                </p>
                <span>
                  <p className={style.p}> Social media Icon</p>
                </span>
              </div>

              <div className={style.contact}>
                <h5 className={style.p}>LEGAL</h5>
                <ul className={style.navUl}>
                  <li className={style.navLi}>
                    <NavLink to="/faq">FAQs</NavLink>
                  </li>
                  <li className={style.navLi}>
                    <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                  </li>
                  <li className={style.navLi}>
                    <NavLink to="/t&c">Terms & Conditions</NavLink>
                  </li>
                  <li className={style.navLi}>
                    <NavLink to="/disclosure">Disclosures</NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className={style.footText}>
              <p className={style.footText1}>
                Investing involves risk, including loss of principal. Past
                performance does not guarantee or indicate future results. Any
                historical returns, expected returns, or probability projections
                may not reflect actual future performance. While the data we use
                from third parties is believed to be reliable, we cannot ensure
                the accuracy or completeness of data provided by investors or
                other third parties. Neither Cardone Capital nor any of its
                affiliates provide tax advice and do not represent in any manner
                that the outcomes described herein will result in any particular
                tax consequence. Offers to sell, or solicitations of offers to
                buy, any security can only be made through official offering
                documents that contain important information about investment
                objectives, risks, fees and expenses. Bitcoin is highly
                speculative and its actual performance may not match investor
                expectation. Prospective investors should consult with a tax,
                legal and/or financial adviser before making any investment
                decision.
              </p>{" "}
              <br />
              <p className={style.p}>
                For additional important risks, disclosures, and information,
                please visit www.cardonecapital.com/disclosures
              </p>
            </div>
          </div>
        </div>
        <p className={style.copy}>All rights reserved © 2024 Cardone Capital</p>
      </div>
    </>
  );
}

export default Footer;

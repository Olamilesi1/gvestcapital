import { NavLink } from "react-router-dom";
import style from "../../styles/Footer.module.css";

function Footer() {
  return (
    <>
      <div className={style.footB}>
        <div className={style.footDiv}>
          <div className={style.logoH}>
            <img src="./images/gVestL.png" alt="img" className={style.logo} />
          </div>

          <div className={style.footNav}>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />

            <div className={style.contact}>
              <h4 className={style.contactText}>Contact</h4>
              <p className={style.p}>+1 305 407 0276</p>
              <p className={style.p}>gtext@gmail.com</p>
              <p className={style.p}>
                4, Joe Faraday, Mojisola Estate, Onikoyi, Ikoyi
              </p>

              <span className={style.social}>
                <img src="./images/Linkedin.png" alt="" />
                <img src="./images/Facebook.png" alt="" />
                <img src="./images/Twitter.png" alt="" />
                <img src="./images/IG.png" alt="" />
              </span>
            </div>

            <div className={style.contact}>
              <h4 className={style.contactText}>Legal</h4>
              <ul className={style.navUl}>
                <li className={style.navLi} >
                  {/* <NavLink to="/faq">FAQs</NavLink> */}
                  <a href="#faq">FAQs</a>
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

            <div className={style.footText}>
              <h4 className={style.contactText}>Important</h4>
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
              </p>
            </div>
          </div>

          <div className={style.copyTerm}>
            <p className={style.copy}>© 2024 All rights reserved.</p>
            
              <ul className={style.termPriv}>
                <li className={style.copy}>
                  <NavLink to="/t&c">Terms </NavLink>
                </li>

                <li className={style.copy}>
                  <NavLink to="/privacy-policy">Privacy</NavLink>
                </li>
              </ul>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

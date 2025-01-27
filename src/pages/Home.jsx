import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/reusables/Footer";
import Header from "../components/reusables/Header";
import style from "../styles/Home.module.css";
import Cards from "../components/reusables/Cards";
import Cardss from "../components/reusables/Cardss";
import Property from "../components/reusables/Property";
import Info from "../components/reusables/Info";
import Profile from "../components/reusables/Profile";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_forward"
/>;

function Home() {
  const premiumHousingCards = [
    {
      title: "High rental yield and resale value",
      bgColor: "rgba(0, 0, 255, 0.1)",
      textColor: "rgba(0, 0, 255, 0.8)",
      borderColor: ".1rem solid rgba(0, 0, 255, 0.8)",
    },
    {
      title: "Luxurious urban locations",
      bgColor: "rgba(0, 128, 0, 0.1)",
      textColor: "rgba(0, 128, 0, 1)",
      borderColor: ".1rem solid rgba(0, 128, 0, 1)",
    },
  ];

  const dynamicCard1 = {
    title: "Prime urban and suburban locations",
    bgColor: "rgba(30, 30, 30, 0.1)",
    textColor: "rgba(30, 30, 30, 1)",
    borderColor: ".1rem solid rgba(30, 30, 30, 1)",
  };

  const landAcquisitionCards = [
    {
      title: "Flexible payment plans",
      bgColor: "rgba(0, 0, 255, 0.1)",
      textColor: "rgba(0, 0, 255, 0.8)",
      borderColor: ".1rem solid rgba(0, 0, 255, 0.8)",
    },
    {
      title: "Low-risk, high-appreciation potential",
      bgColor: "rgba(0, 128, 0, 0.1)",
      textColor: "rgba(0, 128, 0, 1)",
      borderColor: ".1rem solid rgba(0, 128, 0, 1)",
    },
  ];

  const dynamicCard2 = {
    title: "Strategically located plots",
    bgColor: "rgba(30, 30, 30, 0.1)",
    textColor: "rgba(30, 30, 30, 1)",
    borderColor: ".1rem solid rgba(30, 30, 30, 1)",
  };

  const commercialRealEstateCards = [
    {
      title: "High-traffic, business-friendly locations",
      bgColor: "rgba(0, 0, 255, 0.1)",
      textColor: "rgba(0, 0, 255, 0.8)",
      borderColor: ".1rem solid rgba(0, 0, 255, 0.8)",
    },
    {
      title: "Stable long-term returns",
      bgColor: "rgba(0, 128, 0, 0.1)",
      textColor: "rgba(0, 128, 0, 1)",
      borderColor: ".1rem solid rgba(0, 128, 0, 1)",
    },
  ];

  const dynamicCard3 = {
    title: "Strong tenant demand",
    bgColor: "rgba(30, 30, 30, 0.1)",
    textColor: "rgba(30, 30, 30, 1)",
    borderColor: ".1rem solid rgba(30, 30, 30, 1)",
  };
  const customizableInvestmentCards = [
    {
      title: "Personalized consultation",
      bgColor: "rgba(0, 0, 255, 0.1)",
      textColor: "rgba(0, 0, 255, 0.8)",
      borderColor: ".1rem solid rgba(0, 0, 255, 0.8)",
    },
    {
      title: "Flexible entry points",
      bgColor: "rgba(0, 128, 0, 0.1)",
      textColor: "rgba(0, 128, 0, 1)",
      borderColor: ".1rem solid rgba(0, 128, 0, 1)",
    },
  ];

  const dynamicCard4 = {
    title: "Diverse risk-reward options",
    bgColor: "rgba(30, 30, 30, 0.1)",
    textColor: "rgba(30, 30, 30, 1)",
    borderColor: ".1rem solid rgba(30, 30, 30, 1)",
  };

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Why should I choose Gtext for my real estate investments?",
      answer:
        "Gtext offers over a decade of expertise in real estate, providing transparent, secure, and tailored investment opportunities. Our proven track record of delivering consistent returns, ethical practices, and comprehensive support sets us apart from competitors.",
    },
    {
      question: "Why should I choose Gtext for my real estate investments?",
      answer:
        "Gtext offers over a decade of expertise in real estate, providing transparent, secure, and tailored investment opportunities. Our proven track record of delivering consistent returns, ethical practices, and comprehensive support sets us apart from competitors.",
    },
    {
      question: "Why should I choose Gtext for my real estate investments?",
      answer:
        "Gtext offers over a decade of expertise in real estate, providing transparent, secure, and tailored investment opportunities. Our proven track record of delivering consistent returns, ethical practices, and comprehensive support sets us apart from competitors.",
    },
  ];

  return (
    <>
      <Header />
      <div className={style.home}>
        <div className={style.homeText}>
          <h1 className={style.homeText1}>
            Build Your Future With GVest Real Estate Investments
          </h1>
          <p className={style.homeText2}>
            Join us at Gtext to explore smart investment opportunities that
            secure your financial freedom.
          </p>

          <div className={style.btnMore}>
            <button className={style.invest}>
              <NavLink to="/register">Ready To Invest</NavLink>

              <span class="material-symbols-outlined">arrow_forward</span>
            </button>
            <p className={style.more}>
              <NavLink to="/login">Learn More</NavLink>
            </p>
          </div>
        </div>
      </div>

      <div className={style.home2}>
        <p className={style.invest1}>Invest Confidently, Grow Securely.</p>
        <p className={style.cardTitle}>
          Why Investors Trust Gtext for Real Estate Success
        </p>
        <p className={style.cardPara}>
          At Gtext, we don’t just offer investments—we deliver peace of mind,
          exceptional value, and a pathway to financial growth.
        </p>

        <div className={style.card}>
          <Cards
            imageSrc="./images/card1.svg"
            title="Expertise Backed by Experience"
            paragraph="With over a decade of experience in the real estate market, Gtext has become a trusted name for individuals and businesses seeking reliable and profitable investments."
            bgColor="rgba(244, 245, 255, 1)"
            textColor="rgba(26, 35, 126, 1)"
          />

          <Cards
            imageSrc="./images/card2.svg"
            title="Transparent and Secure Investments"
            paragraph="We prioritize transparency in every transaction, ensuring you’re fully informed about your investments at all times. Our secure processes are designed to protect your assets and provide peace of mind."
            bgColor="rgba(252, 243, 255, 1)"
            textColor="rgba(57, 20, 72, 1)"
          />
        </div>

        <div className={style.card}>
          <Cards
            imageSrc="./images/card3.svg"
            title="Diverse Opportunities, Tailored for You"
            paragraph="From luxury housing to prime land acquisitions, our diverse portfolio ensures there’s something for every type of investor. Whether you’re a first-timer or a seasoned professional, we customize opportunities to align with your financial goals."
            bgColor="rgba(241, 255, 255, 1)"
            textColor="rgba(4, 56, 58, 1)"
          />

          <Cards
            imageSrc="./images/card4.svg"
            title="Proven Returns on Investment (ROI)"
            paragraph="Our projects are carefully selected to offer competitive returns, helping you grow your wealth while minimizing risk. Historical ROI for our investors averages 15-20% annually."
            bgColor="rgba(255, 248, 227, 1)"
            textColor="rgba(54, 41, 3, 1)"
          />
        </div>

        <div className={style.card}>
          <Cards
            imageSrc="./images/card5.svg"
            title="Comprehensive Support Every Step of the Way"
            paragraph="From initial consultations to post-investment support, our dedicated team of experts is here to guide you. With Gtext, you’re never alone on your investment journey."
            bgColor="rgba(246, 246, 246, 1)"
            textColor="rgba(66, 63, 63, 1)"
          />

          <Cards
            imageSrc="./images/card6.svg"
            title="Ethical and Sustainable Practices"
            paragraph="We’re committed to ethical real estate practices and sustainable developments that benefit both investors and communities."
            bgColor="rgba(236, 252, 236, 1)"
            textColor="rgba(0, 128, 0, 1)"
          />
        </div>

        <p className={style.invest1}>Real Results, Real Impact.</p>

        <p className={style.cardPara}>
          At Gtext, our results speak louder than words. With a proven track
          record of success and countless satisfied investors, we’re redefining
          real estate investment as a transparent, rewarding, and
          growth-oriented experience.
        </p>

        <div className={style.info}>
          <Info
            title="$500M+"
            paragraph="Invested Capital"
            bgColor="rgba(244, 245, 255, 1)"
          />

          <Info
            title="10K+"
            paragraph="Active Investors"
            bgColor="rgba(235, 255, 255, 1)"
          />

          <Info
            title="15%"
            paragraph="Average ROI Across Projects"
            bgColor="rgba(251, 238, 255, 1)"
          />

          <Info
            title="25+"
            paragraph="Properties in 25+ Cities"
            bgColor="rgba(255, 249, 229, 1)"
          />
        </div>

        <div className={style.btnri}>
          <button className={style.investConsult}>
            Schedule Your Free Investment Consultation
          </button>
        </div>
      </div>

      <div className={style.imageContainer}>
        <img
          src="./images/Container.png"
          alt="container"
          className={style.container}
        />
        <img
          src="./images/Container.png"
          alt="container"
          className={style.container}
        />
        <img
          src="./images/Container.png"
          alt="container"
          className={style.container}
        />
        <img
          src="./images/Container.png"
          alt="container"
          className={style.container}
        />
      </div>

      <div className={style.home3}>
        <p className={style.invest1}>Your Gateway To Real Estate Success</p>
        <p className={style.cardPara}>
          Explore our curated portfolio of Real Estate opportunities, designed
          to meet the unique needs of every investor, From premium housing
          developments to strategic land acquisitions, Gtext offers pathways to
          sustainable growth and exceptional returns.
        </p>

        <Property
          imageSrc="./images/xaxa.png"
          title="Premium Housing Developments"
          description="Invest in luxurious residential properties located in high-demand areas, offering long-term value and immediate rental income potential."
          cards={premiumHousingCards}
          dynamicCard={dynamicCard1}
          buttonLabel="View Detail"
          onButtonClick={() => alert("Navigating to Premium Housing...")}
        />

        <Property
          imageSrc="./images/xaxa2.png"
          title="Land Acquisition Opportunities"
          description="Capitalize on the enduring value of land ownership with carefully selected plots in emerging markets and high-growth regions."
          cards={landAcquisitionCards}
          dynamicCard={dynamicCard2}
          buttonLabel="View Detail"
          onButtonClick={() => alert("Navigating to Land Acquisition...")}
        />

        <Property
          imageSrc="./images/xaxa3.png"
          title="Commercial Real Estate Projects"
          description="Participate in dynamic commercial real estate ventures, including office spaces, retail outlets, and mixed-use developments."
          cards={commercialRealEstateCards}
          dynamicCard={dynamicCard3}
          buttonLabel="View Detail"
          onButtonClick={() => alert("Navigating to Commercial Real Estate...")}
        />

        <Property
          imageSrc="./images/xaxa4.png"
          title="Customizable Investment Packages"
          description="Tailored solutions to match your financial goals, whether you're a first-time investor or an experienced professional."
          cards={customizableInvestmentCards}
          dynamicCard={dynamicCard4}
          buttonLabel="View Detail"
          onButtonClick={() => alert("Navigating to Commercial Real Estate...")}
        />

        <p className={style.cardTitle}>How It Works (3-4 Step Process)</p>
        <div className={style.HH}>
          <div className={style.cardH}>
            <Cardss
              imageSrc="./images/card-2.svg"
              title="Browse Properties"
              bgColor="rgba(26, 35, 126, 0.1)"
              textColor="rgba(26, 35, 126, 1)"
            />

            <Cardss
              imageSrc="./images/card-3.svg"
              title="Connect with Experts"
              bgColor="rgba(255, 249, 229, 1)"
              textColor="rgba(86, 69, 11, 1)"
            />
          </div>

          <div className={style.cardH}>
            <Cardss
              imageSrc="./images/card-4.svg"
              title="Invest Securely"
              bgColor="rgba(254, 246, 207, 1)"
              textColor="rgba(113, 96, 8, 1)"
            />

            <Cardss
              imageSrc="./images/card-5.svg"
              title="Reap Returns"
              bgColor="rgba(212, 255, 255, 0.3)"
              textColor="rgba(0, 128, 0, 1)"
            />
          </div>
        </div>
        <p className={style.cardTitle}>Benefits Of Investing With Gtext</p>

        <div className={style.benefit}>
          <p className={style.benefit1}>Higher-than-average ROI.</p>
          <p className={style.benefit2}>Dedicated support for all investors.</p>
          <p className={style.benefit3}>
            Secure transactions, compliance with legal frameworks.
          </p>
        </div>

        <p className={style.invest1}>Real Stories, Real Success</p>

        <p className={style.cardPara}>
          Hear from investors who have transformed their financial futures with
          Gtext. From first-time property owners to seasoned professionals, our
          success stories are as diverse as our portfolio.
        </p>

        <div className={style.profiles}>
          <Profile
            paragraph="  As a busy professional, I needed a trustworthy partner to
      diversify my investments. Gtext’s tailored opportunities fit
      perfectly into my portfolio. Their secure and transparent process
      gave me confidence, and the results speak for themselves.
    "
            imageSrc="./images/profile.jpeg"
            name="Michael. K"
            title="Generated 20% growth on land value in two years."
          />

          <Profile
            paragraph="  As a busy professional, I needed a trustworthy partner to
      diversify my investments. Gtext’s tailored opportunities fit
      perfectly into my portfolio. Their secure and transparent process
      gave me confidence, and the results speak for themselves.
    "
            imageSrc="./images/profile.jpeg"
            name="Michael. K"
            title="Generated 20% growth on land value in two years."
          />

          <Profile
            paragraph="  As a busy professional, I needed a trustworthy partner to
      diversify my investments. Gtext’s tailored opportunities fit
      perfectly into my portfolio. Their secure and transparent process
      gave me confidence, and the results speak for themselves.
    "
            imageSrc="./images/profile.jpeg"
            name="Michael. K"
            title="Generated 20% growth on land value in two years."
          />

          <Profile
            paragraph="  As a busy professional, I needed a trustworthy partner to
      diversify my investments. Gtext’s tailored opportunities fit
      perfectly into my portfolio. Their secure and transparent process
      gave me confidence, and the results speak for themselves.
    "
            imageSrc="./images/profile.jpeg"
            name="Michael. K"
            title="Generated 20% growth on land value in two years."
          />

          <Profile
            paragraph="  As a busy professional, I needed a trustworthy partner to
      diversify my investments. Gtext’s tailored opportunities fit
      perfectly into my portfolio. Their secure and transparent process
      gave me confidence, and the results speak for themselves.
    "
            imageSrc="./images/profile.jpeg"
            name="Michael. K"
            title="Generated 20% growth on land value in two years."
          />

          <Profile
            paragraph="  As a busy professional, I needed a trustworthy partner to
      diversify my investments. Gtext’s tailored opportunities fit
      perfectly into my portfolio. Their secure and transparent process
      gave me confidence, and the results speak for themselves.
    "
            imageSrc="./images/profile.jpeg"
            name="Michael. K"
            title="Generated 20% growth on land value in two years."
          />
        </div>
      </div>

      <div className={style.home4}>
        <div className={style.secur}>
          <p className={style.cardTitle}>
            Secure Your Path to Real Estate Wealth
          </p>
          <p className={style.cardPara}>
            Join thousands of savvy investors who trust Gtext to turn their
            dreams into reality. With tailored opportunities, proven returns,
            and unwavering support, we make your success our priority. Take the
            first step towards a secure and prosperous future today.
          </p>
        </div>

        <div className={style.btnri}>
          <button className={style.investConsult}>
            Schedule Your Free Investment Consultation
          </button>
        </div>
      </div>

      <div className={style.home3} id="faq">
        <div className={style.faqContainer}>
          <h1 className={style.cardTitle}>FAQ</h1>
          {faqs.map((faq, index) => (
            <div key={index} className={style.faqItem}>
              <div
                className={style.question}
                onClick={() => toggleAnswer(index)}
              >
                {faq.question}
              </div>
              {openIndex === index && (
                <div className={style.answer}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;

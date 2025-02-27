import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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

function Investment() {
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

  const investment = [
    {
      category: "Premium Housing",
      minInvestment: "$50,000",
      ROIPotential: "12-18% annually",
      RecommendedFor: "Long-term wealth building",
    },
    {
      category: "Land Acquisition",
      minInvestment: "$25,000",
      ROIPotential: "20-25% annually",
      RecommendedFor: "Visionaries and developers",
    },
    {
      category: "Commercial Real Estate",
      minInvestment: "$75,000",
      ROIPotential: "15-20% annually",
      RecommendedFor: "High-income rental opportunities",
    },
    {
      category: "Custom Packages",
      minInvestment: "Flexible",
      ROIPotential: "Varies",
      RecommendedFor: "Visionaries and developers",
    },
    // Add more volunteer objects as needed
  ];

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

  const navigate = useNavigate();

  const handleViewDetail = (investmentCategory) => {
    navigate(`/investment/${investmentCategory}`);
  };

  return (
    <>
      <Header />
      <div className={style.home}>
        <div className={style.homeText}>
          <h1 className={style.homeText1}>
            Explore a World of Investment Opportunities with Gtext
          </h1>
          <p className={style.homeText2}>
            From residential properties to land acquisitions, our curated
            categories offer a path to secure and grow your wealth.
          </p>
        </div>
      </div>

      <div className={style.home2}>
        <p className={style.invest1}>Your Gateway to Real Estate Success</p>

        <p className={style.cardPara}>
          Explore our curated portfolio of real estate opportunities, designed
          to meet the unique needs of every investor. From premium housing
          developments to strategic land acquisitions, Gtext offers pathways to
          sustainable growth and exceptional returns.
        </p>
      </div>

      <div className={style.home3}>
        <Property
          imageSrc="./images/xaxa.png"
          title="Premium Housing Developments"
          description="Invest in luxurious residential properties located in high-demand areas, offering long-term value and immediate rental income potential."
          cards={premiumHousingCards}
          dynamicCard={dynamicCard1}
          buttonLabel="View Detail"
          // onButtonClick={() => alert("Navigating to Premium Housing...")}
          onButtonClick={() => handleViewDetail("premium-housing")}
        />

        <Property
          imageSrc="./images/xaxa2.png"
          title="Land Acquisition Opportunities"
          description="Capitalize on the enduring value of land ownership with carefully selected plots in emerging markets and high-growth regions."
          cards={landAcquisitionCards}
          dynamicCard={dynamicCard2}
          buttonLabel="View Detail"
          // onButtonClick={() => alert("Navigating to Land Acquisition...")}
          onButtonClick={() => handleViewDetail("land-acquisition")}
        />

        <Property
          imageSrc="./images/xaxa3.png"
          title="Commercial Real Estate Projects"
          description="Participate in dynamic commercial real estate ventures, including office spaces, retail outlets, and mixed-use developments."
          cards={commercialRealEstateCards}
          dynamicCard={dynamicCard3}
          buttonLabel="View Detail"
          // onButtonClick={() => alert("Navigating to Commercial Real Estate...")}
          onButtonClick={() => handleViewDetail("commercial-project")}
        />

        <Property
          imageSrc="./images/xaxa4.png"
          title="Customizable Investment Packages"
          description="Tailored solutions to match your financial goals, whether you're a first-time investor or an experienced professional."
          cards={customizableInvestmentCards}
          dynamicCard={dynamicCard4}
          buttonLabel="View Detail"
          // onButtonClick={() => alert("Navigating to Commercial Real Estate...")}
          onButtonClick={() => handleViewDetail("customizable-investment")}
        />
      </div>

      <div className={style.home4Invest}>
        <div className={style.investTable}>
          <p className={style.cardTitle}>
            Choose the Right Investment Opportunity for Your Goals
          </p>
          <p className={style.cardPara}>
            Compare our diverse investment options side-by-side to identify the
            best fit for your financial ambitions. Whether you’re seeking
            stability, high returns, or long-term growth, we’ve got you covered.
          </p>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Min Investment</th>
                  <th>ROI Potential</th>
                  <th>Recommended For</th>
                </tr>
              </thead>
              <tbody>
                {investment.map((investments, index) => (
                  <tr key={index}>
                    <td>{investments.category}</td>
                    <td>{investments.minInvestment}</td>
                    <td>{investments.ROIPotential}</td>
                    <td>{investments.RecommendedFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className={style.home3}>
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
          {/* <button className={style.investConsult}>
            Schedule Your Free Investment Consultation
          </button> */}
          <button className={style.investConsult}>
            <NavLink to="/schedule-consultation">
              Schedule Your Free Investment Consultation
            </NavLink>
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

export default Investment;

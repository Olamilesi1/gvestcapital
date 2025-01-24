import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/reusables/Footer";
import Header from "../components/reusables/Header";
import Card from "../components/reusables/Card";
import Cardss from "../components/reusables/Cardss";
import Profile from "../components/reusables/Profile";
import style from "../styles/InvestmentDetail.module.css";
import PropTypes from "prop-types";

function InvestmentDetail() {
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

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const investmentData = {
    "premium-housing": [
      {
        title: "Premium Housing Developments",
        description:
          "Transform your portfolio with premium residential properties designed for growth and long-term value.",

        dynamicCard: [
          {
            title: "Green Living",
            bgColor: "rgba(0, 0, 255, 0.1)",
            textColor: "rgba(0, 0, 255, 0.8)",
          },
          {
            title: "Smart Secure Living",
            bgColor: "rgba(10, 248, 10, 0.1)",
            textColor: "rgba(10, 124, 10, 1)",
          },
          {
            title: "Family-Friendly Community",
            bgColor: "rgba(30, 235, 250, 0.1)",
            textColor: "rgba(7, 90, 96, 1)",
          },
        ],
        buttonLabel: "View Detail",
        imageSrc: "/images/xaxa.png",

        title1: "Jasper Estate Richmond TX",
        description0:
          "A unique blend of modern comfort and serene living, Jasper Estate is nestled in the heart of Clodine, Richmond, TX. This premium estate offers spacious units designed with contemporary architecture, eco-friendly materials, and unparalleled attention to detail. Located in a thriving community, it provides easy access to schools, shopping centers, and recreational facilities, making it an ideal choice for families and investors alike. Experience luxury living with high rental yields and long-term value",
        imageSrc1: "/images/hourglass.png",
        imageSrc2: "/images/hourglass.png",
        imageSrc3: "/images/hourglass.png",
        imageSrc4: "/images/hourglass.png",
        imageSrc5: "/images/hourglass.png",
        imageSrc6: "/images/hourglass.png",
        description1: "18 Months (Construction Duration)",
        description2: "Urban Heights Residences",
        description3: "Downtown City Center",
        description4: "89 Units",
        description5: "1, 2, 3 Bedroom Apartments",
        description6: "June 2026 - January 2025",
        description7: "Investment",
        description8: "Land",
      },
      {
        dynamicCard: [
          {
            title: "Green Living",
            bgColor: "rgba(0, 0, 255, 0.1)",
            textColor: "rgba(0, 0, 255, 0.8)",
          },
          {
            title: "Smart Secure Living",
            bgColor: "rgba(10, 248, 10, 0.1)",
            textColor: "rgba(10, 124, 10, 1)",
          },
          {
            title: "Family-Friendly Community",
            bgColor: "rgba(30, 235, 250, 0.1)",
            textColor: "rgba(7, 90, 96, 1)",
          },
        ],
        buttonLabel: "View Detail",
        imageSrc: "/images/xaxa2.png",

        title1: "Tidwell Heights, Texas",
        description0:
          "Discover the perfect harmony of contemporary living and suburban tranquility at Tidwell Heights, Texas. This thoughtfully designed estate features stylish, energy-efficient homes crafted for modern lifestyles. With spacious layouts, smart home technologies, and community-oriented amenities, Tidwell Heights is tailored for families, professionals, and investors seeking long-term growth. Located in a prime area with excellent connectivity, it offers proximity to top-rated schools, shopping hubs, and lush green parks for recreation and relaxation.",
        imageSrc1: "/images/hourglass.png",
        imageSrc2: "/images/hourglass.png",
        imageSrc3: "/images/hourglass.png",
        imageSrc4: "/images/hourglass.png",
        imageSrc5: "/images/hourglass.png",
        imageSrc6: "/images/hourglass.png",
        description1: "24 Months (Construction Duration)",
        description2: "Urban Heights Residences",
        description3: "Downtown City Center",
        description4: "150 Units",
        description5: "1, 2, 3 Bedroom Apartments",
        description6: "February 2027 - March 2029",
        description7: "Investment",
        description8: "Land",
      },
      {
        dynamicCard: [
          {
            title: "Green Living",
            bgColor: "rgba(0, 0, 255, 0.1)",
            textColor: "rgba(0, 0, 255, 0.8)",
          },
          {
            title: "Smart Secure Living",
            bgColor: "rgba(10, 248, 10, 0.1)",
            textColor: "rgba(10, 124, 10, 1)",
          },
          {
            title: "Family-Friendly Community",
            bgColor: "rgba(30, 235, 250, 0.1)",
            textColor: "rgba(7, 90, 96, 1)",
          },
        ],
        buttonLabel: "View Detail",
        imageSrc: "/images/xaxa3.png",

        title1: "Tidwell Heights, Texas",
        description0:
          "Discover the perfect harmony of contemporary living and suburban tranquility at Tidwell Heights, Texas. This thoughtfully designed estate features stylish, energy-efficient homes crafted for modern lifestyles. With spacious layouts, smart home technologies, and community-oriented amenities, Tidwell Heights is tailored for families, professionals, and investors seeking long-term growth. Located in a prime area with excellent connectivity, it offers proximity to top-rated schools, shopping hubs, and lush green parks for recreation and relaxation.",
        imageSrc1: "/images/hourglass.png",
        imageSrc2: "/images/hourglass.png",
        imageSrc3: "/images/hourglass.png",
        imageSrc4: "/images/hourglass.png",
        imageSrc5: "/images/hourglass.png",
        imageSrc6: "/images/hourglass.png",
        description1: "24 Months (Construction Duration)",
        description2: "Urban Heights Residences",
        description3: "Downtown City Center",
        description4: "150 Units",
        description5: "1, 2, 3 Bedroom Apartments",
        description6: "February 2027 - March 2029.",
        description7: "Investment",
        description8: "Land",
      },
      {
        dynamicCard: [
          {
            title: "Green Living",
            bgColor: "rgba(0, 0, 255, 0.1)",
            textColor: "rgba(0, 0, 255, 0.8)",
          },
          {
            title: "Smart Secure Living",
            bgColor: "rgba(10, 248, 10, 0.1)",
            textColor: "rgba(10, 124, 10, 1)",
          },
          {
            title: "Family-Friendly Community",
            bgColor: "rgba(30, 235, 250, 0.1)",
            textColor: "rgba(7, 90, 96, 1)",
          },
        ],
        buttonLabel: "View Detail",
        imageSrc: "/images/xaxa4.png",

        title1: "Tidwell Heights, Texas",
        description0:
          "Discover the perfect harmony of contemporary living and suburban tranquility at Tidwell Heights, Texas. This thoughtfully designed estate features stylish, energy-efficient homes crafted for modern lifestyles. With spacious layouts, smart home technologies, and community-oriented amenities, Tidwell Heights is tailored for families, professionals, and investors seeking long-term growth. Located in a prime area with excellent connectivity, it offers proximity to top-rated schools, shopping hubs, and lush green parks for recreation and relaxation.",
        imageSrc1: "/images/hourglass.png",
        imageSrc2: "/images/hourglass.png",
        imageSrc3: "/images/hourglass.png",
        imageSrc4: "/images/hourglass.png",
        imageSrc5: "/images/hourglass.png",
        imageSrc6: "/images/hourglass.png",
        description1: "24 Months (Construction Duration)",
        description2: "Urban Heights Residences",
        description3: "Downtown City Center",
        description4: "150 Units",
        description5: "1, 2, 3 Bedroom Apartments",
        description6: "February 2027 - March 2029.",
        description7: "Investment",
        description8: "Land",
      },
    ],

    "land-acquisition": [
      {
        title: "Land Acquisition",
        description:
          "Transform your portfolio with premium residential properties designed for growth and long-term value.",

        dynamicCard: [
          {
            title: "Green Living",
            bgColor: "rgba(0, 0, 255, 0.1)",
            textColor: "rgba(0, 0, 255, 0.8)",
          },
          {
            title: "Smart Secure Living",
            bgColor: "rgba(10, 248, 10, 0.1)",
            textColor: "rgba(10, 124, 10, 1)",
          },
          {
            title: "Family-Friendly Community",
            bgColor: "rgba(30, 235, 250, 0.1)",
            textColor: "rgba(7, 90, 96, 1)",
          },
        ],
        buttonLabel: "View Detail",
        imageSrc: "/images/xaxa.png",

        title1: "Jasper Estate Richmond TX",
        description0:
          "A unique blend of modern comfort and serene living, Jasper Estate is nestled in the heart of Clodine, Richmond, TX. This premium estate offers spacious units designed with contemporary architecture, eco-friendly materials, and unparalleled attention to detail. Located in a thriving community, it provides easy access to schools, shopping centers, and recreational facilities, making it an ideal choice for families and investors alike. Experience luxury living with high rental yields and long-term value",
        imageSrc1: "/images/hourglass.png",
        imageSrc2: "/images/hourglass.png",
        imageSrc3: "/images/hourglass.png",
        imageSrc4: "/images/hourglass.png",
        imageSrc5: "/images/hourglass.png",
        imageSrc6: "/images/hourglass.png",
        description1: "18 Months (Construction Duration)",
        description2: "Urban Heights Residences",
        description3: "Downtown City Center",
        description4: "89 Units",
        description5: "1, 2, 3 Bedroom Apartments",
        description6: "June 2026 - January 2025",
        description7: "Investment",
        description8: "Land",
      },
      {
        dynamicCard: [
          {
            title: "Green Living",
            bgColor: "rgba(0, 0, 255, 0.1)",
            textColor: "rgba(0, 0, 255, 0.8)",
          },
          {
            title: "Smart Secure Living",
            bgColor: "rgba(10, 248, 10, 0.1)",
            textColor: "rgba(10, 124, 10, 1)",
          },
          {
            title: "Family-Friendly Community",
            bgColor: "rgba(30, 235, 250, 0.1)",
            textColor: "rgba(7, 90, 96, 1)",
          },
        ],
        buttonLabel: "View Detail",
        imageSrc: "/images/xaxa2.png",

        title1: "Tidwell Heights, Texas",
        description0:
          "Discover the perfect harmony of contemporary living and suburban tranquility at Tidwell Heights, Texas. This thoughtfully designed estate features stylish, energy-efficient homes crafted for modern lifestyles. With spacious layouts, smart home technologies, and community-oriented amenities, Tidwell Heights is tailored for families, professionals, and investors seeking long-term growth. Located in a prime area with excellent connectivity, it offers proximity to top-rated schools, shopping hubs, and lush green parks for recreation and relaxation.",
        imageSrc1: "/images/hourglass.png",
        imageSrc2: "/images/hourglass.png",
        imageSrc3: "/images/hourglass.png",
        imageSrc4: "/images/hourglass.png",
        imageSrc5: "/images/hourglass.png",
        imageSrc6: "/images/hourglass.png",
        description1: "24 Months (Construction Duration)",
        description2: "Urban Heights Residences",
        description3: "Downtown City Center",
        description4: "150 Units",
        description5: "1, 2, 3 Bedroom Apartments",
        description6: "February 2027 - March 2029",
        description7: "Investment",
        description8: "Land",
      },
      {
        dynamicCard: [
          {
            title: "Green Living",
            bgColor: "rgba(0, 0, 255, 0.1)",
            textColor: "rgba(0, 0, 255, 0.8)",
          },
          {
            title: "Smart Secure Living",
            bgColor: "rgba(10, 248, 10, 0.1)",
            textColor: "rgba(10, 124, 10, 1)",
          },
          {
            title: "Family-Friendly Community",
            bgColor: "rgba(30, 235, 250, 0.1)",
            textColor: "rgba(7, 90, 96, 1)",
          },
        ],
        buttonLabel: "View Detail",
        imageSrc: "/images/xaxa3.png",

        title1: "Tidwell Heights, Texas",
        description0:
          "Discover the perfect harmony of contemporary living and suburban tranquility at Tidwell Heights, Texas. This thoughtfully designed estate features stylish, energy-efficient homes crafted for modern lifestyles. With spacious layouts, smart home technologies, and community-oriented amenities, Tidwell Heights is tailored for families, professionals, and investors seeking long-term growth. Located in a prime area with excellent connectivity, it offers proximity to top-rated schools, shopping hubs, and lush green parks for recreation and relaxation.",
        imageSrc1: "/images/hourglass.png",
        imageSrc2: "/images/hourglass.png",
        imageSrc3: "/images/hourglass.png",
        imageSrc4: "/images/hourglass.png",
        imageSrc5: "/images/hourglass.png",
        imageSrc6: "/images/hourglass.png",
        description1: "24 Months (Construction Duration)",
        description2: "Urban Heights Residences",
        description3: "Downtown City Center",
        description4: "150 Units",
        description5: "1, 2, 3 Bedroom Apartments",
        description6: "February 2027 - March 2029.",
        description7: "Investment",
        description8: "Land",
      },
      {
        dynamicCard: [
          {
            title: "Green Living",
            bgColor: "rgba(0, 0, 255, 0.1)",
            textColor: "rgba(0, 0, 255, 0.8)",
          },
          {
            title: "Smart Secure Living",
            bgColor: "rgba(10, 248, 10, 0.1)",
            textColor: "rgba(10, 124, 10, 1)",
          },
          {
            title: "Family-Friendly Community",
            bgColor: "rgba(30, 235, 250, 0.1)",
            textColor: "rgba(7, 90, 96, 1)",
          },
        ],
        buttonLabel: "View Detail",
        imageSrc: "/images/xaxa4.png",

        title1: "Tidwell Heights, Texas",
        description0:
          "Discover the perfect harmony of contemporary living and suburban tranquility at Tidwell Heights, Texas. This thoughtfully designed estate features stylish, energy-efficient homes crafted for modern lifestyles. With spacious layouts, smart home technologies, and community-oriented amenities, Tidwell Heights is tailored for families, professionals, and investors seeking long-term growth. Located in a prime area with excellent connectivity, it offers proximity to top-rated schools, shopping hubs, and lush green parks for recreation and relaxation.",
        imageSrc1: "/images/hourglass.png",
        imageSrc2: "/images/hourglass.png",
        imageSrc3: "/images/hourglass.png",
        imageSrc4: "/images/hourglass.png",
        imageSrc5: "/images/hourglass.png",
        imageSrc6: "/images/hourglass.png",
        description1: "24 Months (Construction Duration)",
        description2: "Urban Heights Residences",
        description3: "Downtown City Center",
        description4: "150 Units",
        description5: "1, 2, 3 Bedroom Apartments",
        description6: "February 2027 - March 2029.",
        description7: "Investment",
        description8: "Land",
      },
    ],

    "commercial-project": [
      {
        title: "Commercial Real Estate Projects",
        description:
          "Transform your portfolio with premium residential properties designed for growth and long-term value.",

        dynamicCard: [
          {
            title: "Green Living",
            bgColor: "rgba(0, 0, 255, 0.1)",
            textColor: "rgba(0, 0, 255, 0.8)",
          },
          {
            title: "Smart Secure Living",
            bgColor: "rgba(10, 248, 10, 0.1)",
            textColor: "rgba(10, 124, 10, 1)",
          },
          {
            title: "Family-Friendly Community",
            bgColor: "rgba(30, 235, 250, 0.1)",
            textColor: "rgba(7, 90, 96, 1)",
          },
        ],
        buttonLabel: "View Detail",
        imageSrc: "/images/xaxa.png",

        title1: "Jasper Estate Richmond TX",
        description0:
          "A unique blend of modern comfort and serene living, Jasper Estate is nestled in the heart of Clodine, Richmond, TX. This premium estate offers spacious units designed with contemporary architecture, eco-friendly materials, and unparalleled attention to detail. Located in a thriving community, it provides easy access to schools, shopping centers, and recreational facilities, making it an ideal choice for families and investors alike. Experience luxury living with high rental yields and long-term value",
        imageSrc1: "/images/hourglass.png",
        imageSrc2: "/images/hourglass.png",
        imageSrc3: "/images/hourglass.png",
        imageSrc4: "/images/hourglass.png",
        imageSrc5: "/images/hourglass.png",
        imageSrc6: "/images/hourglass.png",
        description1: "18 Months (Construction Duration)",
        description2: "Urban Heights Residences",
        description3: "Downtown City Center",
        description4: "89 Units",
        description5: "1, 2, 3 Bedroom Apartments",
        description6: "June 2026 - January 2025",
        description7: "Investment",
        description8: "Land",
      },
      {
        dynamicCard: [
          {
            title: "Green Living",
            bgColor: "rgba(0, 0, 255, 0.1)",
            textColor: "rgba(0, 0, 255, 0.8)",
          },
          {
            title: "Smart Secure Living",
            bgColor: "rgba(10, 248, 10, 0.1)",
            textColor: "rgba(10, 124, 10, 1)",
          },
          {
            title: "Family-Friendly Community",
            bgColor: "rgba(30, 235, 250, 0.1)",
            textColor: "rgba(7, 90, 96, 1)",
          },
        ],
        buttonLabel: "View Detail",
        imageSrc: "/images/xaxa2.png",

        title1: "Tidwell Heights, Texas",
        description0:
          "Discover the perfect harmony of contemporary living and suburban tranquility at Tidwell Heights, Texas. This thoughtfully designed estate features stylish, energy-efficient homes crafted for modern lifestyles. With spacious layouts, smart home technologies, and community-oriented amenities, Tidwell Heights is tailored for families, professionals, and investors seeking long-term growth. Located in a prime area with excellent connectivity, it offers proximity to top-rated schools, shopping hubs, and lush green parks for recreation and relaxation.",
        imageSrc1: "/images/hourglass.png",
        imageSrc2: "/images/hourglass.png",
        imageSrc3: "/images/hourglass.png",
        imageSrc4: "/images/hourglass.png",
        imageSrc5: "/images/hourglass.png",
        imageSrc6: "/images/hourglass.png",
        description1: "24 Months (Construction Duration)",
        description2: "Urban Heights Residences",
        description3: "Downtown City Center",
        description4: "150 Units",
        description5: "1, 2, 3 Bedroom Apartments",
        description6: "February 2027 - March 2029",
        description7: "Investment",
        description8: "Land",
      },
      {
        dynamicCard: [
          {
            title: "Green Living",
            bgColor: "rgba(0, 0, 255, 0.1)",
            textColor: "rgba(0, 0, 255, 0.8)",
          },
          {
            title: "Smart Secure Living",
            bgColor: "rgba(10, 248, 10, 0.1)",
            textColor: "rgba(10, 124, 10, 1)",
          },
          {
            title: "Family-Friendly Community",
            bgColor: "rgba(30, 235, 250, 0.1)",
            textColor: "rgba(7, 90, 96, 1)",
          },
        ],
        buttonLabel: "View Detail",
        imageSrc: "/images/xaxa3.png",

        title1: "Tidwell Heights, Texas",
        description0:
          "Discover the perfect harmony of contemporary living and suburban tranquility at Tidwell Heights, Texas. This thoughtfully designed estate features stylish, energy-efficient homes crafted for modern lifestyles. With spacious layouts, smart home technologies, and community-oriented amenities, Tidwell Heights is tailored for families, professionals, and investors seeking long-term growth. Located in a prime area with excellent connectivity, it offers proximity to top-rated schools, shopping hubs, and lush green parks for recreation and relaxation.",
        imageSrc1: "/images/hourglass.png",
        imageSrc2: "/images/hourglass.png",
        imageSrc3: "/images/hourglass.png",
        imageSrc4: "/images/hourglass.png",
        imageSrc5: "/images/hourglass.png",
        imageSrc6: "/images/hourglass.png",
        description1: "24 Months (Construction Duration)",
        description2: "Urban Heights Residences",
        description3: "Downtown City Center",
        description4: "150 Units",
        description5: "1, 2, 3 Bedroom Apartments",
        description6: "February 2027 - March 2029.",
        description7: "Investment",
        description8: "Land",
      },
      {
        dynamicCard: [
          {
            title: "Green Living",
            bgColor: "rgba(0, 0, 255, 0.1)",
            textColor: "rgba(0, 0, 255, 0.8)",
          },
          {
            title: "Smart Secure Living",
            bgColor: "rgba(10, 248, 10, 0.1)",
            textColor: "rgba(10, 124, 10, 1)",
          },
          {
            title: "Family-Friendly Community",
            bgColor: "rgba(30, 235, 250, 0.1)",
            textColor: "rgba(7, 90, 96, 1)",
          },
        ],
        buttonLabel: "View Detail",
        imageSrc: "/images/xaxa4.png",

        title1: "Tidwell Heights, Texas",
        description0:
          "Discover the perfect harmony of contemporary living and suburban tranquility at Tidwell Heights, Texas. This thoughtfully designed estate features stylish, energy-efficient homes crafted for modern lifestyles. With spacious layouts, smart home technologies, and community-oriented amenities, Tidwell Heights is tailored for families, professionals, and investors seeking long-term growth. Located in a prime area with excellent connectivity, it offers proximity to top-rated schools, shopping hubs, and lush green parks for recreation and relaxation.",
        imageSrc1: "/images/hourglass.png",
        imageSrc2: "/images/hourglass.png",
        imageSrc3: "/images/hourglass.png",
        imageSrc4: "/images/hourglass.png",
        imageSrc5: "/images/hourglass.png",
        imageSrc6: "/images/hourglass.png",
        description1: "24 Months (Construction Duration)",
        description2: "Urban Heights Residences",
        description3: "Downtown City Center",
        description4: "150 Units",
        description5: "1, 2, 3 Bedroom Apartments",
        description6: "February 2027 - March 2029.",
        description7: "Investment",
        description8: "Land",
      },
    ],

    "customizable-investment": [
      {
        title: "Customizable Investments Packages",
        description:
          "Transform your portfolio with premium residential properties designed for growth and long-term value.",

        dynamicCard: [
          {
            title: "Green Living",
            bgColor: "rgba(0, 0, 255, 0.1)",
            textColor: "rgba(0, 0, 255, 0.8)",
          },
          {
            title: "Smart Secure Living",
            bgColor: "rgba(10, 248, 10, 0.1)",
            textColor: "rgba(10, 124, 10, 1)",
          },
          {
            title: "Family-Friendly Community",
            bgColor: "rgba(30, 235, 250, 0.1)",
            textColor: "rgba(7, 90, 96, 1)",
          },
        ],
        buttonLabel: "View Detail",
        imageSrc: "/images/xaxa.png",

        title1: "Jasper Estate Richmond TX",
        description0:
          "A unique blend of modern comfort and serene living, Jasper Estate is nestled in the heart of Clodine, Richmond, TX. This premium estate offers spacious units designed with contemporary architecture, eco-friendly materials, and unparalleled attention to detail. Located in a thriving community, it provides easy access to schools, shopping centers, and recreational facilities, making it an ideal choice for families and investors alike. Experience luxury living with high rental yields and long-term value",
        imageSrc1: "/images/hourglass.png",
        imageSrc2: "/images/hourglass.png",
        imageSrc3: "/images/hourglass.png",
        imageSrc4: "/images/hourglass.png",
        imageSrc5: "/images/hourglass.png",
        imageSrc6: "/images/hourglass.png",
        description1: "18 Months (Construction Duration)",
        description2: "Urban Heights Residences",
        description3: "Downtown City Center",
        description4: "89 Units",
        description5: "1, 2, 3 Bedroom Apartments",
        description6: "June 2026 - January 2025",
        description7: "Investment",
        description8: "Land",
      },
      {
        dynamicCard: [
          {
            title: "Green Living",
            bgColor: "rgba(0, 0, 255, 0.1)",
            textColor: "rgba(0, 0, 255, 0.8)",
          },
          {
            title: "Smart Secure Living",
            bgColor: "rgba(10, 248, 10, 0.1)",
            textColor: "rgba(10, 124, 10, 1)",
          },
          {
            title: "Family-Friendly Community",
            bgColor: "rgba(30, 235, 250, 0.1)",
            textColor: "rgba(7, 90, 96, 1)",
          },
        ],
        buttonLabel: "View Detail",
        imageSrc: "/images/xaxa2.png",

        title1: "Tidwell Heights, Texas",
        description0:
          "Discover the perfect harmony of contemporary living and suburban tranquility at Tidwell Heights, Texas. This thoughtfully designed estate features stylish, energy-efficient homes crafted for modern lifestyles. With spacious layouts, smart home technologies, and community-oriented amenities, Tidwell Heights is tailored for families, professionals, and investors seeking long-term growth. Located in a prime area with excellent connectivity, it offers proximity to top-rated schools, shopping hubs, and lush green parks for recreation and relaxation.",
        imageSrc1: "/images/hourglass.png",
        imageSrc2: "/images/hourglass.png",
        imageSrc3: "/images/hourglass.png",
        imageSrc4: "/images/hourglass.png",
        imageSrc5: "/images/hourglass.png",
        imageSrc6: "/images/hourglass.png",
        description1: "24 Months (Construction Duration)",
        description2: "Urban Heights Residences",
        description3: "Downtown City Center",
        description4: "150 Units",
        description5: "1, 2, 3 Bedroom Apartments",
        description6: "February 2027 - March 2029",
        description7: "Investment",
        description8: "Land",
      },
      {
        dynamicCard: [
          {
            title: "Green Living",
            bgColor: "rgba(0, 0, 255, 0.1)",
            textColor: "rgba(0, 0, 255, 0.8)",
          },
          {
            title: "Smart Secure Living",
            bgColor: "rgba(10, 248, 10, 0.1)",
            textColor: "rgba(10, 124, 10, 1)",
          },
          {
            title: "Family-Friendly Community",
            bgColor: "rgba(30, 235, 250, 0.1)",
            textColor: "rgba(7, 90, 96, 1)",
          },
        ],
        buttonLabel: "View Detail",
        imageSrc: "/images/xaxa3.png",

        title1: "Tidwell Heights, Texas",
        description0:
          "Discover the perfect harmony of contemporary living and suburban tranquility at Tidwell Heights, Texas. This thoughtfully designed estate features stylish, energy-efficient homes crafted for modern lifestyles. With spacious layouts, smart home technologies, and community-oriented amenities, Tidwell Heights is tailored for families, professionals, and investors seeking long-term growth. Located in a prime area with excellent connectivity, it offers proximity to top-rated schools, shopping hubs, and lush green parks for recreation and relaxation.",
        imageSrc1: "/images/hourglass.png",
        imageSrc2: "/images/hourglass.png",
        imageSrc3: "/images/hourglass.png",
        imageSrc4: "/images/hourglass.png",
        imageSrc5: "/images/hourglass.png",
        imageSrc6: "/images/hourglass.png",
        description1: "24 Months (Construction Duration)",
        description2: "Urban Heights Residences",
        description3: "Downtown City Center",
        description4: "150 Units",
        description5: "1, 2, 3 Bedroom Apartments",
        description6: "February 2027 - March 2029.",
        description7: "Investment",
        description8: "Land",
      },
      {
        dynamicCard: [
          {
            title: "Green Living",
            bgColor: "rgba(0, 0, 255, 0.1)",
            textColor: "rgba(0, 0, 255, 0.8)",
          },
          {
            title: "Smart Secure Living",
            bgColor: "rgba(10, 248, 10, 0.1)",
            textColor: "rgba(10, 124, 10, 1)",
          },
          {
            title: "Family-Friendly Community",
            bgColor: "rgba(30, 235, 250, 0.1)",
            textColor: "rgba(7, 90, 96, 1)",
          },
        ],
        buttonLabel: "View Detail",
        imageSrc: "/images/xaxa4.png",

        title1: "Tidwell Heights, Texas",
        description0:
          "Discover the perfect harmony of contemporary living and suburban tranquility at Tidwell Heights, Texas. This thoughtfully designed estate features stylish, energy-efficient homes crafted for modern lifestyles. With spacious layouts, smart home technologies, and community-oriented amenities, Tidwell Heights is tailored for families, professionals, and investors seeking long-term growth. Located in a prime area with excellent connectivity, it offers proximity to top-rated schools, shopping hubs, and lush green parks for recreation and relaxation.",
        imageSrc1: "/images/hourglass.png",
        imageSrc2: "/images/hourglass.png",
        imageSrc3: "/images/hourglass.png",
        imageSrc4: "/images/hourglass.png",
        imageSrc5: "/images/hourglass.png",
        imageSrc6: "/images/hourglass.png",
        description1: "24 Months (Construction Duration)",
        description2: "Urban Heights Residences",
        description3: "Downtown City Center",
        description4: "150 Units",
        description5: "1, 2, 3 Bedroom Apartments",
        description6: "February 2027 - March 2029.",
        description7: "Investment",
        description8: "Land",
      },
    ],
  };

  const { id } = useParams();

  const investment = investmentData[id];

  if (!investment) {
    return <div className={style.error}>Investment not found.</div>;
  }

  const investmentDetail = Array.isArray(investment)
    ? investment[0]
    : investment;

  return (
    <>
      <Header />
      <div className={style.home}>
        <div className={style.homeText}>
          <h1 className={style.homeText1}>{investmentDetail.title}</h1>
          <p className={style.homeText2}>{investmentDetail.description}</p>
        </div>
      </div>

      <div>
        {investment.map((investment, index) => (
          <div key={index} className={style.property}>
            <img
              src={investment.imageSrc}
              alt="property"
              className={style.contain}
            />

            <div className={style.propertyDiv}>
              <div className={style.propertyTitle}>
                <h2 className={style.package}>{investment.title1}</h2>
                <p className={style.par}>{investment.description0}</p>

                <div className={style.paras}>
                  {investment.dynamicCard &&
                    investment.dynamicCard.map((card, idx) => (
                      <Card
                        key={idx}
                        imageSrc={card.imageSrc || "/images/card-3.svg"}
                        title={card.title || "Connect with Experts"}
                        bgColor={card.bgColor || "rgba(255, 249, 229, 1)"}
                        textColor={card.textColor || "rgba(86, 69, 11, 1)"}
                        borderColor={card.borderColor || "rgba(86, 69, 11, 1)"}
                      />
                    ))}
                </div>

                <div className={style.period}>
                  <img
                    src={investment.imageSrc1}
                    alt="property"
                    className={style.contai}
                  />
                  <p className={style.pary}>{investment.description1}</p>
                </div>

                <div className={style.period1}>
                  <div className={style.period}>
                    <img
                      src={investment.imageSrc2}
                      alt="property"
                      className={style.contai}
                    />
                    <p className={style.pary}>{investment.description2}</p>
                  </div>

                  <div className={style.period}>
                    <img
                      src={investment.imageSrc3}
                      alt="property"
                      className={style.contai}
                    />
                    <p className={style.pary}>{investment.description3}</p>
                  </div>
                </div>

                <div className={style.period1}>
                  <div className={style.period}>
                    <img
                      src={investment.imageSrc4}
                      alt="property"
                      className={style.contai}
                    />
                    <p className={style.pary}>{investment.description4}</p>
                  </div>

                  <div className={style.period}>
                    <img
                      src={investment.imageSrc5}
                      alt="property"
                      className={style.contai}
                    />
                    <p className={style.pary}>{investment.description5}</p>
                  </div>
                </div>

                <div className={style.period}>
                  <img
                    src={investment.imageSrc6}
                    alt="property"
                    className={style.contai}
                  />
                  <p className={style.pary}>{investment.description6}</p>
                </div>
              </div>
              <div className={style.period2}>
                <button
                  className={style.investDetail}
                  onClick={investment.onButtonClick}
                >
                  {investment.buttonLabel}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>

                <div className={style.period3}>
                  <p className={style.perio}>{investment.description7}</p>
                  <p className={style.perio}>{investment.description8}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={style.home3}>
        <p className={style.cardTitle}>How It Works (3-4 Step Process)</p>
        <div className={style.HH}>
          <div className={style.cardH}>
            <Cardss
              imageSrc="/images/card-2.svg"
              title="Browse Properties"
              bgColor="rgba(26, 35, 126, 0.1)"
              textColor="rgba(26, 35, 126, 1)"
            />

            <Cardss
              imageSrc="/images/card-3.svg"
              title="Connect with Experts"
              bgColor="rgba(255, 249, 229, 1)"
              textColor="rgba(86, 69, 11, 1)"
            />
          </div>

          <div className={style.cardH}>
            <Cardss
              imageSrc="/images/card-4.svg"
              title="Invest Securely"
              bgColor="rgba(254, 246, 207, 1)"
              textColor="rgba(113, 96, 8, 1)"
            />

            <Cardss
              imageSrc="/images/card-5.svg"
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
          Gtext. From first-time InvestmentDetail owners to seasoned
          professionals, our success stories are as diverse as our portfolio.
        </p>

        <div className={style.profiles}>
          <Profile
            paragraph="  As a busy professional, I needed a trustworthy partner to
      diversify my investments. Gtext’s tailored opportunities fit
      perfectly into my portfolio. Their secure and transparent process
      gave me confidence, and the results speak for themselves.
    "
            imageSrc="/images/profile.jpeg"
            name="Michael. K"
            title="Generated 20% growth on land value in two years."
          />

          <Profile
            paragraph="  As a busy professional, I needed a trustworthy partner to
      diversify my investments. Gtext’s tailored opportunities fit
      perfectly into my portfolio. Their secure and transparent process
      gave me confidence, and the results speak for themselves.
    "
            imageSrc="/images/profile.jpeg"
            name="Michael. K"
            title="Generated 20% growth on land value in two years."
          />

          <Profile
            paragraph="  As a busy professional, I needed a trustworthy partner to
      diversify my investments. Gtext’s tailored opportunities fit
      perfectly into my portfolio. Their secure and transparent process
      gave me confidence, and the results speak for themselves.
    "
            imageSrc="/images/profile.jpeg"
            name="Michael. K"
            title="Generated 20% growth on land value in two years."
          />

          <Profile
            paragraph="  As a busy professional, I needed a trustworthy partner to
      diversify my investments. Gtext’s tailored opportunities fit
      perfectly into my portfolio. Their secure and transparent process
      gave me confidence, and the results speak for themselves.
    "
            imageSrc="/images/profile.jpeg"
            name="Michael. K"
            title="Generated 20% growth on land value in two years."
          />

          <Profile
            paragraph="  As a busy professional, I needed a trustworthy partner to
      diversify my investments. Gtext’s tailored opportunities fit
      perfectly into my portfolio. Their secure and transparent process
      gave me confidence, and the results speak for themselves.
    "
            imageSrc="/images/profile.jpeg"
            name="Michael. K"
            title="Generated 20% growth on land value in two years."
          />

          <Profile
            paragraph="  As a busy professional, I needed a trustworthy partner to
      diversify my investments. Gtext’s tailored opportunities fit
      perfectly into my portfolio. Their secure and transparent process
      gave me confidence, and the results speak for themselves.
    "
            imageSrc="/images/profile.jpeg"
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

// InvestmentDetail.propTypes = {
//   imageSrc: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   cards: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       bgColor: PropTypes.string,
//       textColor: PropTypes.string,
//       borderColor: PropTypes.string,
//     })
//   ).isRequired,
//   buttonLabel: PropTypes.string,
//   onButtonClick: PropTypes.func,
//   dynamicCard: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     bgColor: PropTypes.string,
//     textColor: PropTypes.string,
//     borderColor: PropTypes.string,
//   }),
// };

// InvestmentDetail.defaultProps = {
//   buttonLabel: "View Detail",
//   onButtonClick: () => {},
//   dynamicCard: null,
// };

export default InvestmentDetail;


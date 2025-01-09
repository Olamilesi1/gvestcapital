import SideBar from "../components/UserSideBar";
import UserHeader from "../components/UserHeader";
import style from "../styles/userinvestments.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserPropt from "../components/UserPropt";
import Footer from "../components/UserFooter";
function SimpleInterest() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const premiumHousingCards = [
    {
      // title: "Premium Housing Developments",
      // description:
      //   "Transform your portfolio with premium residential properties designed for growth and long-term value.",

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
  ];

  const landAcquisitionCards = [
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
  ];

  const commercialRealEstateCards = [
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
  ];

  const customizableInvestmentCards = [
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
  ];

  const navigate = useNavigate();

  const handleViewDetail = (investmentCategory) => {
    navigate(`/user/properties/${investmentCategory}`);
  };
  return (
    <>
      <div className={style.componentContent}>
        <SideBar />

        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline}>
            <div className={style.compoundInterest}>
              <p className={style.investText}>Simple Interest</p>

              <div className={style.categoryInput}>
                <p className={style.categor}>Filter By Currency </p>
                <form className={style.inputApply}>
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className={style.inpu}
                  />
                  <button className={style.compound}>Apply</button>
                </form>
              </div>
            </div>

            <div className={style.property}>
              <UserPropt
                imageSrc={premiumHousingCards[0].imageSrc}
                imageSrc1={premiumHousingCards[0].imageSrc1}
                imageSrc2={premiumHousingCards[0].imageSrc2}
                imageSrc3={premiumHousingCards[0].imageSrc3}
                imageSrc4={premiumHousingCards[0].imageSrc4}
                imageSrc5={premiumHousingCards[0].imageSrc5}
                imageSrc6={premiumHousingCards[0].imageSrc6}
                title={premiumHousingCards[0].title1}
                description={premiumHousingCards[0].description0}
                cards={premiumHousingCards[0].dynamicCard}
                buttonLabel={premiumHousingCards[0].buttonLabel}
                description1={premiumHousingCards[0].description1}
                description2={premiumHousingCards[0].description2}
                description3={premiumHousingCards[0].description3}
                description4={premiumHousingCards[0].description4}
                description5={premiumHousingCards[0].description5}
                description6={premiumHousingCards[0].description6}
                description7={premiumHousingCards[0].description7}
                description8={premiumHousingCards[0].description8}
                onButtonClick={() => handleViewDetail("premium-housing")}
              />

              <UserPropt
                imageSrc={premiumHousingCards[1].imageSrc}
                imageSrc1={premiumHousingCards[1].imageSrc1}
                imageSrc2={premiumHousingCards[1].imageSrc2}
                imageSrc3={premiumHousingCards[1].imageSrc3}
                imageSrc4={premiumHousingCards[1].imageSrc4}
                imageSrc5={premiumHousingCards[1].imageSrc5}
                imageSrc6={premiumHousingCards[1].imageSrc6}
                title={premiumHousingCards[1].title1}
                description={premiumHousingCards[1].description0}
                cards={premiumHousingCards[1].dynamicCard}
                buttonLabel={premiumHousingCards[1].buttonLabel}
                description1={premiumHousingCards[1].description1}
                description2={premiumHousingCards[1].description2}
                description3={premiumHousingCards[1].description3}
                description4={premiumHousingCards[1].description4}
                description5={premiumHousingCards[1].description5}
                description6={premiumHousingCards[1].description6}
                description7={premiumHousingCards[1].description7}
                description8={premiumHousingCards[1].description8}
                onButtonClick={() => handleViewDetail("premium-housing")}
              />
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default SimpleInterest;

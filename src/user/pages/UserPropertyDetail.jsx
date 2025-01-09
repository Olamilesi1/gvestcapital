import SideBar from "../components/UserSideBar";
import UserHeader from "../components/UserHeader";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/reusables/Card";
import style from "../styles/userdashboard.module.css";

function UserProperties() {
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
      <div className={style.componentContent}>
        <SideBar />

        <div className={style.headerContent}>
          <UserHeader />

          <div className={style.outline}>
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
                              textColor={
                                card.textColor || "rgba(86, 69, 11, 1)"
                              }
                              borderColor={
                                card.borderColor || "rgba(86, 69, 11, 1)"
                              }
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
                          <p className={style.pary}>
                            {investment.description2}
                          </p>
                        </div>

                        <div className={style.period}>
                          <img
                            src={investment.imageSrc3}
                            alt="property"
                            className={style.contai}
                          />
                          <p className={style.pary}>
                            {investment.description3}
                          </p>
                        </div>
                      </div>

                      <div className={style.period1}>
                        <div className={style.period}>
                          <img
                            src={investment.imageSrc4}
                            alt="property"
                            className={style.contai}
                          />
                          <p className={style.pary}>
                            {investment.description4}
                          </p>
                        </div>

                        <div className={style.period}>
                          <img
                            src={investment.imageSrc5}
                            alt="property"
                            className={style.contai}
                          />
                          <p className={style.pary}>
                            {investment.description5}
                          </p>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProperties;

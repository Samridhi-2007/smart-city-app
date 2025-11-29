import React from "react";
import "./CityServices.css";
import { useNavigate } from "react-router-dom";

const CityServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Water Supply",
      description:
        "Check water availability, report leaks, and access municipal water services.",
      onClick: () => navigate("/citizen"),
    },
    {
      title: "Electricity",
      description:
        "Report power outages, pay bills, and access electricity services online.",
      onClick: () => navigate("/citizen"),
    },
    {
      title: "Waste Management",
      description:
        "Track waste collection schedules and report issues in your area.",
      onClick: () => navigate("/citizen"),
    },
    {
      title: "Transportation",
      description:
        "Get real-time public transport updates and plan your journey efficiently.",
      onClick: () => navigate("/citizen"),
    },
  ];

  return (
    <div className="city-services">
      <h2>City Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={index}
            onClick={service.onClick}
            style={{ cursor: "pointer" }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityServices;

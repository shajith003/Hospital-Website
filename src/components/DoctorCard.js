import React from "react";
import "./DoctorCard.css";

const DoctorCard = ({ doctor }) => {
    return (
        <div className="doctor-card">
            <img src={doctor.image} alt={doctor.name} className="doctor-image" />
            <h3>{doctor.name}</h3>
            <p><strong>Specialization:</strong> {doctor.specialization}</p>
            <p><strong>Location:</strong> {doctor.location}</p>
            <button className="appointment-btn">Book Appointment</button>
        </div>
    );
};

export default DoctorCard;

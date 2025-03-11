import React, { useState } from "react";
import DoctorCard from "./DoctorCard";
import "./DoctorList.css";

const doctorsData = [
    {
        name: "Dr. Ayesha Khan",
        specialization: "Cardiologist",
        location: "Apollo Hyderabad",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Dr. Ramesh Sharma",
        specialization: "Orthopedic Surgeon",
        location: "Apollo Bangalore",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Dr. Priya Kapoor",
        specialization: "Dermatologist",
        location: "Apollo Chennai",
        image: "https://via.placeholder.com/150"
    }
];

const DoctorList = () => {
    const [search, setSearch] = useState("");

    const filteredDoctors = doctorsData.filter(doctor =>
        doctor.name.toLowerCase().includes(search.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(search.toLowerCase()) ||
        doctor.location.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="doctor-list-container">
            <input
                type="text"
                placeholder="Search by name, specialty, or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-bar"
            />
            <div className="doctor-grid">
                {filteredDoctors.map((doctor, index) => (
                    <DoctorCard key={index} doctor={doctor} />
                ))}
            </div>
        </div>
    );
};

export default DoctorList;

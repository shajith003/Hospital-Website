import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./bookAppointment.css";

const BookAppointment = () => {
    const navigate = useNavigate();
    const [doctor, setDoctor] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [user, setUser] = useState("");  // User's name state
    const [description, setDescription] = useState("");  // Description for the appointment

    const handleSubmit = (e) => {
        e.preventDefault();

        // Store appointment data in localStorage
        const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
        appointments.push({ user, doctor, date, time, description });
        localStorage.setItem("appointments", JSON.stringify(appointments));

        alert("Appointment booked successfully!");

        // Clear form after booking
        setUser("");
        setDoctor("");
        setDate("");
        setTime("");
        setDescription("");
    };

    return (
        <div className="book-appointment-container">
            <div className="appointment-header">
                <h2>Book Your Appointment</h2>
            </div>

            <div className="appointment-form-container">
                <form onSubmit={handleSubmit} className="appointment-form">
                    <div className="form-group">
                        <label>User's Name</label>
                        <input
                            type="text"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            placeholder="Enter user's name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Doctor's Name</label>
                        <input
                            type="text"
                            value={doctor}
                            onChange={(e) => setDoctor(e.target.value)}
                            placeholder="Enter doctor's name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Time</label>
                        <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter appointment description"
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn">Book Appointment</button>
                </form>
            </div>

            <div className="back-to-dashboard">
                <button
                    className="back-btn"
                    onClick={() => navigate("/dashboard")}
                >
                    Back to Dashboard
                </button>
            </div>
        </div>
    );
};

export default BookAppointment;

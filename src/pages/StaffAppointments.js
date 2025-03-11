import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./StaffAppointments.css";

const StaffAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();

    // Fetch appointments from local storage
    useEffect(() => {
        const allAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
        setAppointments(allAppointments);
    }, []);

    // Function to remove an appointment
    const removeAppointment = (index) => {
        const updatedAppointments = [...appointments];
        updatedAppointments.splice(index, 1);
        setAppointments(updatedAppointments);
        localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    };

    return (
        <div className="appointments-wrapper">
            <h1>Patient Appointments</h1>

            {appointments.length === 0 ? (
                <p>No appointments available.</p>
            ) : (
                <table className="appointments-table">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Doctor</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Details</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment, index) => (
                            <tr key={index}>
                                <td>{appointment.user}</td>
                                <td>{appointment.doctor}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.time}</td>
                                <td>{appointment.description}</td>
                                <td>
                                    <button
                                        onClick={() => removeAppointment(index)}
                                        className="remove-btn"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Back to Dashboard Button */}
            <button className="btn btn-back" onClick={() => navigate("/staff-dashboard")}>
                Back to Dashboard
            </button>
        </div>
    );
};

export default StaffAppointments;

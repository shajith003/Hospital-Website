import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MyAppointments.css"; // Import the external CSS for styling

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Get the logged-in user's data from local storage
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

        // If no user is logged in, redirect to login page
        if (!loggedInUser) {
            navigate("/login");
        }

        // Load all appointments from local storage
        const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];

        // Filter appointments based on the logged-in user's name or unique identifier (e.g. user.name)
        const userAppointments = storedAppointments.filter(
            (appointment) => appointment.user === loggedInUser.name // You can change 'user' to whatever field you use for identification
        );

        setAppointments(userAppointments); // Set the filtered appointments
    }, [navigate]);

    // Function to remove an appointment
    const removeAppointment = (index) => {
        const updatedAppointments = [...appointments];
        updatedAppointments.splice(index, 1); // Remove the appointment at the given index
        setAppointments(updatedAppointments);
        localStorage.setItem("appointments", JSON.stringify(updatedAppointments)); // Update localStorage with the updated list
    };

    return (
        <div className="appointments-container">
            <div className="appointments-box">
                <h2 className="appointments-title">My Appointments</h2>

                {appointments.length === 0 ? (
                    <p className="no-appointments">You don't have any appointments yet.</p>
                ) : (
                    <div className="appointments-table-container">
                        <table className="appointments-table">
                            <thead>
                                <tr>
                                    <th>Doctor</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Details</th>
                                    <th>Action</th> {/* Remove button column */}
                                </tr>
                            </thead>
                            <tbody>
                                {appointments.map((appointment, index) => (
                                    <tr key={index}>
                                        <td>{appointment.doctor}</td>
                                        <td>{appointment.date}</td>
                                        <td>{appointment.time}</td>
                                        <td>{appointment.details}</td>
                                        <td>
                                            <button
                                                onClick={() => removeAppointment(index)}
                                                className="remove-btn"
                                            >
                                                Remove
                                            </button>
                                        </td> {/* Remove button */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Back to Dashboard Button */}
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

export default MyAppointments;

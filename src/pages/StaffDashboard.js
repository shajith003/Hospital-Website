import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StaffDashboard.css";

const StaffDashboard = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true); // State to handle loading during check

    // Check if the staff is logged in
    useEffect(() => {
        const staff = JSON.parse(localStorage.getItem("staffLoggedIn"));
        if (!staff) {
            navigate("/staff-login");  // Redirect to login if not logged in
        } else {
            setIsLoading(false); // Update loading state when login check is done
        }
    }, [navigate]);

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("staffLoggedIn");
        navigate("/staff-login"); // Redirect to login page after logout
    };

    if (isLoading) {
        return <div>Loading...</div>; // Optional loading state
    }

    return (
        <div className="staff-dashboard-wrapper">
            <h1 className="staff-welcome">Welcome, Staff!</h1>

            <div className="dashboard-buttons">
                {/* Navigate to StaffAppointments page */}
                <button className="btn btn-appointments" onClick={() => navigate("/staff-appointments")}>
                    Patient Appointments
                </button>

                {/* Navigate to AddReport page */}
                <button className="btn btn-add-report" onClick={() => navigate("/add-report")}>
                    Add Report
                </button>

                {/* Navigate to ViewReports page */}
                <button className="btn btn-view-reports" onClick={() => navigate("/view-reports")}>
                    View Reports
                </button>

                {/* Logout Button */}
                <button className="btn btn-logout" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default StaffDashboard;

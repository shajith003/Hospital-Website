import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./reports.css";

const Reports = () => {
    const navigate = useNavigate();
    const [reports, setReports] = useState([]);
    const [selectedReport, setSelectedReport] = useState(null);

    useEffect(() => {
        const storedReports = JSON.parse(localStorage.getItem("reports")) || [];
        console.log("Loaded Reports:", storedReports); // Debugging
        setReports(storedReports);
    }, []);

    return (
        <div className="reports-wrapper">
            <h1 className="reports-title">Your Reports</h1>

            {reports.length === 0 ? (
                <p className="no-reports">No reports available.</p>
            ) : (
                <div className="reports-container">
                    {reports.map((report, index) => (
                        <button 
                            key={index} 
                            className="report-button"
                            onClick={() => setSelectedReport(report)}
                        >
                            <img
                                src={report}
                                alt={`Report ${index + 1}`}
                                className="report-thumbnail"
                            />
                        </button>
                    ))}
                </div>
            )}

            <button className="btn btn-back" onClick={() => navigate("/dashboard")}>
                Back to Dashboard
            </button>

            {/* Full-screen Report Modal */}
            {selectedReport && (
                <div className="report-modal" onClick={() => setSelectedReport(null)}>
                    <img src={selectedReport} alt="Full Report" className="full-report-image" />
                </div>
            )}
        </div>
    );
};

export default Reports;

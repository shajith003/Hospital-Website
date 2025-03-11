// src/pages/ViewReports.js

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewReports = () => {
  const [patientReports, setPatientReports] = useState([]);
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    // Fetch all reports from localStorage
    const reports = JSON.parse(localStorage.getItem("reports")) || [];
    
    // Filter reports for the logged-in patient
    const userReports = reports.filter(report => report.patientName === loggedInUser.name);
    setPatientReports(userReports);
  }, []);

  // If no reports found, display a message
  if (patientReports.length === 0) {
    return <p>No reports available for {loggedInUser.name}.</p>;
  }

  return (
    <div className="view-reports-container">
      <h1>{loggedInUser.name}'s Reports</h1>
      <div className="report-list">
        {patientReports.map((report, index) => (
          <div key={index} className="report-item">
            <h3>Problem: {report.problemName}</h3>
            <p><strong>Cause:</strong> {report.cause}</p>
            <p><strong>Possible Fix:</strong> {report.possibleFix}</p>
            <p><strong>Next Appointment:</strong> {report.nextAppointment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewReports;

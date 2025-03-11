import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './ViewReports.css'; // Importing the updated CSS

const ViewReports = () => {
  const [reports, setReports] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all reports (no user filter for staff)
    const allReports = JSON.parse(localStorage.getItem("reports")) || [];

    if (allReports.length > 0) {
      setReports(allReports); // Show all reports for staff
    } else {
      setError("No reports available.");
    }
  }, []);

  return (
    <div className="view-reports-wrapper">
      <h2 className="reports-heading">All Patient Reports</h2>
      {error && <p className="error-message">{error}</p>}
      {reports.length > 0 ? (
        <div className="reports-table-container">
          <table className="reports-table">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Problem</th>
                <th>Cause</th>
                <th>Possible Fix</th>
                <th>Next Appointment</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr key={index}>
                  <td>{report.patientName}</td>
                  <td>{report.problemName}</td>
                  <td>{report.cause}</td>
                  <td>{report.possibleFix}</td>
                  <td>{report.nextAppointment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No reports available.</p>
      )}

      <button className="btn-back" onClick={() => navigate("/staff-dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
};

export default ViewReports;

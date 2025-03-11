import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./preports.css"; // Importing Preports CSS

const Preports = () => {
  const [reports, setReports] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!storedUser) {
      setError("You must be logged in to view your reports.");
      return;
    }

    const allReports = JSON.parse(localStorage.getItem("reports")) || [];
    const userReports = allReports.filter((report) => report.patientName === storedUser.name);

    if (userReports.length > 0) {
      setReports(userReports);
    } else {
      setError("No reports found for this user.");
    }
  }, []);

  return (
    <div className="preports-wrapper">
      <h2>Your Reports</h2>
      {error && <p>{error}</p>}
      {reports.length > 0 ? (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Problem</th>
                <th>Cause</th>
                <th>Possible Fix</th>
                <th>Next Appointment</th>
                <th>Added by Staff</th>
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
                  <td>{report.staffName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No reports available.</p>
      )}
    </div>
  );
};

export default Preports;

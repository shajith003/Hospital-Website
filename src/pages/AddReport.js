import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AddReport.css";

const AddReport = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const [newReport, setNewReport] = useState({
    patientName: "",
    problemName: "",
    cause: "",
    possibleFix: "",
    nextAppointment: "",
  });

  // Check if staff is logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("staffLoggedIn");
    if (!storedUser) {
      alert("You must be logged in to access this page.");
      navigate("/login");
      return;
    }

    const loggedInUser = JSON.parse(storedUser);
    if (!loggedInUser.role || loggedInUser.role !== "staff") {
      alert("Only staff members can add reports.");
      navigate("/dashboard");
      return;
    }

    setUser(loggedInUser);
  }, [navigate]);

  // Handle input change for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReport((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user || user.role !== "staff") {
      setErrorMessage("Only staff members can add reports.");
      return;
    }

    // Ensure all fields are filled
    if (
      !newReport.patientName ||
      !newReport.problemName ||
      !newReport.cause ||
      !newReport.possibleFix ||
      !newReport.nextAppointment
    ) {
      setErrorMessage("All fields are required.");
      return;
    }

    // Ensure next appointment is a valid date
    if (isNaN(Date.parse(newReport.nextAppointment))) {
      setErrorMessage("Invalid date format for Next Appointment.");
      return;
    }

    // Create a new report with patientName as "username"
    const reportWithUser = {
      ...newReport,
      username: newReport.patientName, // Ensure reports are linked to patients
      staffName: user.name, // Store staff who added the report
    };

    const allReports = JSON.parse(localStorage.getItem("reports")) || [];
    allReports.push(reportWithUser);

    localStorage.setItem("reports", JSON.stringify(allReports));
    setSuccessMessage("Report added successfully!");
    setErrorMessage("");

    setNewReport({
      patientName: "",
      problemName: "",
      cause: "",
      possibleFix: "",
      nextAppointment: "",
    });

    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="report-wrapper">
      <h1>Add Report</h1>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <form className="report-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Patient Name</label>
          <input
            type="text"
            name="patientName"
            value={newReport.patientName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Problem Name</label>
          <input
            type="text"
            name="problemName"
            value={newReport.problemName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Cause</label>
          <input
            type="text"
            name="cause"
            value={newReport.cause}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Possible Fix</label>
          <input
            type="text"
            name="possibleFix"
            value={newReport.possibleFix}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Next Appointment</label>
          <input
            type="date"
            name="nextAppointment"
            value={newReport.nextAppointment}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="btn-add-report">
          Add Report
        </button>
      </form>

      <button className="btn-back" onClick={() => navigate("/staff-dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
};

export default AddReport;

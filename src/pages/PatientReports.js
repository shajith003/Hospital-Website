import React, { useEffect, useState } from "react";

const PatientReports = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const storedReports = JSON.parse(localStorage.getItem("reports")) || [];
        setReports(storedReports);
    }, []);

    return (
        <div className="view-reports-wrapper">
            {/* Spacer Div to push content down */}
            <div style={{ height: "100px" }}></div>

            <h1>Patient Reports</h1>
            <table className="reports-table">
                <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Problem Name</th>
                        <th>Cause</th>
                        <th>Possible Fix</th>
                        <th>Next Appointment</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.length === 0 ? (
                        <tr>
                            <td colSpan="5">No reports available.</td>
                        </tr>
                    ) : (
                        reports.map((report, index) => (
                            <tr key={index}>
                                <td>{report.patientName}</td>
                                <td>{report.problemName}</td>
                                <td>{report.cause}</td>
                                <td>{report.possibleFix}</td>
                                <td>{report.nextAppointment}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            <button className="btn-back" onClick={() => window.history.back()}>Back</button>
        </div>
    );
};

export default PatientReports;

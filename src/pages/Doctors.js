import React, { useState } from "react";
import "./Doctors.css";

const doctorsData = [
    { name: "Dr. Ayesha Khan", specialization: "Cardiologist", location: "Hyderabad", image: "https://imgs.search.brave.com/yywpmDr_FXw8yk9jrmF_-AW6fJ2u0F-K96zHjyEh5bo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/ZW1hbGUtZG9jdG9y/LWhvc3BpdGFsXzIz/LTIxNDg4Mjc3NjAu/anBnP3NlbXQ9YWlz/X2h5YnJpZA" },
    { name: "Dr. Ramesh Sharma", specialization: "Orthopedic Surgeon", location: "Bangalore", image: "https://imgs.search.brave.com/Asv4zXzTApAGjSLYQjTlyX-BiW0N-Q_TXGLHK_Tco7U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9p/LXRyeWluZy1iZS1i/ZXN0LWRvY3Rvcl8z/MjkxODEtMjE4OC5q/cGc_c2VtdD1haXNf/aHlicmlk" },
    { name: "Dr. Priya Kapoor", specialization: "Dermatologist", location: "Chennai", image: "https://imgs.search.brave.com/P6CR0XeRr-Qz7remnJV0bMgSkjoT_NMT7gseK0B-2ew/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJhLzEy/LzVjLzJhMTI1Yzdh/YTBkNDc1MzhiODU3/MjkxZmEwOTAxMjg2/LmpwZw" },
    { name: "Dr. Arjun Mehta", specialization: "Neurologist", location: "Mumbai", image: "https://imgs.search.brave.com/Y-kYo1OFGPi-jJR4ZgDDjYhYnXEyki8szV8ieqxYDao/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTk0/MDMwMjY2L3Bob3Rv/L3RhbGtpbmctdG8t/YS1kb2N0b3ItZHVy/aW5nLWEtY2hlY2st/dXAuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWVOTENRTXNu/YWtaUlExeXVzaHhj/bEEyMTJ1MWh4LTlr/cUxMUDVobktKTHM9" },
    { name: "Dr. Sneha Patil", specialization: "Pediatrician", location: "Delhi", image: "https://imgs.search.brave.com/zbwb8rv3xSGcfFZARPYlRmcOsLQCPSgcThrSvd_k3Vo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/MTU5NzgxNi9waG90/by9kb2N0b3ItbWVl/dGluZy13aXRoLWEt/cGF0aWVudC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Ykph/VjVoSlUzNDZ2S3ZB/NW1XTFktQm01TE55/cDE0QWJzaXg3QWlf/XzF1dz0" },
    { name: "Dr. Karthik Iyer", specialization: "General Physician", location: "Pune", image: "https://imgs.search.brave.com/BzLFO8VTeDzUhj7Dmv6ON5BH0nHOgNrXPS7LFqpZuUs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzM3LzQ0LzAz/LzM2MF9GXzEzNzQ0/MDM3OF81bU1CTnU0/WHl4YWoyNXpEOEFn/OE5RV3NPa1lLRGVx/OC5qcGc" },
    { name: "Dr. Lavanya Reddy", specialization: "Oncologist", location: "Hyderabad", image: "https://imgs.search.brave.com/byGt1Y_RpNLlM-aGKhxFgOzs8ehXgKk5dBLg7T-38Mc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9oYXBweS1mZW1h/bGUtZG9jdG9yLXdp/dGgtY3Jvc3NlZC1h/cm1zLWhvc3BpdGFs/XzM4MDE2NC0yOTQ1/MzIuanBnP3NlbXQ9/YWlzX2h5YnJpZA" },
    { name: "Dr. Manish Verma", specialization: "ENT Specialist", location: "Bangalore", image: "https://imgs.search.brave.com/htYJSFo5AxLVWKqMSNvBulH4eQ682-d_Pbq58pjKdI8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by93b21hbi1kb2N0/b3Itd2l0aC1zdGV0/aG9zY29wZS1tZWRp/Y2FsLWdvd24tZG9j/dW1lbnRzLWhpZ2gt/cXVhbGl0eS1waG90/b18xNjMzMDUtMjQ5/NTA5LmpwZz9zZW10/PWFpc19oeWJyaWQ" },
    { name: "Dr. Ritu Malhotra", specialization: "Endocrinologist", location: "Kolkata", image: "https://imgs.search.brave.com/I4mytkvilyQLy5o1Pl_Z8ULcyO_W-0eK3VoRY-ix5B8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA5/Mzc0ODEzL3Bob3Rv/L3BvcnRyYWl0LW9m/LWNoZWVyZnVsLWZl/bWFsZS1kb2N0b3Iu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXlZYlFRc1Bfd1dr/cFdmUlNIN1F2czRp/RWp3VEJFQjluaGZV/WGdMNHV2SUk9" },
    { name: "Dr. Vishal Nair", specialization: "Psychiatrist", location: "Chandigarh", image: "https://imgs.search.brave.com/eN-tOjp7VToxQpDAZe1m9nkROUlCT4nN1N2Yvq3JmwE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTMx/ODY4NjgvcGhvdG8v/ZG9jdG9yLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1rQmY0/aVh4T3ZZVW5Tb0p1/dUF6aXpHR0xveGxK/VzZPSWZWU28xc1pp/UFFRPQ" },
    { name: "Dr. Meera Sinha", specialization: "Gynecologist", location: "Jaipur", image: "https://imgs.search.brave.com/-WAL0mmwzCX40ZP5lbt99NTBXtmCp20GjINaUoVWwuM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/MjAxNTIxNC9waG90/by9wb3J0cmFpdC1m/ZW1hbGUtZG9jdG9y/LXN0b2NrLXBob3Rv/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1ucjRYYVduUlBR/bldxd2h6YWhhalpo/c2tJREcxeUs5RG1J/dGVWNWdwVU9JPQ" }
];

const Doctors = () => {
    const [search, setSearch] = useState("");

    const filteredDoctors = doctorsData.filter(doctor =>
        doctor.name.toLowerCase().includes(search.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(search.toLowerCase()) ||
        doctor.location.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="doctor-list-container">
            <h2 className="title">Meet Our Expert Doctors</h2>
            <input
                type="text"
                placeholder="Search by name, specialty, or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-bar"
            />
            <div className="doctor-grid">
                {filteredDoctors.map((doctor, index) => (
                    <div className="doctor-card" key={index}>
                        <img src={doctor.image} alt={doctor.name} className="doctor-image" />
                        <div className="doctor-info">
                            <h3>{doctor.name}</h3>
                            <p>{doctor.specialization}</p>
                            <p>{doctor.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Doctors;

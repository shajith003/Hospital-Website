const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = () => {
        const users = JSON.parse(localStorage.getItem("patients")) || [];
        if (users.find(user => user.email === email)) {
            alert("Email already registered!");
            return;
        }
        users.push({ name, email, password });
        localStorage.setItem("patients", JSON.stringify(users));
        alert("Registration successful! Please login.");
        navigate("/login");
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2 className="auth-title">Create Account</h2>
                <div className="auth-social-icons">
                    <span className="icon">🔵</span>
                    <span className="icon">⚪</span>
                    <span className="icon">⚫</span>
                </div>
                <p className="auth-subtitle">or use your email for registration</p>
                <input type="text" className="auth-input" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <input type="email" className="auth-input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" className="auth-input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button className="auth-button" onClick={handleRegister}>SIGN UP</button>
                <p className="auth-footer">Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;

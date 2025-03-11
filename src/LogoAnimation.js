import React from "react";
import { motion } from "framer-motion";
import logo from "./assets/logo.png"; // Update with your image path

const LogoAnimation = () => {
    return (
        <div style={styles.container}>
            {/* Vertical Line */}
            <motion.div 
                style={styles.line} 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.5 }} 
            />

            {/* Heart Icon */}
            <motion.img 
                src={logo} 
                alt="Logo"
                style={styles.icon}
                initial={{ x: 0 }}
                animate={{ x: -50 }} // Moves to the left
                transition={{ duration: 1, ease: "easeOut" }}
            />

            {/* SERENE Text */}
            <motion.h1 
                style={styles.text}
                initial={{ x: 0 }}
                animate={{ x: 50 }} // Moves to the right
                transition={{ duration: 1, ease: "easeOut" }}
            >
                SERENE
            </motion.h1>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: "#222",
        height: "100vh",
        justifyContent: "center"
    },
    line: {
        height: "100px",
        width: "2px",
        background: "white"
    },
    icon: {
        width: "80px", // Adjust size if needed
    },
    text: {
        fontSize: "3rem",
        fontWeight: "bold",
        color: "white",
        marginLeft: "20px"
    }
};

export default LogoAnimation;

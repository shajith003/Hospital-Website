import React, { useEffect } from "react";
import { motion } from "framer-motion";
import logo from "./assets/logo.png";
import "./LoadingScreen.css";

const LoadingScreen = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="loading-container">
            <div className="logo-animation">
                <motion.img 
                    src={logo} 
                    alt="Logo"
                    className="logo-icon"
                    initial={{ x: 0, opacity: 1 }}
                    animate={{ x: -80, opacity: 1 }}  /* Moved more left */
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />

                <motion.div 
                    className="logo-line"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 120 }}  /* Increased line height */
                    transition={{ duration: 1, delay: 0.5 }}
                />

                <motion.h1 
                    className="logo-text"
                    initial={{ x: 0, opacity: 1 }}
                    animate={{ x: 80, opacity: 1 }}  /* Moved more right */
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    SereneCare Clinics
                </motion.h1>
            </div>
        </div>
    );
};

export default LoadingScreen;

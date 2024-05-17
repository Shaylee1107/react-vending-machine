import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import './photos/photos.css';

const Snicker = () => {
    const snickerPhoto = require('./photos/snicker.png');
    return (
        <>
            <div className="snack-photo-div">
                <motion.img 
                    src={snickerPhoto} 
                    alt="coke" 
                    className="snack-photo snicker-photo"
                    animate={{ rotate: 20 }}
                />
                <h3>Oh no! Someone took a bite...</h3>
            </div>
            <nav>
                <Link to="/" className="venging-machine-link">Vending Machine</Link>
            </nav>
        </>
    )
}

export default Snicker; 
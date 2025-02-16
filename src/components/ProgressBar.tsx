import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import '../styles/ProgressBar.css';

const ProgressBar: React.FC = () => {
    const slidesContainerRef = useRef<HTMLElement | null>(null);
    const progressBarRef = useRef<HTMLElement | null>(null);
    const summaryElementRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        slidesContainerRef.current = document.querySelector(".slides-wrapper") as HTMLElement;
        progressBarRef.current = document.querySelector(".progress__bar") as HTMLElement;
        summaryElementRef.current = document.querySelector(".slide--summary") as HTMLElement;

        const handleScroll = () => {
            if (!slidesContainerRef.current || !progressBarRef.current || !summaryElementRef.current) {
                return;
            }

            const screenY = window.scrollY; // Current scroll position
            const summaryY = summaryElementRef.current.offsetTop; // Position of the summary element

            // Calculate the percentage of the page that has been scrolled
            let progressPercentage: number = (screenY / (summaryY - window.innerHeight)) * 100;

            // Clamp the value between 0 and 100
            progressPercentage = Math.min(Math.max(progressPercentage, 0), 100);

            // Update the progress bar
            progressBarRef.current.style.backgroundImage = `linear-gradient(to right, var(--progress-bar-color) ${progressPercentage}%, var(--primary-color-font) ${progressPercentage}%)`;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.div className="progress__bar__container"
            initial={{ y: -750, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -750, opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.3 }}
        >
            <div className="progress__bar"></div>
        </motion.div>
    );
};

export default ProgressBar;

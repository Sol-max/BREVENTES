import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpLong } from '@fortawesome/free-solid-svg-icons'; 

const ArrowToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to detect scroll position
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Function to scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div>
            {isVisible && 
                <a className="totop" onClick={scrollToTop} href="#page-top">
                    <FontAwesomeIcon icon={faUpLong} />
                </a>
            }
        </div>
    );
    
};
export default ArrowToTop;

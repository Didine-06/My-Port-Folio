import React, { useState, useEffect } from 'react';
import './carousel.css';

function ImageCarousel({ images, title }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length > 1) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => 
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
            }, 3000); // Change image every 3 seconds

            return () => clearInterval(interval);
        }
    }, [images.length]);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    if (images.length === 1) {
        return <img style={{width: '100%', height: '180px', objectFit: 'contain'}} src={images[0]} alt={title} />;
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {images.map((image, index) => (
                    <div 
                        key={index} 
                        className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            opacity: index === currentIndex ? 1 : 0,
                            transition: 'opacity 0.5s ease-in-out'
                        }}
                    >
                        <img 
                            style={{
                                width: '100%', 
                                height: '180px', 
                                objectFit: 'contain',
                                display: 'block'
                            }} 
                            src={image} 
                            alt={`${title} ${index + 1}`} 
                        />
                    </div>
                ))}
                
                {/* Navigation arrows */}
                <button className="carousel-btn prev" onClick={prevImage}>
                    &#8249;
                </button>
                <button className="carousel-btn next" onClick={nextImage}>
                    &#8250;
                </button>
            </div>
            
            {/* Dots indicator */}
            <div className="carousel-dots">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ImageCarousel;

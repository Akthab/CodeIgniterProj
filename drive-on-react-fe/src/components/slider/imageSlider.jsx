import { useState } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { current } from '../../../node_modules/@reduxjs/toolkit/dist/index';

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderStyle = {
        height: '100%',
        position: 'relative'
    };

    const slideStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`
    };

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '9px',
        fontSize: '45px',
        // color: '#fff',
        zIndex: 1,
        cursor: 'pointer'
    };

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '9px',
        fontSize: '45px',
        // color: '#fff',
        zIndex: 1,
        cursor: 'pointer'
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    return (
        <div style={sliderStyle}>
            <button style={leftArrowStyles} onClick={goToPrevious}>
                <RiArrowLeftSLine />
            </button>
            <button style={rightArrowStyles} onClick={goToNext}>
                <RiArrowRightSLine />
            </button>
            <div style={slideStyle}></div>
        </div>
    );
};

export default ImageSlider;

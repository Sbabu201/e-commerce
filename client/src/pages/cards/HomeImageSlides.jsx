import React, { useEffect, useState } from "react";
import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import img1 from "../../assets/login4.jpg"
import img2 from "../../assets/login.jpg"
import img3 from "../../assets/logo1.png"
const HomeImageSlides = () => {
    const [slide, setSlide] = useState(0);
    const arr = [img1, img2, img3]
    const nextSlide = () => {
        setSlide(slide === arr.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? arr.length - 1 : slide - 1);
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(intervalId);
    },
        [slide]);
    return (
        <div className="carousel">
            <ArrowCircleLeftSharpIcon onClick={prevSlide} className="arrow arrow-left" />
            {arr.map((item, idx) => {
                return (
                    <img
                        src={item}
                        key={idx}
                        className={slide === idx ? "slide scale-effect" : "slide slide-hidden"}
                    />
                );
            })}
            <ArrowCircleRightSharpIcon
                onClick={nextSlide}
                className="arrow arrow-right"
            />
            <span className="indicators">
                {arr.map((_, idx) => {
                    return (
                        <button
                            key={idx}
                            className={
                                slide === idx ? "indicator" : "indicator indicator-inactive"
                            }
                            onClick={() => setSlide(idx)}
                        ></button>
                    );
                })}
            </span>
        </div>
    );
};
export default HomeImageSlides;

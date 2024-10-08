"use client";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";

import { WorkSliderStyles } from "@/app/CustomProps";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }:WorkSliderStyles) => {
    const swiper = useSwiper();

  return (
    <div className={containerStyles}>
        <button 
            className={btnStyles}
            onClick={() => swiper.slidePrev()}
        >
            <PiCaretLeftBold className={iconStyles} />
        </button>
        <button 
            className={btnStyles}
            onClick={() => swiper.slideNext()}
        >
            <PiCaretRightBold className={iconStyles} />
        </button>
    </div>
  );
};

export default WorkSliderBtns;
import React from 'react';
import { Swiper as SwiperClass } from 'swiper';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

interface WorkSliderBtnsProps {
  containerStyles?: string;
  btnStyles?: string;
  swiperInstance?: SwiperClass | null;
}

const WorkSliderBtns: React.FC<WorkSliderBtnsProps> = ({
  containerStyles = '',
  btnStyles = '',
  swiperInstance = null,
}) => {
  const handlePrev = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const handleNext = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  return (
    <div className={`${containerStyles}`}>
      <button
        className={`${btnStyles}`}
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        <BsChevronLeft />
      </button>
      <button
        className={`${btnStyles}`}
        onClick={handleNext}
        aria-label="Next Slide"
      >
        <BsChevronRight />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
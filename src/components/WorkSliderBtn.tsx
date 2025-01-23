import { useSwiper } from 'swiper/react'
import { PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi'

interface WorkSliderProps {
  containerStyles?: string;
  btnStyles?: string;
  iconStyles?: string;
}

const WorkSliderBtn: React.FC<WorkSliderProps> = ({ containerStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button
        type='button'
        aria-label="Previous slide"
        className={btnStyles}
        onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button
        className={btnStyles}
        aria-label="Next slide"
        type='button'
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  )
}

export default WorkSliderBtn;
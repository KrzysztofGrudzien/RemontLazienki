import sliderStyles from './Slider.module.scss';
import imageBathroom from '../../assets/images/lazienka.jpg';
import IconArrowLeft from '../../assets/icons/icon-arrow-left-dark.svg';
import IconArrowRight from '../../assets/icons/icon-arrow-right-dark.svg';

const Slider = () => {
    return (
        <div className={sliderStyles.slider}>
            <a className={sliderStyles.sliderNavPrev}>
                <img src={IconArrowLeft} alt='arrow left' />
            </a>
            <img
                src={imageBathroom}
                alt='bathroom project'
                className={sliderStyles.sliderImg}
            />
            <a className={sliderStyles.sliderNavNext}>
                <img src={IconArrowRight} alt='arrow right' />
            </a>
        </div>
    );
};

export default Slider;

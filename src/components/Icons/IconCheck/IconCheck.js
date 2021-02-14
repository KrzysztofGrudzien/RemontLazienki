import IconCheckImg from '../../../assets/icons/icon-check.svg';
import iconCheckStyles from './IconCheck.module.scss';

const IconCheck = () => {
    return (
        <img
            src={IconCheckImg}
            alt='check icon'
            className={iconCheckStyles.iconCheck}
        />
    );
};

export default IconCheck;

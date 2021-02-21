import iconTemplateStyles from './TemplateNavigationLink.module.scss';
import IconCornerLeftBottom from '../../../assets/icons/icon-corner-left-bottom.svg';
import IconCornerLeftTop from '../../../assets/icons/icon-corner-left-top.svg';
import IconCornerRightBottom from '../../../assets/icons/icon-corner-right-bottom.svg';
import IconCornerRightTop from '../../../assets/icons/icon-corner-right-top.svg';

const TemplateNavigationLink = ({ children }) => {
    return (
        <div className={iconTemplateStyles.template}>
            <img
                src={IconCornerLeftTop}
                alt='icon corner left bottom'
                className={iconTemplateStyles.templateCornerLeftTop}
            />
            <img
                src={IconCornerLeftBottom}
                alt='icon corner left bottom'
                className={iconTemplateStyles.templateCornerLeftBottom}
            />
            {children}
            <img
                src={IconCornerRightBottom}
                alt='icon corner left bottom'
                className={iconTemplateStyles.templateCornerRightBottom}
            />
            <img
                src={IconCornerRightTop}
                alt='icon corner left bottom'
                className={iconTemplateStyles.templateCornerRightTop}
            />
        </div>
    );
};

export default TemplateNavigationLink;

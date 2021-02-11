import templateDescriptionStyles from './TemplateDescription.module.scss';
import IconCross from '../../../assets/icons/icon-cross-small.svg';

const TemplateDescription = ({ children }) => {
    return (
        <section className={templateDescriptionStyles.description}>
            <div className={templateDescriptionStyles.leftTopCorner}>
                <img src={IconCross} alt='small cross' />
            </div>
            <div className={templateDescriptionStyles.leftBottomCorner}>
                <img src={IconCross} alt='small cross' />
            </div>
            {children}
            <div className={templateDescriptionStyles.rightTopCorner}>
                <img src={IconCross} alt='small cross' />
            </div>
            <div className={templateDescriptionStyles.rightBottomCorner}>
                <img src={IconCross} alt='small cross' />
            </div>
        </section>
    );
};

export default TemplateDescription;

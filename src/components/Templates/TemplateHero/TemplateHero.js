import templateHeroStyles from './TemplateHero.module.scss';
import IconCross from '../../../assets/icons/icon-cross-small.svg';

const TemplateHero = ({ children }) => {
    return (
        <section className={templateHeroStyles.hero}>
            <div className={templateHeroStyles.leftTopCorner}>
                <img src={IconCross} alt='small cross' />
            </div>
            <div className={templateHeroStyles.leftBottomCorner}>
                <img src={IconCross} alt='small cross' />
            </div>
            {children}
            <div className={templateHeroStyles.rightTopCorner}>
                <img src={IconCross} alt='small cross' />
            </div>
            <div className={templateHeroStyles.rightBottomCorner}>
                <img src={IconCross} alt='small cross' />
            </div>
        </section>
    );
};

export default TemplateHero;

import galleryStyles from './Gallery.module.scss';
import LinkButton from '../../components/Buttons/LinkButton/LinkButton';
import TemplateHero from '../../components/Templates/TemplateHero/TemplateHero';

const PageGallery = () => {
    return (
        <>
            {' '}
            <TemplateHero>
                <article className={galleryStyles.articleGallery}>
                    <h2>
                        “Ponad 10 letnie doświadczenie na rynku Polskim oraz
                        zagranicznym”
                    </h2>
                </article>
                <div className={galleryStyles.articleGalleryWrapper}>
                    <p
                        className={`${galleryStyles.articleGalleryDescription} multi-col`}
                    >
                        Liczne grono zadowolonych klientów to nasza najlepsza
                        rekomendacja. Dokonujemy pomiarów i wycen gratis.
                        Przedstawiamy portfolio na pierwszym spotkaniu żeby nie
                        być gołosłownym. Jesteśmy fachowcami.
                        <br />
                    </p>
                    <div className={galleryStyles.articleGalleryStrongText}>
                        <strong>Zapraszamy do współpracy!</strong>
                    </div>
                    <LinkButton>kontakt z nami</LinkButton>
                </div>
            </TemplateHero>
            <div className={galleryStyles.randomImage}></div>
            <div className={galleryStyles.sliderContainer}></div>
            <h2 className={galleryStyles.galleryTitle}>
                Ostatnio zrealizowane projekty
            </h2>
            <span id='page-id'>03. nasze prace</span>
        </>
    );
};

export default PageGallery;

import footerStyles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <p className={footerStyles.footerCopyrights}>
                Wszelkie prawa zastrzeżone przez Artur Grudzień - 2021 &copy;
            </p>
        </footer>
    );
};

export default Footer;

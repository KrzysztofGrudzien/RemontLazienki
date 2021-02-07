import logoStyles from './Logo.module.scss';

const Logo = () => {
    return (
        <h1 className={logoStyles.logo}>
            remont<span>lazienki</span>.eu
        </h1>
    );
};

export default Logo;

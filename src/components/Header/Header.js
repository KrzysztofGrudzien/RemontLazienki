import headerStyles from './Header.module.scss';

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1 className={headerStyles.headerLogo}>Header</h1>
        </header>
    );
};

export default Header;

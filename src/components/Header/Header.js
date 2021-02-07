import headerStyles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <Logo />
            <Navigation />
        </header>
    );
};

export default Header;

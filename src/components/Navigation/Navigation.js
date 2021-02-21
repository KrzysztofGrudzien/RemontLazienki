import navigationStyles from './Navigation.module.scss';
import IconPhone from '../../assets/icons/icon-phone.svg';
import IconEnvelop from '../../assets/icons/icon-envelop.svg';
import IconFacebook from '../../assets/icons/icon-fb.svg';
import { Link } from 'react-router-dom';
import TemplateNavigationLink from '../Templates/TemplateNavigationLink/TemplateNavigationLink';

const Navigation = () => {
    return (
        <>
            <nav className={navigationStyles.navbar}>
                <ul className={navigationStyles.navbarList}>
                    <li className={navigationStyles.navbarItem}>
                        <TemplateNavigationLink>
                            <Link
                                to='/'
                                className={navigationStyles.navbarItemLink}
                            >
                                o nas
                            </Link>
                        </TemplateNavigationLink>
                    </li>
                    <li className={navigationStyles.navbarItem}>
                        <TemplateNavigationLink>
                            <Link
                                to='/uslugi'
                                className={navigationStyles.navbarItemLink}
                            >
                                usługi
                            </Link>
                        </TemplateNavigationLink>
                    </li>
                    <li className={navigationStyles.navbarItem}>
                        <TemplateNavigationLink>
                            <Link
                                to='/galeria'
                                className={navigationStyles.navbarItemLink}
                            >
                                galeria
                            </Link>
                        </TemplateNavigationLink>
                    </li>
                    <li className={navigationStyles.navbarItem}>
                        <TemplateNavigationLink>
                            <Link
                                to='/kontakt'
                                className={navigationStyles.navbarItemLink}
                            >
                                kontakt
                            </Link>
                        </TemplateNavigationLink>
                    </li>
                </ul>
                <div className={navigationStyles.navbarDetail}>
                    <img src={IconPhone} alt='phone icon' />
                    519-811-460
                </div>
                <div className={navigationStyles.navbarDetail}>
                    <img src={IconEnvelop} alt='email icon' />
                    <a href='#' className={navigationStyles.navbarDetailLink}>
                        dekorilla@wp.pl
                    </a>
                </div>
                <div className={navigationStyles.navbarDetail}>
                    <img src={IconFacebook} alt='facebook icon' />
                    <a href='#' className={navigationStyles.navbarDetailLink}>
                        facebook.com/dekorilla
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Navigation;

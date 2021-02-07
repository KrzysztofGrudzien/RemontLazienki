import sidebarStyles from './Sidebar.module.scss';
import IconPhone from '../../assets/icons/icon-phone.svg';
import IconMail from '../../assets/icons//icon-envelop.svg';
import IconFacebook from '../../assets/icons/icon-fb.svg';

const Sidebar = () => {
    return (
        <div className={sidebarStyles.sidebar}>
            <div className={sidebarStyles.sidebarIcons}>
                <img src={IconPhone} alt='icon of phone.' />
                <img src={IconMail} alt='icon of email.' />
                <img src={IconFacebook} alt='icon of facebook.' />
            </div>
            <p className={sidebarStyles.sidebarAuthor}>
                Projekt i wdrożenie{' '}
                <a
                    className={sidebarStyles.sidebarLink}
                    href='http://criscode.eu'
                    target='_blank'
                    rel='noreferrer'
                >
                    Krzysztof Grudzień
                </a>
            </p>
        </div>
    );
};

export default Sidebar;

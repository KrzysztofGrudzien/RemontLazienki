import linkButtonStyles from './LinkButton.module.scss';

const LinkButton = ({ children }) => {
    return (
        <a href='#' className={linkButtonStyles.link}>
            {children}
        </a>
    );
};

export default LinkButton;

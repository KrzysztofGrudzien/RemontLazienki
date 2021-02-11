import mainStyles from './Main.module.scss';

const Main = ({ children }) => {
    return <main className={mainStyles.main}>{children}</main>;
};

export default Main;

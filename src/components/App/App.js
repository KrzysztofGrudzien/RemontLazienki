import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import appStyles from './App.module.scss';
// import PageAbout from '../../pages/About/About';
// import PageServices from '../../pages/Services/Services';
import Page404 from '../../pages/404/404';

const App = () => {
    return (
        <>
            <Sidebar />
            <div className={appStyles.container}>
                <Header />
                <Main>
                    {/* <PageAbout></PageAbout> */}
                    {/* <PageServices></PageServices> */}
                    <Page404 />
                </Main>
                <Footer />
            </div>
        </>
    );
};

export default App;

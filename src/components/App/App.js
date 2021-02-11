import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import appStyles from './App.module.scss';
import PageAbout from '../../pages/About/About';

const App = () => {
    return (
        <>
            <Sidebar />
            <div className={appStyles.container}>
                <Header />
                <Main>
                    <PageAbout></PageAbout>
                </Main>
                <Footer />
            </div>
        </>
    );
};

export default App;

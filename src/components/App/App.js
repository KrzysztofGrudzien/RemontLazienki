import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import appStyles from './App.module.scss';

const App = () => {
    return (
        <>
            <Sidebar />
            <div className={appStyles.container}>
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    );
};

export default App;

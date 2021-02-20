import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import appStyles from './App.module.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PageAbout from '../../pages/About/About';
import PageServices from '../../pages/Services/Services';
import Page404 from '../../pages/404/404';
import PageContact from '../../pages/Contact/Contact';
import PageGallery from '../../pages/Gallery/Gallery';

const App = () => {
    return (
        <Router>
            <Sidebar />
            <div className={appStyles.container}>
                <Header />
                <Main>
                    <Switch>
                        <Route path='/galeria'>
                            <PageGallery />
                        </Route>
                        <Route path='/kontakt'>
                            <PageContact />
                        </Route>
                        <Route path='/404'>
                            <Page404 />
                        </Route>
                        <Route path='/uslugi'>
                            <PageServices />
                        </Route>
                        <Route path='/'>
                            <PageAbout />
                        </Route>
                    </Switch>
                </Main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;

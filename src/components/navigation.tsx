import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import { HeaderMenu } from './header/header';

import {InitContract} from '../utils';
import Home from "./home";
import Footer from "./footer/footer";


function Navigation(props: InitContract) {
    return (
        <Router>
            <HeaderMenu {...props} />
            <Routes>
                <Route path="/" element={<Home  {...props}  />}/>
            </Routes>
            <Footer />
        </Router>
    );
}

export default Navigation;

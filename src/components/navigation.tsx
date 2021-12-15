import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import { Supply } from './supply';
import { Borrow } from './borrow';
import { Portfolio } from './portfolio';
import { HeaderMenu } from './header/header';

import {InitContract} from '../utils';


function Navigation(props: InitContract) {
    return (
        <Router>
            <HeaderMenu {...props} />
            <Routes>
                <Route path="/supply" element={<Supply  {...props}  />}/>
                <Route path="/borrow" element={<Borrow  {...props} />}/>
                <Route path="/portfolio" element={<Portfolio {...props} />}/>
            </Routes>
        </Router>
    );
}

export default Navigation;

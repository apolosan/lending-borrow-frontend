import {NavLink} from 'react-router-dom';
import {Auth} from './auth';
import {InitContract} from '../utils';

export function HeaderMenu(props: InitContract) {
    return (
        <div className="header">
            <ul className="menu" >
                <li>
                    <NavLink to="/supply" className={({ isActive }) => (isActive ? 'active' : 'inactive')}  >supply</NavLink>
                </li>
                <li>
                    <NavLink to="/borrow" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>borrow</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : 'inactive')} >portfolio</NavLink>
                </li>
            </ul>
            <Auth {...props} />
        </div>
    )
}

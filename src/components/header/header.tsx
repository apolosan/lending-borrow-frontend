import { NavLink } from 'react-router-dom';
import { Auth } from '../auth/auth';
import { InitContract } from '../../utils';

import styles from './Header.module.scss';
import NearlendLogo from '../../assets/images/nearlend-logo.svg';

export function HeaderMenu(props: InitContract) {
    return (
        <header className={styles.header}>
            {/* <ul className={styles.header__menu} >
                <li>
                    <NavLink to="/supply" className={({ isActive }) => (isActive ? 'active' : 'inactive')}  >supply</NavLink>
                </li>
                <li>
                    <NavLink to="/borrow" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>borrow</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : 'inactive')} >portfolio</NavLink>
                </li>
            </ul> */}

            <div className="container">
                <div className={styles.header__inner}>
                    <div className={styles.header__logo}>
                        <img src={NearlendLogo} alt="Nearlend-logo" />
                    </div>
                    <Auth {...props} />
                </div>
            </div>
        </header>
    )
}

// import { NavLink } from 'react-router-dom';
import { Auth } from '../auth/auth';
import { InitContract } from '../../utils';

import styles from './Header.module.scss';
import NearlendLogo from '../../assets/images/nearlend-logo.svg';

export function HeaderMenu(props: InitContract) {
    return (
        <header className={styles.header}>
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

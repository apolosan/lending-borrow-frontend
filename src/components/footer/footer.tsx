import styles from './Footer.module.scss';

import BlaizeLogo from '../../assets/images/blaize-logo.svg';
import GitHubLogo from '../../assets/images/github-logo.png';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.powered}>
                        <p>Powered by</p>
                        <a href="https://blaize.tech/" target="_blank" className={styles.powered__logo}>
                            <img src={BlaizeLogo} alt="Blaize logo" />
                        </a>
                    </div>

                    <div className={styles.socials}>
                        <a href="#" className={styles.socials__git}>
                            <img src={GitHubLogo} alt="GitHub Logo" />
                        </a>

                        <ul className={styles.socials__list}>
                            <li>
                                <a href="#">Contracts</a>
                            </li>

                            <li>
                                <a href="#">Frontend</a>
                            </li>
                        </ul>
                    </div>

                    <p className={styles.date}>December 2021</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
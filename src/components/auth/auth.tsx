import { InitContract } from '../../utils';
import { Button } from '../button/button';
import WnearSmallIcon from '../../assets/images/wnear-icon--small.png';
import styles from './Auth.module.scss';

export function Auth(props: InitContract) {

    const { walletConnection } = props;

    function signIn() {
        walletConnection.requestSignIn();
    }

    function signOut() {
        walletConnection.signOut();
        window.location.reload();
    }

    return (
        <div className={styles.auth}>
            {
                (!walletConnection.isSignedIn() ?
                    <>
                        <Button size="large" color="primary" onClick={() => signIn()} text="Connect wallet" />
                    </>
                    :
                    <div className={styles.auth__signed}>
                        {walletConnection.getAccountId()}
                        <div className={styles.auth__value}>
                            <div>
                                <img src={WnearSmallIcon} alt="Wnear Icon" />
                            </div>
                            <p>106.810</p>
                        </div>
                        <Button size="large" color="white" onClick={() => signOut()} text="NEARLend.TestLend" />
                        <Button size="small" color="transparent" onClick={() => signOut()} text="Log out" />
                    </div>
                )}
        </div>
    );
}

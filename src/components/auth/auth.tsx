import { InitContract } from '../../utils';
import { Button } from '../button/button';
import WnearSmallIcon from '../../assets/images/wnear-icon--small.png';
import styles from './Auth.module.scss';

export function Auth(props: InitContract) {

    const { walletConnection, currentUser } = props;

    const balance = Math.round(((currentUser?.balance || 0) / (10**24)) * 100000) / 100000;

    function signIn() {
        console.log(walletConnection.isSignedIn());
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
                            <p>{balance}</p>
                        </div>
                        <Button size="large" color="white" onClick={() => {console.log(walletConnection.account())}} text={walletConnection.getAccountId()} />
                        <Button size="small" color="transparent" onClick={() => signOut()} text="Log out" />
                    </div>
                )}
        </div>
    );
}

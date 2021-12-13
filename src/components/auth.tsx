import {InitContract} from '../utils';

export function Auth(props: InitContract) {

    const { walletConnection } = props;

    function signIn() {
        walletConnection.requestSignIn();
    }

    function signOut() {
        walletConnection.signOut();
        window.location.reload();
    }


    return(
        <div className="auth">
            {
                (!walletConnection.isSignedIn() ?
                    <div><button onClick={() => signIn()}>SignIn</button></div> :
                    <div>{walletConnection.getAccountId()}<button onClick={() => signOut()}>SignOut</button></div>
            )}
        </div>
    );
}

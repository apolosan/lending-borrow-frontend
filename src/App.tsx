
import './css/app.css';
import {InitContract} from './utils';
import Navigation from './components/navigation';

function App(props: InitContract) {
  return (
    <Navigation {...props} />
  );
}

export default App;


import React from 'react';
import 'antd/dist/antd.css';
import './styles/app.css';
import { InitContract } from './utils';
import Navigation from './components/navigation';

function App(props: InitContract) {
  return (
    <div className="app">
      <Navigation {...props} />
    </div>
  );
}

export default App;

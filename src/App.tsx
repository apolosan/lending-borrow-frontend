
import React from 'react';
import "antd/dist/antd.css";
import './styles/app.css';
import { InitContract } from './utils';
import Navigation from './components/navigation';
import Footer from './components/footer/footer';
import Home from './home/index';

function App(props: InitContract) {
  return (
    <div className="app">
      <Navigation {...props} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

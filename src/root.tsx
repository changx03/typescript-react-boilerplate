import React from 'react';
import './app.css';
import Logo from './logo.svg';
import IMG_0030 from '../public/IMG_0030.jpg';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <Logo className="app-logo" width={100} height={100} />
          <h1 className="app-title">Hello React</h1>
        </header>
        <img src={IMG_0030} alt="test image" />
        <p className="app-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

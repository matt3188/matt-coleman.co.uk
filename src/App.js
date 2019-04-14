import React, { Component } from 'react';
import Particles from 'react-particles-js';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 50
              },
              size: {
                value: 3
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse'
                }
              }
            }
          }}
          style={{ position: 'fixed', width: '100vw', height: '100vh', left: 0, top: 0 }}
        />
        <div className="row">
          <Header />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

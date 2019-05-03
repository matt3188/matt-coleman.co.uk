import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Particles from 'react-particles-js';

import Header from 'components/Header';
import Container from 'components/Container';
import ColourSelect from 'components/ColourSelect';

class App extends Component {
  handleColorChange = color => {
    document.body.style.backgroundColor = '';
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <Router>
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

        <Header />
        <Container />
        <ColourSelect onSelectColor={this.handleColorChange} />
      </Router>
    );
  }
}

export default App;

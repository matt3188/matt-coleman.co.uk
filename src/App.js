import React, { Component } from 'react';
import Particles from 'react-particles-js';

import Header from './components/Header';
import Menu from './components/Menu';
import { CodepenIcon, EmailIcon, GithubIcon } from './components/icons';

class App extends Component {
  handleColorChange = color => {
    document.body.classList = '';
    document.body.classList.add(color);
  };

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

          <div className="col-md-12">
            <ul className="contact-list">
              <li>
                <a
                  className="btn btn--has-border"
                  href="https://github.com/matt3188"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon fill="#fff" width={50} height={50} />
                </a>
              </li>
              <li>
                <a
                  className="btn btn--has-border"
                  href="http://codepen.io/mattcoleman"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CodepenIcon fill="#fff" width={50} height={50} />
                </a>
              </li>
              <li>
                <a className="btn btn--has-border" href="mailto:hello@matt-coleman.co.uk">
                  <EmailIcon fill="#fff" width={50} height={50} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Menu onSelectColor={this.handleColorChange} />
      </div>
    );
  }
}

export default App;

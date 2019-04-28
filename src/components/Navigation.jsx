import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
  state = {
    navOpen: false
  };

  clickHandler = () => {
    this.setState({
      navOpen: !this.state.navOpen
    });
  };

  render() {
    return (
      <>
        <button
          className={`nav__mobile-menu-toggle ${this.state.navOpen ? 'is-active' : ''}`}
          onClick={this.clickHandler}
        />
        <nav className={`nav ${this.state.navOpen ? 'is-active' : ''}`}>
          <ul className="horizontal-list">
            <li>
              <NavLink onClick={this.clickHandler} activeClassName="is-active" exact={true} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={this.clickHandler} activeClassName="is-active" to="/my-cv">
                My CV
              </NavLink>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
export default Navigation;

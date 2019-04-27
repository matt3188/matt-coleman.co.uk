import React, { Component } from 'react';

import { GearIcon } from '../components/icons';

class Menu extends Component {
  state = {
    open: false,
    colourPicked: '',
    colours: [
      { id: 1, hex: '#0e83cd' },
      { id: 2, hex: '#f06060' },
      { id: 3, hex: '#fcd04b' },
      { id: 4, hex: '#2ecc71' },
      { id: 5, hex: '#9e54bd' }
    ]
  };

  componentDidMount() {
    this.setState({
      colourPicked: this.state.colours[0].hex
    });
  }

  clickHandler = () => {
    if (!this.state.open) {
      this.openNav();
    } else {
      this.closeNav();
    }
  };

  handleColorChange = e => {
    let colourPicked = e.target.style.backgroundColor;
    this.setState({
      colourPicked: colourPicked
    });
    this.props.onSelectColor(colourPicked);
    this.closeNav();
  };

  openNav = () => {
    this.setState({
      open: true
    });
  };

  closeNav = () => {
    this.setState({
      open: false
    });
  };

  render() {
    this.colourList = this.state.colours.map(colour => (
      <li key={colour.hex} className="color">
        <button
          className={`color-${colour.id}`}
          style={{ backgroundColor: colour.hex }}
          onClick={this.handleColorChange}
        />
      </li>
    ));

    return (
      <>
        <button className="btn btn-menu-trigger" onClick={this.clickHandler}>
          <GearIcon fill={this.state.colourPicked} width={40} height={40} />
        </button>
        <div className={`wrapper ${this.state.open ? 'is-active' : ''}`}>
          <ul className="color-list">{this.colourList}</ul>
        </div>
        <div className={`overlay ${this.state.open ? 'is-active' : ''}`} />
      </>
    );
  }
}

export default Menu;

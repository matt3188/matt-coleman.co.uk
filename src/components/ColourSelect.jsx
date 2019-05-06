// @flow
import React, { Component } from 'react';

import Icon from 'components/Icon';

type Props = {
  onSelectColor: Function
};

type State = {
  open: boolean,
  colourPicked: string,
  colours: Array<{ id: number, hex: string }>
};

class ColourSelect extends Component<Props, State> {
  prevColour: string;

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

  getStoredItem = (item: string) => {
    return JSON.parse(localStorage.getItem(item));
  };

  componentDidMount() {
    this.prevColour = this.getStoredItem('colour') || this.state.colours[0].hex;
    this.setState({
      colourPicked: this.prevColour
    });

    if (document.body) {
      document.body.style.backgroundColor = this.prevColour;
    }
  }

  clickHandler = () => {
    if (!this.state.open) {
      this.openNav();
    } else {
      this.closeNav();
    }
  };

  handleColorChange = (e: Event) => {
    let colourPicked = e.target.style.backgroundColor;
    this.setState({
      colourPicked: colourPicked
    });

    this.props.onSelectColor(colourPicked);
    localStorage.setItem('colour', JSON.stringify(colourPicked));
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
    this.colourList = this.state.colours.map((colour: { id: number, hex: string }) => (
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
          <Icon name="gear" fill={this.state.colourPicked} width={40} height={40} viewBox="0 0 14 16" />
        </button>
        <div className={`wrapper ${this.state.open ? 'is-active' : ''}`}>
          <ul className="color-list">{this.colourList}</ul>
        </div>
        <div onClick={this.closeNav} className={`overlay ${this.state.open ? 'is-active' : ''}`} />
      </>
    );
  }
}

export default ColourSelect;

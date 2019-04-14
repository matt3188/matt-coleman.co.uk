import React, { Component } from 'react';

import { GearIcon } from '../components/icons';

class Menu extends Component {
  render() {
    return (
      <>
        <button className="btn btn-menu-trigger" onClick={this.clickHandler}>
          <GearIcon class={this.state.colorPicked} width={40} height={40} />
        </button>
        <div className={`wrapper ${this.state.open ? 'is-active' : ''}`}>
          <ul className="color-list">
            <li className="color">
              <button className="color-1" onClick={this.handleColorChange} />
            </li>
            <li className="color">
              <button className="color-2" onClick={this.handleColorChange} />
            </li>
            <li className="color">
              <button className="color-3" onClick={this.handleColorChange} />
            </li>
            <li className="color">
              <button className="color-4" onClick={this.handleColorChange} />
            </li>
            <li className="color">
              <button className="color-5" onClick={this.handleColorChange} />
            </li>
          </ul>
        </div>
        <div className={`overlay ${this.state.open ? 'is-active' : ''}`} />
      </>
    );
  }
}

export default Menu;

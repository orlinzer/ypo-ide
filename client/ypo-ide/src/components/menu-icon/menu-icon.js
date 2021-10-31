import React from 'react';

import './styles/menu-icon.css';

export class MenuIcon extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      theme: 'light',
      // theme: 'dark',

      direction: 'rtl',
      // direction: 'ltr',

      language: 'en-us',
      // language: 'he-il',

      open: false,
      // open: true,

      size: '2em', // ?
    }

  }

  render() {
    return (
      <div className={'menu-icon ' + (this.state.open?'open ':' ') + (this.state.theme + ' ')} onClick={() => {this.onClick()}}>
        <div className="a"></div>
        <div className="b"></div>
        <div className="c"></div>
      </div>
    );
  }

  onClick (e) {
    this.setState((prevState) => ({ open: !(prevState.open) }));
  }
}

export default MenuIcon;
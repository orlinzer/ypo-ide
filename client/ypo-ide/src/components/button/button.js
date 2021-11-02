import './styles/button.css';

import React from 'react';

export class Button extends React.Component {

  constructor(props) {
    this.state = {
      enabled: true,
      theme: 'light',
      direction: 'ltr'
    }
  }

  render () {
    return (
      <button className={ 'button ' + this.state.enabled } onClick={ this.props.onClick }>
        { this.props.children }
      </button>
    );
  }
}

export default Button;

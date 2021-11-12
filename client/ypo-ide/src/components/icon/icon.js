import React from 'react';

import './styles/icon.css';

export class Icon extends React.Component {
  render() {
    return (
      <svg className={ `icon ${this.props.className}` } viewBox="0 0 255 255">
        { this.props.children }
      </svg>
    );
  }
}

export default Icon;

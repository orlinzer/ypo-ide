import React from 'react';

import Icon from '../icon';

import './styles/theme-icon.css';

export class ThemeIcon extends React.Component {
  render() {
    return (
      <Icon className="theme-icon">
          <defs>
            <mask id="theme-icon-inner-circle">
              <rect className="background-rectangle" x="0" y="0" width="255" height="255" fill="white" />
              <circle className="inner-circle" cx="127.5" cy="127.5" r="42" fill="black" />
            </mask>
          </defs>
          <rect className="a" x="0" y="-16" width="48" height="24" />
          <rect className="b" x="0" y="-16" width="48" height="24" />
          <rect className="c" x="0" y="-16" width="48" height="24" />
          <rect className="d" x="0" y="-16" width="48" height="24" />
          <rect className="e" x="0" y="-16" width="48" height="24" />
          <rect className="f" x="0" y="-16" width="48" height="24" />
          <rect className="g" x="0" y="-16" width="48" height="24" />
          <rect className="h" x="0" y="-16" width="48" height="24" />
          <circle className="main-circle" cx="127.5" cy="127.5" r="64" mask="url(#theme-icon-inner-circle)" />
      </Icon>
    );
  }
}

export default ThemeIcon;
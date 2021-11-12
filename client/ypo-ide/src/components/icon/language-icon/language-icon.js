import React from 'react';

import Icon from '../icon';

import './styles/language-icon.css';

export class LanguageIcon extends React.Component {
  render() {
    return (
      <Icon className="language-icon">
        <mask id="language-icon-inner-circle">
          <rect x="0" y="0" width="255" height="255" fill="white" />
          <circle className="inner-circle" cx="127.5" cy="127.5" r="80" fill="black" />
        </mask>
        <circle className="main-circle" cx="127.5" cy="127.5" r="96" fill="black" mask="url(#language-icon-inner-circle)"/>

        <line className="line-a" x1="47.5" y1="95.5" x2="207.5" y2="95.5" strokeLinecap="round" strokeWidth="16" stroke="black" fill="transparent"/>
        <line className="line-b" x1="47.5" y1="159.5" x2="207.5" y2="159.5" strokeLinecap="round" strokeWidth="16" stroke="black" fill="transparent"/>

        <path className="a" d="M 127.5 40.5 A 64 64 0 0 0 127.5 214.5" strokeLinecap="round" strokeWidth="16" stroke="black" fill="transparent"/>
        <path className="b" d="M 127.5 40.5 A 64 64 0 0 0 127.5 214.5" strokeLinecap="round" strokeWidth="16" stroke="black" fill="transparent"/>
        <path className="c" d="M 127.5 40.5 A 64 64 0 0 0 127.5 214.5" strokeLinecap="round" strokeWidth="16" stroke="black" fill="transparent"/>
      </Icon>
    );
  }
}

export default LanguageIcon;
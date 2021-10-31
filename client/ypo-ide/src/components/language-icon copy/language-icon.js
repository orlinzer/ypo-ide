import React from 'react';

import './styles/language-icon.css';

export class LanguageIcon extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      theme: 'light',
      // theme: 'dark',

      direction: 'rtl',
      // direction: 'ltr',

      language: 'en-us',
      // language: 'he-il',

      size: '2em', // ?
    }
  }

  render() {
    return (
      <div className={'language-icon ' + (this.state.theme + ' ')} onClick={() => {this.onClick()}}>
        <svg viewBox="0 0 255 255">
          <mask id="language-icon-inner-circle">
            <rect x="0" y="0" width="255" height="255" fill="white" />
            <circle className="inner-circle" cx="127.5" cy="127.5" r="80" fill="black" />
          </mask>
          <circle cx="127.5" cy="127.5" r="96" fill="black" mask="url(#language-icon-inner-circle)"/>

          <line x1="47.5" y1="95.5" x2="207.5" y2="95.5" stroke-linecap="round" stroke-width="16" stroke="black" fill="transparent"/>
          <line x1="47.5" y1="159.5" x2="207.5" y2="159.5" stroke-linecap="round" stroke-width="16" stroke="black" fill="transparent"/>

          <path className="a" d="M 127.5 40.5 A 64 64 0 0 0 127.5 214.5" stroke-linecap="round" stroke-width="16" stroke="black" fill="transparent"/>
          <path className="b" d="M 127.5 40.5 A 64 64 0 0 0 127.5 214.5" stroke-linecap="round" stroke-width="16" stroke="black" fill="transparent"/>
          <path className="c" d="M 127.5 40.5 A 64 64 0 0 0 127.5 214.5" stroke-linecap="round" stroke-width="16" stroke="black" fill="transparent"/>

          {/* <path d="M 127.5 40.5 A 96 96 0 0 0 127.5 214.5" stroke-linecap="round" stroke-width="16" stroke="black" fill="transparent"/> */}
          {/* <path className="a" d="M 127.5 40.5 A 127 127 0 0 0 127.5 214.5" stroke-linecap="round" stroke-width="16" stroke="black" fill="transparent"/> */}
          {/* <path d="M 127.5 40.5 A 127 127 0 0 1 127.5 214.5" stroke-linecap="round" stroke-width="16" stroke="black" fill="transparent"/> */}
          {/* <path d="M 127.5 40.5 Q 63.5 127.5 127.5 214.5" stroke-linecap="round" stroke-width="16" stroke="black" fill="transparent"/>
          <path d="M 127.5 40.5 Q 191.5 127.5 127.5 214.5" stroke-linecap="round" stroke-width="16" stroke="black" fill="transparent"/> */}
        </svg>
      </div>
    );
  }

  onClick (e) {
    this.setState((prevState) => ({ theme: (prevState.theme === 'light')?'dark':'light' }));
  }
}

export default LanguageIcon;
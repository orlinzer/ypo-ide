import React from 'react';

import './styles/theme-icon.css';

export class ThemeIcon extends React.Component {

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
      <div className={'theme-icon ' + (this.state.theme + ' ')} onClick={() => {this.onClick()}}>
        <svg viewBox="0 0 255 255">
          <defs>
            <mask id="theme-icon-inner-circle">
              <rect x="0" y="0" width="255" height="255" fill="white" />
              <circle className="inner-circle" cx="127.5" cy="127.5" r="42" fill="black" />
            </mask>
          </defs>
          <rect className="a" x="0" y="-16" width="48" height="24" fill="black" />
          <rect className="b" x="0" y="-16" width="48" height="24" fill="black" />
          <rect className="c" x="0" y="-16" width="48" height="24" fill="black" />
          <rect className="d" x="0" y="-16" width="48" height="24" fill="black" />
          <rect className="e" x="0" y="-16" width="48" height="24" fill="black" />
          <rect className="f" x="0" y="-16" width="48" height="24" fill="black" />
          <rect className="g" x="0" y="-16" width="48" height="24" fill="black" />
          <rect className="h" x="0" y="-16" width="48" height="24" fill="black" />
          <circle cx="127.5" cy="127.5" r="64" fill="black" mask="url(#theme-icon-inner-circle)" />
        </svg>
      </div>
    );
  }

  onClick (e) {
    this.setState((prevState) => ({ theme: (prevState.theme === 'light')?'dark':'light' }));
  }
}

export default ThemeIcon;
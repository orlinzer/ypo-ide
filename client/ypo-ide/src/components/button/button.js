import './styles/button.css';

import React from 'react';
// import { generateClasses, generateState } from '../../scripts/utils/react-helper';
import { generateState } from '../../scripts/utils/react-helper';

export class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      enabled: true,
      theme: 'light',
      direction: 'ltr'
    }

    // this.state = generateState(props, this.state, [ 'enabled', 'theme', 'direction' ]);
    generateState(this, [ 'enabled', 'theme', 'direction' ]);

    // console.log(this.state);



    // generateClasses(this, ['a', 'b']); // DBG for test
  }

  render () {
    return (
      <button className={ ['button', this.state.enabled, this.state.theme, this.state.direction].join(' ') }
      onClick={ this.props.onClick }>
        { this.props.children }
      </button>
    );
  }
}

export default Button;

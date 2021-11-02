import './styles/panel.css';

import React from 'react';
import { generateState } from '../../scripts/utils/react-helper';

export class Panel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      icons: true,
      texts: true
    };

    this.state = generateState(props, this.state);
  }

  render () {
    return (
      <div className="panel" orientation={ this.props.orientation === 'vertical' }>
        { this.props.children }
      </div>
    );
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState, snapshot) {

  }

  componentWillUnmount() {

  }
}

export default Panel;

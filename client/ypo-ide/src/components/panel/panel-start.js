import './styles/panel.css';

import React from 'react';

export class PanelStart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      icons: true,
      texts: true
    };
  }

  render () {
    return (
      <div className="panel-start">
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

export default PanelStart;

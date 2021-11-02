import './styles/panel.css';

import React from 'react';

export class PanelEnd extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      icons: true,
      texts: true
    };
  }

  render () {
    return (
      <div className="panel-end">
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

export default PanelEnd;

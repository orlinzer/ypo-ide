
import React from 'react';

export class PanelResizable extends React.Component {
  render () {
    return (
      <div className="panel-resizable">
        { this.props.children }
      </div>
    );
  }
}

export default PanelResizable;
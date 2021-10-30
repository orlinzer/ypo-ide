
import React from 'react';
import MonacoEditor from 'react-monaco-editor';

import './styles/code-library.css';

export class CodeLibrary extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      code: 'function name (args) {\n  // TODO: add code here\n}',
    }
  }


  render () {
    return (
      <MonacoEditor
        className="code-library"
        // width="800"
        // height="600"
        language="javascript"
        theme="vs-dark"
        value={this.state.code}
        options={this.state.options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}
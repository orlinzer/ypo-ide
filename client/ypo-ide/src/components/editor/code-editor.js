
import React from 'react';

// import MonacoEditor from 'react-monaco-editor';
import MonacoEditor from '@monaco-editor/react';

import './styles/code-editor.css';

export class CodeEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style="width:100%; height: 100%;">
        <MonacoEditor
          className="code-editor"
          language="javascript"
          theme="vs-dark"
          value={this.state.code}
          options={this.state.options}
          // onChange={this.onChange}
          editorDidMount={this.editorDidMount}
          editorDidUpdate={this.editorDidUpdate}
          editorWillUnmount={this.editorWillUnmount}

        />
        </div>
    );
  }

  editorDidMount () {

  }

  editorDidUpdate () {

  }

  editorWillUnmount () {

  }
}
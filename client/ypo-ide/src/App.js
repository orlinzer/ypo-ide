import logo from './logo.svg';
import './App.css';

// import * as Monaco from 'monaco/';
import React from 'react';
import MonacoEditor from 'react-monaco-editor';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      code: '// type your code...',
    }
  }

  editorDidMount (editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }

  onChange (newValue, e) {
    console.log('onChange', newValue, e);
  }

  render () {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <main>
          <MonacoEditor
            width="800"
            height="600"
            language="javascript"
            theme="vs-dark"
            value={this.state.code}
            options={this.state.options}
            onChange={this.onChange}
            editorDidMount={this.editorDidMount}
          />
        </main>
      </div>
    );
  }
}

export default App;

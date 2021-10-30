import logo from './logo.svg';
import './styles/App.css';

// import * as Monaco from 'monaco/';
import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import { CodeLibrary } from './components/code-library/code-library';

// import FileExplorer from './components/file-explorer';

// import FileSystem from './scripts/file-system';
// import * as FS from './scripts/file-system/file-system';

export class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      code: '// type your code...',
    }

    // console.log(FS.fileSystem);
    // let d = FS.createDirectory(FS.getRoot(), '/test');
    // console.log(d);
  }

  editorDidMount (editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }

  onChange (newValue, e) {
    console.log('onChange', newValue, e);
  }

  render () {
    return [
      <header key="1" className="App-header">
        {/* TODO: set reference to the main page */}
        <a href="{this}">
          <img src={logo} className="App-logo" alt="logo" width="100" />
        </a>
        <a href="{this}">
          <h1>YPO IDE</h1>
        </a>
      </header>,
      <div key="2" className="middle-div">
        <div className="start-div"></div>
        <main className="App-main">
          {/* <FileExplorer files={['bla1', 'bla2', 'bla3']}/> */}
          <MonacoEditor
            className="monaco-editor"
            // width="800"
            // height="600"
            language="javascript"
            theme="vs-dark"
            value={this.state.code}
            options={this.state.options}
            onChange={this.onChange}
            editorDidMount={this.editorDidMount}
          />
        </main>
        <div className="end-div">
          <CodeLibrary/>
        </div>
      </div>,
      <footer key="3" className="App-footer">
        <p>Created by <a className="App-link" href="mailto://orlinzer@gmail.com" title="orlinzer@gmail.com" target="_blank" rel="noopener noreferrer">Or Linzer</a></p>
        <p>Copyright by <a className="App-link" href="https://www.ypo.co.il/" target="_blank" rel="noopener noreferrer"> Young Professors Online (YPO)</a></p>
      </footer>
    ];
  }
}

export default App;

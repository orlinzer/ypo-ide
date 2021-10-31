
// Images
import logo from './logo.svg';

// Styles
import 'normalize.css';
import './styles/App.css';

import React from 'react';
import MonacoEditor from 'react-monaco-editor';
// import { CodeLibrary } from './components/code-library/code-library';
import MenuIcon from './components/menu-icon/menu-icon'
import ThemeIcon from './components/theme-icon/theme-icon';
import LanguageIcon from './components/language-icon copy/language-icon';

// import FileExplorer from './components/file-explorer';

// import FileSystem from './scripts/file-system';
// import * as FS from './scripts/file-system/file-system';

export class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      code: '// type your code...',

      theme: 'light',
      // theme: 'dark',

      direction: 'rtl',
      // direction: 'ltr',

      language: 'en-us',
      // language: 'he-il',
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
    return [
      <header key="1">
        <div className="start">
          <a href="/">
            <img src={logo} className="App-logo" alt="logo" width="100" />
          </a>
          <a href="/">
            <h1>YPO IDE</h1>
          </a>
        </div>
        <div className="middle"></div>
        <div className="end">
          <LanguageIcon />
          <ThemeIcon />
          <MenuIcon />
        </div>
      </header>,
      <main key="2">
        <div className="start">

        </div>
        <div className="middle">
          <MonacoEditor
            className="monaco-editor"
            language="javascript"
            theme="vs-dark"
            value={this.state.code}
            options={this.state.options}
            onChange={this.onChange}
            editorDidMount={this.editorDidMount}
          />
        </div>
        <div className="end">
        </div>
      </main>,
      <footer key="3">
        <p>Created by <a className="App-link" href="mailto://orlinzer@gmail.com" title="orlinzer@gmail.com" target="_blank" rel="noopener noreferrer">Or Linzer</a></p>
        <p>Copyright by <a className="App-link" href="https://www.ypo.co.il/" target="_blank" rel="noopener noreferrer"> Young Professors Online (YPO)</a></p>
      </footer>
    ];
  }
}

export default App;

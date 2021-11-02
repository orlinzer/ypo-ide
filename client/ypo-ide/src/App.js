
// Images
import logo from './logo.svg';

// Styles
import 'normalize.css';
import './styles/App.css';

import React from 'react';
// import MonacoEditor from 'react-monaco-editor';
// import CodeLibrary from './components/code-library/code-library';
import MenuIcon from './components/menu-icon/menu-icon'
import ThemeIcon from './components/theme-icon/theme-icon';
import LanguageIcon from './components/language-icon/language-icon';
import Panel from './components/panel/panel';
import PanelStart from './components/panel/panel-start';
import PanelMiddle from './components/panel/panel-middle';
import PanelEnd from './components/panel/panel-end';

import { generateState } from './scripts/utils/react-helper';

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
    };

    // if (props.theme) {
    //   // this.state
    // }
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
        <Panel
        theme={ this.state.theme }
        direction={ this.state.direction }
        language={ this.state.language }>
          <PanelStart>
            <a className="logo" href="/">
              <img src={logo} alt="logo" width="100" />
            </a>
            <a href="/">
              <h1>YPO IDE</h1>
            </a>
          </PanelStart>
          <PanelMiddle>

          </PanelMiddle>
          <PanelEnd>
            <LanguageIcon />
            <ThemeIcon />
            <MenuIcon />
          </PanelEnd>
        </Panel>
      </header>,
      <main key="2">
        <div className="start">

        </div>
        <div className="start-open">
          <div className="start-open-handle"></div>
        </div>
        <div className="middle">

          <Panel>
            <PanelStart>Hello start</PanelStart>
            <PanelMiddle>Hello middle</PanelMiddle>
            <PanelEnd>Hello end</PanelEnd>
            <p>Hello nothing p</p>
          </Panel>

          {/* <MonacoEditor
            className="monaco-editor"
            language="javascript"
            theme="vs-dark"
            value={this.state.code}
            options={this.state.options}
            onChange={this.onChange}
            editorDidMount={this.editorDidMount}
          /> */}
        </div>
        <div className="end-open-handle"></div>
        <div className="end-open"></div>
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

// Images
import logo from './logo.svg';

// Styles
import 'normalize.css';
import './styles/App.css';

import React from 'react';

// import CodeLibrary from './components/code-library/code-library';
import MenuIcon from './components/icon/menu-icon/menu-icon';
import ThemeIcon from './components/icon/theme-icon/theme-icon';
import LanguageIcon from './components/icon/language-icon/language-icon';
import Panel from './components/panel/panel';
import PanelStart from './components/panel/panel-start';
import PanelMiddle from './components/panel/panel-middle';
import PanelEnd from './components/panel/panel-end';
import Button from './components/button/button';
import CodeEditor from './components/editor/code-editor';

// import { generateState } from './scripts/utils/react-helper';

// import FileExplorer from './components/file-explorer';

// import FileSystem from './scripts/file-system';
// import * as FS from './scripts/file-system/file-system';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: '// type your code...',

      options: {
        // automaticLayout: true
      },

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

    //   this.handleEditorChange = useCallback(_ => {
    //     const countOfLines = valueGetter.current().split("\n").length;
    //     if (countOfLines >= MIN_COUNT_OF_LINES) {
    //       const currentHeight = countOfLines * LINE_HEIGHT;
    //       if (MAX_HEIGHT > currentHeight) {
    //         setHeight(currentHeight);
    //       }
    //     }
    //   }, []);
  }

  toggleTheme () {
    document.body.classList.toggle('dark-theme');
    this.setState((prev) => (
      {
        // theme: prev.theme === 'vs-dark'?'light':'vs-dark'
        theme: document.body.classList.contains('dark-theme')?'vs-dark':'light'
      }
    ))
  }

  render() {
    return [
      <header key="1">
        <Panel
          theme={this.state.theme}
          direction={this.state.direction}
          language={this.state.language}>
          <PanelStart>
            <Button>
              <a className="logo icon" href="/">
                <img src={logo} alt="logo" width="100" />
              </a>
              <a className="label" href="/">
                <h1>YPO IDE</h1>
              </a>
            </Button>
          </PanelStart>
          <PanelMiddle></PanelMiddle>
          <PanelEnd>
            <Button onClick={ () => { document.body.classList.toggle('language-menu-open') } }>
              <LanguageIcon />
            </Button>
            <Button onClick={ () => { this.toggleTheme() } }>
              <ThemeIcon />
            </Button>
            <Button onClick={ () => { document.body.classList.toggle('menu-open') } }>
              <MenuIcon />
            </Button>
          </PanelEnd>
        </Panel>
      </header>,
      <main key="2">
        <Panel>
          <PanelStart>
            <div className="start-open"></div>
            <div className="start-open-handle"></div>
          </PanelStart>
          <PanelMiddle><CodeEditor theme={ this.state.theme } /></PanelMiddle>
          <PanelEnd>
            <div className="end-open-handle"></div>
            <div className="end-open">{<CodeEditor />}</div>
          </PanelEnd>
        </Panel>
      </main>,
      <footer key="3">
        <Panel>
          <PanelStart>
            <p>
              Created by{' '}
              <a
                className="App-link"
                href="mailto://orlinzer@gmail.com"
                title="orlinzer@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                Or Linzer
              </a>
            </p>
          </PanelStart>
          <PanelMiddle></PanelMiddle>
          <PanelEnd>
            <p>
              Copyright by{' '}
              <a
                className="App-link"
                href="https://www.ypo.co.il/"
                target="_blank"
                rel="noopener noreferrer">
                {' '}
                Young Professors Online (YPO)
              </a>
            </p>
          </PanelEnd>
        </Panel>
      </footer>,
    ];
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState, snapshot) {
    // if (document.body.classList.contains('dark-theme')) {
    //   this.setState({
    //     theme: 'vs-dark'
    //   })
    //   console.log("this.state", this.state);
    // } else {
    //   this.setState({
    //     theme: 'light'
    //   })
    // }

    console.log('app updated');
  }

  componentWillUnmount() {}
}

export default App;

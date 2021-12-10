import * as React from 'react';
import * as UI from '@mui/material';
// import * as UICore from '@mui/core';
import * as Icons from '@mui/icons-material';
import CodeEditor from './components/editor/code-editor';
import { createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export class App extends React.Component {

  constructor (props) {
    super(props);

    this.useStyles = makeStyles(theme => ({
      root: {
        marginBottom: theme.spacing(2),
        flexGrow: 1
      },
      title: {
        flexGrow: 1
      }
    }));

    this.state = {
      lightMode: true
    };

    // this.classes = this.useStyles();

    this.darkTheme = createTheme({
      state: {

      },
      palette: {
        primary: {
          main: '#333'
        },
        secondary: {
          main: '#555'
        }
      },
      direction: 'ltr'
    });

    this.lightTheme = createTheme({
      state: {

      }
    });

    this.appliedTheme = this.lightTheme;

    if (props.theme && props.theme === 'dark') {
      this.state.lightMode = 'dark';
    }

  }

  render () {
    return (
      <UI.ThemeProvider theme={this.appliedTheme}>
        <UI.Container maxWidth='md' sx={{ flexGrow: 1, flexDirection: 'column', width: '100vw', height: '100vh'}}>
          <UI.AppBar position='relative'>
            <UI.MenuList>
              <UI.IconButton><Icons.Menu/></UI.IconButton>
              <UI.Typography variant='h6' display='inline'>app bar</UI.Typography>
              <UI.IconButton><Icons.Search/></UI.IconButton>
              <UI.IconButton><Icons.Language/></UI.IconButton>
              <UI.IconButton><Icons.Mail/></UI.IconButton>
              <UI.IconButton><Icons.Notifications/></UI.IconButton>
              <UI.IconButton><Icons.AccountCircle/></UI.IconButton>
              <UI.IconButton
                onClick={() => {
                  // this.setState(prevState => ({
                    //   lightMode: !prevState.lightMode
                    // }))
                    this.setState({
                      lightMode: !this.state.lightMode
                    })
                }}>
                {((this.state.lightMode === 'dark')?<Icons.DarkMode/>:<Icons.LightMode/>)}
              </UI.IconButton>
              <UI.IconButton><Icons.MoreVert/></UI.IconButton>
              {/* <UI.IconButton><Icons.MoreHoriz/></UI.IconButton> */}
            </UI.MenuList>
          </UI.AppBar>
          <UI.Container position='relative' flexGrow='1'>
                <CodeEditor />
          </UI.Container>
          {/* <UI.BottomNavigation>
            <UI.Typography>Created by Or Linzer</UI.Typography>
          </UI.BottomNavigation> */}
          {/* <UI.AppBar position='relative'>
            <Icons.LibraryAdd/>
          </UI.AppBar> */}
        </UI.Container>
      </UI.ThemeProvider>
    );
  }
}

export default App;
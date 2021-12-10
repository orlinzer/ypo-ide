import * as React from 'react';

import { styled, alpha } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline, Typography, AppBar, MenuList, IconButton, Toolbar, InputBase, Badge, Menu, MenuItem } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import { Search } from '@mui/icons-material';
import * as Icons from '@mui/icons-material';
// import CodeEditor from '../components/editor/code-editor';
// import CodeEditor from '../components/editor/code-editor.tsx';
import Editor from '@monaco-editor/react';

const theme = createTheme();

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function App(props: any) {
  console.log(props);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [darkMode, setDarkMode] = React.useState<boolean>(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>English</MenuItem>
      <MenuItem onClick={handleMenuClose}>עברית</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <Icons.Mail />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <Icons.Notifications />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Icons.AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        display='flex'
        flexWrap='nowrap'
        flexDirection='column'
        // alignContent='stretch'
        alignItems='stretch'
        justifyContent='flex-start'

        overflow='hidden'
        width='100vw'
        height='100vh'
        sx={{
          // width: '100vw',
          // height: '100vh',
          // display: 'flex',

        }}
      >
        <AppBar position='relative'>
          <Toolbar variant='dense'>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <Icons.Menu />
            </IconButton>
            <Typography
              variant='h6'
              noWrap
              color='inherit'
              component='div'
              sx={{
                display: { xs: 'none', sm: 'block' }
              }}
            >
              app bar
            </Typography>
            <Search>
              <SearchIconWrapper>
                <Icons.Search />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <MenuList>
              <IconButton
                size='large'
                aria-label='language'
                aria-controls={menuId}
                color='inherit'
                onClick={handleProfileMenuOpen}
              >
                <Icons.Language />
              </IconButton>
              <IconButton
                size='large'
                aria-label='mail'
                color='inherit'
              >
                <Badge
                  badgeContent={5}
                  color='error'
                >
                  <Icons.Mail />
                </Badge>
              </IconButton>
              <IconButton
                size='large'
                aria-label='notification'
                color='inherit'
              >
                <Badge
                  badgeContent={3}
                  color='error'
                >
                  <Icons.Notifications />
                </Badge>
              </IconButton>
              <IconButton
                size='large'
                aria-label='account'
                color='inherit'
              >
                <Badge
                  color='error'
                >
                  <Icons.AccountCircle />
                </Badge>
              </IconButton>
              <IconButton
                size='large'
                aria-label='theme'
                color='inherit'
                onClick={handleDarkModeChange}
              >
                {(darkMode ? <Icons.LightMode /> : <Icons.DarkMode />)}
                {/* <Icons.DarkMode /> */}
              </IconButton>
              <IconButton
                size='large'
                aria-label='more'
                color='inherit'
                // for the end of the toolbar
                edge='end'
              >
                <Icons.MoreVert />
              </IconButton>
              {/* <UI.IconButton><Icons.MoreHoriz/></UI.IconButton> */}
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <Icons.More />
                </IconButton>
              </Box>
            </MenuList>
          </Toolbar>
        </AppBar>

        {renderMobileMenu}
        {renderMenu}

        <Box
          component="main"
          sx={{ flexGrow: 1 }}
        >
          {/* <CodeEditor /> */}
          <Editor
            theme={darkMode ? 'vs-dark' : 'light'}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
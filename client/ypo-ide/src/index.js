import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactRouter from 'react-router-dom';

// import './styles/index.css';
// import App from './App';
import reportWebVitals from './scripts/utils/reportWebVitals';

// import App from './App2';
import App from './pages/App.tsx';
import SignIn from './pages/SignInPage.tsx';
import SignUp from './pages/SignUpPage';
import Album from './pages/AlbumPage';

// const app = <App />;

ReactDOM.render(
  <React.StrictMode>
    <ReactRouter.BrowserRouter>
      {/* <ReactRouter.Router> */}
      {/* <ReactRouter.Switch> */}
          <ReactRouter.Routes>
            <ReactRouter.Route exact path='/' element={ <App /> } />
            <ReactRouter.Route path='/signin' element={ <SignIn /> } />
            <ReactRouter.Route path='/signup' element={ <SignUp /> } />
            <ReactRouter.Route path='/album' element={ <Album /> } />
          </ReactRouter.Routes>
      {/* </ReactRouter.Switch> */}
      {/* </ReactRouter.Router> */}
    </ReactRouter.BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  },
]);

ReactDOM.render(<RouterProvider router={router} />, document.getElementById('root'));

/*
If you want your app to work offline and load faster,
you can change "unregister()" to "register()" below.
Note that changing this function comes with some pitfalls.
Learn more about service workers: https://bit.ly/CRA-PWA
*/
serviceWorker.unregister();

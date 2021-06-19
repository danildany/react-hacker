import React from 'react';
import { Global, css, jsx } from '@emotion/react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';


/**
 * @function App
 */
const App = () => (
  <>
    <Global styles={GlobalCSS} />
    <Navbar />
    <Jumbotron />
  </>
)

const GlobalCSS = css`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html,
  body,
  .app {
    margin: 0;
    height: 100%;
    width: 100%;
  }
  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
`

export default App

import React,{useState} from 'react';
import { Global, css, jsx } from '@emotion/react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import ContentRow from './ContentRow';
import Footer from './Footer';
import DetailPane from './DetailPane';

const InitialRow = {
  category:"",
  pos : {
    top: 0,
    bottom: 0,
  }
}


/**
 * @function App
 */
const App = () => {
  const [activeRow,setActiveRow] = useState(InitialRow);
  const {category,pos:{top,bottom}} = activeRow;
  const setActive = activeRow => {
    setActiveRow(activeRow);
  }

  return(
  <>
    <Global styles={GlobalCSS} />
    <Navbar />
    <Jumbotron />
    <ContentRow category='Latest Releases' setActive={setActive} />
    <DetailPane category={category} pos={bottom} setActive={setActive}/>
    <Footer />
  </>
  )
  }

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
    background-color: black;
  }
  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
  button {
    background-color: rgba(51, 51, 51, 0.8);
    border: 1px solid white;
    padding: 0.75em 2.3em;
    border-radius: 0.2vw;
    box-shadow: none;
    font-size: 1.1vw;
    color: white;
    margin-right: 15px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.4px;
  }
  i {
    font-size: 18.5px;
  }
`

export default App

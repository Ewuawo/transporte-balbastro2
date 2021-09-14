<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';
=======
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
//import Header from './components/Header';
import '../src';
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      <header className="App-header">
<<<<<<< Updated upstream
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
=======
        <NavBar />
>>>>>>> Stashed changes
      </header>
      <ItemListContainer />
    </div>
  );
}

export default App;

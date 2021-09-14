import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
//import Header from './components/Header';
import '../src';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <ItemListContainer />
    </div>
  );
}

export default App;

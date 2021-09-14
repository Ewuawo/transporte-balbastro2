import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
//import Header from './components/Header';
import '../src';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <ItemListContainer />
      <ItemCount stock = "5" initial= "1" />
    </div>
  );
}

export default App;

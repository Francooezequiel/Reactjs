
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/NavBar/ListaConteiner/ItemListConteiner';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListConteiner greetings ={"Bienvenidos A MundoGamer"} />
    </div>
  );
}


export default App;

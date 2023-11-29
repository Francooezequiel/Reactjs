
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import ItemRetailConteiner from './components/itemRetailContainer/itemRetailConteiner';
import ItemListConteiner from './components/ListaConteiner/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <ItemRetailConteiner greetings ={"Bienvenidos A MundoGamer"} />
      <Routes>
      <Route path="/" element={<ItemListConteiner/>}>Procesador</Route>
      <Route path="/category/:categoryId" element={<ItemListConteiner/>}>MotherBoard</Route>
      <Route path="/Item/:ItemId" element={<ItemDetailContainer/>}>Fuente De Almacenamiento</Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}


export default App;

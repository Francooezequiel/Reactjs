
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import ItemRetailConteiner from './components/itemRetailContainer/itemRetailConteiner';
import ItemListConteiner from './components/ListaConteiner/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/context/CartContext';
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <CartProvider>
      <NavBar/>
      <ItemRetailConteiner greetings ={"Bienvenidos A MundoGamer"} />
      <Routes>
      <Route path="/" element={<ItemListConteiner/>}>Procesador</Route>
      <Route path="/category/:categoryId" element={<ItemListConteiner/>}>MotherBoard</Route>
      <Route path="/item/:ItemId" element={<ItemDetailContainer/>}>Fuente De Alimentacion</Route>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/checkout'  element={<Checkout />}/>
      </Routes>
      </CartProvider>
      </BrowserRouter>

    </div>
  );
}


export default App;

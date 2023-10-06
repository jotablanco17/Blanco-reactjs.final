
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import NavBar from './componentes/navbar/navbar'
import Itemlistcontainer from './componentes/Itemlistcontainer/Itemlistcontainer';
import ItemDetailContainer from './componentes/itemDetailContainer/ItemDetailContainer';
import CartContextProvider from './componentes/context/CartContext';
import CartContainer from './componentes/CartContainer/CartContainer';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <>
      <Router>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<Itemlistcontainer />} />
            <Route path='/category/:cid' element={<Itemlistcontainer />} />
            <Route path='/detalle/:pidd' element={< ItemDetailContainer />} />
            <Route path='/cart' element={< CartContainer />} />
          </Routes>
        </CartContextProvider>
      </Router>
    </>
  )
}


export default App

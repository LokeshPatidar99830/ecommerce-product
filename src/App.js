import './App.css';
import { Provider } from 'react-redux';
import { store } from './Features/Store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
    <Header/>
    <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
  
    </Routes>
    </Router>

      </Provider>
    </div>
  );
}

export default App;

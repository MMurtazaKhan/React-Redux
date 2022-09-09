
import './App.css';
import Header from './components/Header';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import ProductComponent from './components/ProductComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path='/' exact element = {<ProductListing/>} />
          <Route path='/product/:productId' exact element = {<ProductDetail/>} />
          <Route path='/comp' exact element = {<ProductComponent/>}/>
          <Route>404 Not Found</Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

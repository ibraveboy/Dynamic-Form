import React from 'react';
import './App.css';
import AddProductForm from './Pages/AddProductForm/AddProductForm';
import { Route } from "react-router-dom"
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} exact />
      <Route path="/productsform" component={AddProductForm} exact/>
      <Route path="/productsform/:id" component={AddProductForm}/>
    </div>
  );
}

export default App;

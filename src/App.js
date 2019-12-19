import React from 'react';
import './App.css';
import AddProductForm from './Pages/AddProductForm/AddProductForm';
import { Route } from "react-router-dom"
import Home from './Pages/Home/Home';
import ThankYou from './Pages/ThankYou/ThankYou';
import 'typeface-roboto';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} exact />
      <Route path="/productsform/:id" component={AddProductForm} />
      <Route path="/thankyou" component={ThankYou} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;

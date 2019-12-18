import React from 'react';
import './App.css';
import AddProductForm from './Pages/AddProductForm/AddProductForm';
import { Route } from "react-router-dom"
import Home from './Pages/Home/Home';
import ThankYou from './Pages/FormSubmitted/ThankYou';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} exact />
      <Route path="/productsform/:id" component={AddProductForm} />
      <Route path="/thankyou" component={ThankYou}/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './structure/Header';
import Footer from './structure/Footer';
import Menu from './ice-cream/Menu';
import EditIceCream from './ice-cream/EditIceCream';
import {BrowserRouter as Router,Route} from 'react-router-dom';
// import './styles/ice-cream.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" component={Menu} exact />
      <Route path="/menu-items/:menuItemId" component={EditIceCream} />
      <Footer />
    </Router>
  );
};

export default App;

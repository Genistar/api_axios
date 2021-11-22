import React from 'react';
import Menu from './components/Menu/Menu';
import './App.css';
import ProductList from './components/ProductList/ProducList';
import routes from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="mt-100">
        <div className="container">
          <Menu />
          <div className="row">
            

            <Switch>{result}</Switch>
          </div>
        </div>
      </div>
    </Router>

  );
}
const result = routes.map((route, index) => {
  return <Route
    key={index}
    path={route.path}
    exact={route.exact}
    component={route.main}
  />
});


export default App;

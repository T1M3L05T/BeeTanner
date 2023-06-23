import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home, Honey, Bees, Services, ContactUs} from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

ReactDOM.render(
  <Router>
     <Routes>
        <Route exact path="/Home" component={Home}/>
        <Route exact path="/Honey" component={Honey}/>
        <Route exact path="/Bees" component={Bees}/>
        <Route exact path="/Services" component={Services}/>
        <Route exact path="/ContactUs" component={ContactUs}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

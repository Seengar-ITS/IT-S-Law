import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import NewAgreement from './pages/NewAgreement.jsx';
import Agreement from './pages/Agreement.jsx';
import Sign from './pages/Sign.jsx';
import Nav from './components/Nav.jsx';
export default function App(){
  return React.createElement(BrowserRouter,null,
    React.createElement(Nav),
    React.createElement(Routes,null,
    React.createElement(Route,{path:'/',element:React.createElement(Home)}),
    React.createElement(Route,{path:'/new',element:React.createElement(NewAgreement)}),
    React.createElement(Route,{path:'/agreement/:id',element:React.createElement(Agreement)}),
    React.createElement(Route,{path:'/sign/:id',element:React.createElement(Sign)})
    )
  );
}

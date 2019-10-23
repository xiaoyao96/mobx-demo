import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Home from './home';

const App: React.FC = function(){
  return (
    <HashRouter>
        <Route exact path="/" component={Home} />
      </HashRouter>
  )
}

export default App;
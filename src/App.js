import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Container from './components/utility/Container';


function App() {
  return (
    <Router>
      <Route exact path="/" component={Container} />
    </Router>
  );
}

export default App;

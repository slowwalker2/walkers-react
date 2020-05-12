import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import Header from './components/Header';
function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Switch>
          <Route path='/signin'>
            <SignInPage />
          </Route>
          <Route path='/'>
            <div></div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

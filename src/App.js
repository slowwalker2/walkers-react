import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import ArticleFormPage from './pages/ArticleFormPage';
import Header from './components/Header';
function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path='/signin'>
          <SignInPage />
        </Route>
        <Route path='/new'>
          <ArticleFormPage></ArticleFormPage>
        </Route>
        <Route path='/'>
          <div></div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

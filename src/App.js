import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import KeepPage from './pages/KeepPage';
import ArticleFormPage from './pages/ArticleFormPage';
import LinkArticleCardsPage from './pages/LinkArticleCardsPage';
import LinkArticleView from './pages/LinkArticleViewPage';
import Header from './components/Header';
import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <ToastProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/signin'>
            <SignInPage />
          </Route>
          <Route exact path='/keep'>
            <KeepPage></KeepPage>
          </Route>
          <Route exact path='/read'>
            <LinkArticleCardsPage></LinkArticleCardsPage>
          </Route>
          <Route exact path='/new'>
            <ArticleFormPage></ArticleFormPage>
          </Route>
          <Route exact path='/links/:id'>
            <LinkArticleView></LinkArticleView>
          </Route>
          <Route exact path='/trend'>
            <LinkArticleCardsPage></LinkArticleCardsPage>
          </Route>
          <Route path='/'>
            <div>1</div>
          </Route>
        </Switch>
      </Router>
    </ToastProvider>
  );
}

export default App;

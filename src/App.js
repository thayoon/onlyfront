import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ArticlePage from './components/pages/ArticlePage';
import ArticleContainer from './containers/ArticleContainer';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <div className="App">
    <Routes>
      {/* <Route element={<ArticleListPage />} path="/" /> */}
      <Route element={<ArticleContainer />} path="/" />
      <Route path="/article/:type/:id" element={<ArticlePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  );
};

export default App;
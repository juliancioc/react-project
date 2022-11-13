import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { BooksProvider } from './context/useBooks';
import Routes from './routes';

function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes />
      </Router>
    </BooksProvider>
  );
}

export default App;

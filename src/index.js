import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Main from './components/main/main';
import App from './components/app/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	 <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={<App/>}
            />
			 <Route
              exact
              path="/main"
              element={<Main/>}
            />
				    </Routes>
        </Router>
  </React.StrictMode>
);
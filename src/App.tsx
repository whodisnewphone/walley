import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/global.scss';
import Dashboard from './pages/Dashboard';
import TransactionContextProvider from './ctx/TransactionContext';

function App() {
  return (
    <Router>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="app">
        <main id="main-content">
          <TransactionContextProvider>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </TransactionContextProvider>
        </main>
      </div>
    </Router>
  );
}

export default App;

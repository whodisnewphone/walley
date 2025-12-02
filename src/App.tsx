import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/global.scss';
import Dashboard from './pages/Dashboard';
import TransactionContextProvider from './ctx/TransactionContext';
import TransactionPage from './pages/TransactionPage';

function App() {
  return (
    <TransactionContextProvider>
    <Router>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="app">
        <main id="main-content">
         
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/transaction/:id" element={<TransactionPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          
        </main>
      </div>
    </Router>
    </TransactionContextProvider>
  );
}

export default App;

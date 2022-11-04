import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import CreateForm from './pages/CreateForm';

function App() {
  return (
    <div className="App">
      <HashRouter >
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='form' element={<CreateForm />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

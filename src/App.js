import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/index.jsx';
import Home from './pages/Home/index.jsx';
import Signin from './pages/Signin/index.jsx';
import Profile from './pages/Profile/index.jsx';
import Transaction from './pages/Transaction/index.jsx';
import Footer from './components/Footer/index.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/user/:id/transaction" element={<Transaction />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

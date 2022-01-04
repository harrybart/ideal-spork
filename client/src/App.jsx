import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ImportWallet from './pages/ImportWallet';
import Wallets from './pages/Wallets';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Home />} index/>
        <Route  path="/wallets" element={<Wallets />} index/>
        <Route  path="/importwallets/:walletName" element={<ImportWallet />} index/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

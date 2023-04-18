import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Views/Header/Header';
import Footer from './components/Views/Footer/Footer';
import HomePage from './components/Pages/HomePage/HomePage';
import Cart from './components/Pages/Cart/Cart';
import OrderForm from './components/Pages/OrderForm/OrderForm';

function App() {
  return (
    <div>
      <Router>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/cart" element={<Cart />} />
            <Route path="/orderForm" element={<OrderForm />} />
          </Routes>  
          <Footer /> 
        </Container>
      </Router>  
    </div>
  );
}

export default App;

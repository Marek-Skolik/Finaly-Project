import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Views/Header/Header';
import Footer from './components/Views/Footer/Footer';
import HomePage from './components/Pages/HomePage/HomePage';
import Cart from './components/Pages/Cart/Cart';
import OrderForm from './components/Pages/OrderForm/OrderForm';
import ProductPage from './components/Pages/ProductPage/ProductPage';
import SingleProduct from './components/Pages/SingleProduct/SingleProduct';
import ContactPage from './components/Pages/ContactPage/ContactPage';
import AboutUsPage from './components/Pages/AboutUsPage/AboutUsPage';
import SalePage from './components/Pages/SalePage/SalePage';
import Delivery from './components/Views/Footer/Delivery/Delivery';
import Payments from './components/Views/Footer/Payments/Payments';
import Returns from './components/Views/Footer/Returns/Returns';

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
              <Route path="/productPage" element={<ProductPage />} />
              <Route path="/singleProduct" element={<SingleProduct />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/aboutUsPage" element={<AboutUsPage />} />
              <Route path="/salePage" element={<SalePage />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/returns" element ={<Returns />} />
            </Routes>  
            <Footer /> 
          </Container>
        </Router>  
      </div>
  );
}

export default App;

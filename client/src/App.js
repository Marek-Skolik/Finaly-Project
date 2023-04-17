import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Views/Header/Header';
import Footer from './components/Views/Footer/Footer';
import HomePage from './components/Pages/HomePage/HomePage';

function App() {
  return (
    <div>
      <Router>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage/>}/> 
          </Routes>  
          <Footer /> 
        </Container>
      </Router>  
    </div>
  );
}

export default App;

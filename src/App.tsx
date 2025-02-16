import { useEffect } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

// Styles
import './styles/App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Components
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  // Disable scroll restoration
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0);
  }, []);
  return (
    <Router basename={"/prolife-konkurs"}>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </Router>
  )
}

export default App;


import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import NotFound from './components/pages/notFound';
import Tables from './components/pages/tables';
import { Container } from 'react-bootstrap'
import Header from './components/views/header';
import Footer from './components/views/footer';

const App = () => {
  return (<div>
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  </div>)
}

export default App;

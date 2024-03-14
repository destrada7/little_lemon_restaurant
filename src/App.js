import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Specials from './components/SpecialsSection'
import Prefooter from './components/Prefooter';
import Footer from './components/Footer';
import Testimonials from './components/TestimonialsSection';
import './App.css';


function App() {
  return (
    <>
    <div className='nav-container'>
      <Header />
      <Nav />
    </div>
    <Main />
    <Specials />
    <Testimonials />
    <Prefooter />
    <Footer />
    </>
  );
}

export default App;

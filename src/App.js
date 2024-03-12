import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Specials from './components/Specials'
import Prefooter from './components/Prefooter';
import Footer from './components/Footer';
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
    <Prefooter />
    <Footer />
    </>
  );
}

export default App;


import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Main from './components/sections/Main';
import Footer from './components/footer/Footer';

function App() {
  
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Navbar/>
        <Main />
        <Footer/>
      </div>
    </div>
  );
}

export default App;

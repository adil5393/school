
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Main from './components/sections/Main';
import Footer from './components/footer/Footer';
import { MyProvider } from './components/context/MyContext'
function App() {
  
  return (
    <div className="App">
      <div className="container">
        <MyProvider>
            <Header/>        
            <Navbar/>
            <Main/>
        <Footer/>
        </MyProvider>
      </div>
    </div>
  );
}

export default App;

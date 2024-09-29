
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Main from './components/sections/Main';
import Footer from './components/footer/Footer';
import { MyProvider } from './components/context/MyContext'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
    const links = [
      "/",
      "Infrastructure",
      "HouseSystem",
      "Uniform",
      "TestSchedule",
      "PublicDisclosure",
      "MailingList",
      "BookList2024_25",
      "RecentActivities",
      "Videos",
      "MediaAndNews",
      "FeeStructure",
      "Procedure",
      "ApplyOnline"
  ];
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <MyProvider>
            <Header/>        
            <Navbar/>
              <Routes>
                {links.map((item,index)=>(
                  <Route path={`/${item}`} element={<Main/>}></Route>
                ))}
              </Routes>
            <Footer/>
          </MyProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

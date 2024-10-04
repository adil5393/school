
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import HomeSection from './components/sections/Homesection';
import Footer from './components/footer/Footer';
import { MyProvider } from './components/context/MyContext'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {BookList2024_25,HouseSystem,Infrastructure,MailingList,PublicDisclosure,TestSchedule,Uniform} from './components/navbar/Links/Information';
import {ApplyOnline,FeeStructure,Procedure} from './components/navbar/Links/Admissions';
import {MediaAndNews,RecentActivities,Videos} from './components/navbar/Links/Gallery';



function App() {
  const components = {
    Infrastructure:<Infrastructure/>,
    HouseSystem: <HouseSystem />,
    Uniform: <Uniform />,
    TestSchedule: <TestSchedule />,
    PublicDisclosure: <PublicDisclosure />,
    MailingList: <MailingList />,
    BookList2024_25: <BookList2024_25 />,
    RecentActivities: <RecentActivities />,
    Videos: <Videos />,
    MediaAndNews: <MediaAndNews />,
    FeeStructure: <FeeStructure />,
    Procedure: <Procedure />,
    ApplyOnline: <ApplyOnline />,
  }
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <MyProvider>
            <Header/>        
            <Navbar class="mainNav"/>
              <Routes>
                {Object.keys(components).map(key=>(
                  <Route path={`/${key}`} element={components[key]}></Route>
                ))}
                <Route path="*" element={<HomeSection/>} />
              </Routes>
            <Footer/>
          </MyProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

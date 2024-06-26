import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import StudentButtons from "./pages/studentButtons";
import PictureBooks from "./pages/pictureBooks";

function App() {
  return (
      <div className={'h-[100vh] flex flex-col text-center'}>
      {/*<Header />*/}
      <div className="grow max-h-full overflow-auto">
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<PictureBooks />}/>
              <Route path='/:student' element={<StudentButtons />}/>
            </Routes>
        </BrowserRouter>
      </div>
      {/*<Footer/>*/}
      </div>
  );
}

export default App;

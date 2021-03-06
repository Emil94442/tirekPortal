import './App.css';
import { Header } from './–°omponents/moleculas';
import { Routes,Route,} from "react-router-dom"
import { MainPage,Admin,ContactPage} from './Pages';

function App() {
  return (
    <div className="App">
         <Header />

        <div className="content_wrapper">
          <Routes>
            <Route path={"/"} element={<MainPage/>}/>
            <Route path={"/admin"} element={<Admin/>}/>
            <Route path={"/contacts"} element={<ContactPage/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;

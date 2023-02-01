import './App.css';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Home from './pages/homePage/Home';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Step2 from './pages/step2/Step2';
import Step3 from './pages/step3/Step3';
import Step4 from './pages/step4/Step4';
import Step5 from './pages/step5/Step5';
import Step6 from './pages/step6/Step6';
import Final from './pages/final/Final';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Routes>
      <Route path = "/" element ={<Home/>}/>
      <Route path='/step2' element = {<Step2/>}/>
      <Route path='/step3' element = {<Step3/>}/>
      <Route path='/step4' element = {<Step4/>}/>
      <Route path='/step5' element = {<Step5/>}/>
      <Route path='/step6' element = {<Step6/>}/>
      <Route path='/final' element = {<Final/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

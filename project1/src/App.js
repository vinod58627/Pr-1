import { BrowserRouter,Routes, Route } from "react-router-dom"
//bootstrap
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Header from './components/layout/Header'

//Routing
import Home from './components/Home'
import About from './components/About'
import One from './components/One'
import Two from './components/Two'
import Three from './components/Three'
import Four from './components/four'
import Five from './components/Five'
import Six from './components/Six'
import Seven from './components/Sevn'
import Eight from "./components/Eight"
import Nine from './components/Nine'
import Ten from './components/Ten'
import Reg from './components/Reg'
import Page from './components/Page'
import Ex1 from './components/Ex1'
import Ex2 from './components/Ex2'
import Jsx from './components/jsx'




function App() {
  return (<BrowserRouter>
    <Header />
    
    <Routes>
        <Route path="" element={ <Home/> } />
        <Route path="home" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="one" element={ <One/> } />
        <Route path="two" element={ <Two/> } />
        <Route path="three" element={ <Three/> } />
        <Route path="four" element={ <Four/> } />
        <Route path="five" element={ <Five/> } />
        <Route path="six" element={ <Six/> } />
        <Route path="seven" element={ <Seven/> } />
        <Route path="eight" element={ <Eight />} />
        <Route path="nine" element={ <Nine />} />
        <Route path="ten" element={ <Ten />} />
        <Route path="reg" element={ <Reg />} />
        <Route path="page" element={ <Page />} />
        <Route path="ex1" element={ <Ex1 />} />
        <Route path="ex2" element={ <Ex2 />} />
        <Route path="jsx" element={ <Jsx />} />

      
      </Routes>

    
      </BrowserRouter>);
}

export default App;

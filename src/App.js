import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import Blog from './Blog'
import ContactUs from './ContactUs'
function App() {
  return (
    <>
    <BrowserRouter>
  
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/AboutUs' element={<AboutUs/>}/>
<Route path='/ContactUs' element={<ContactUs/>}/>
<Route path='/Blog' element={<Blog/>}/>
</Routes>
</BrowserRouter>
   
    </>
  );
}

export default App;


import './App.css';


import ListEmployeeComponent from './components/ListEmployeeComponent';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<ListEmployeeComponent/>}></Route>
        {/*  http://localhost:3000/empoyees */}
        <Route path='/employees' element ={<ListEmployeeComponent/>}></Route>
      </Routes>
      
    </BrowserRouter>
   </>
  );
}

export default App;

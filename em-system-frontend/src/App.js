
import './App.css';
import EmployeeComponent from './components/EmployeeComponent';


import ListEmployeeComponent from './components/ListEmployeeComponent';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<ListEmployeeComponent/>}></Route>
        {/*  http://localhost:3000/employees */}
        <Route path='/employees' element ={<ListEmployeeComponent/>}></Route>
        <Route path='/addEmployee' element={<EmployeeComponent/>} ></Route>
        <Route path='/edit-employee/:id' element = {<EmployeeComponent/>}></Route>
      </Routes>
      
    </BrowserRouter>
   </>
  );
}

export default App;

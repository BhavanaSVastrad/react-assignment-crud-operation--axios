import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './Components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmpCreate from './Components/Create';
import EmpEdit from './Components/Edit';
import EmpDetail from './Components/Detail';



function App() {
  return (
    <div className="App">
      <h1>React JS CRUD Opertations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>

          <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
import logo from './logo.svg';
import './App.css';
import { Form } from './components/form';
import { Link, Route, Routes } from 'react-router-dom';
import { StudentDetails } from './components/studentDetails/studentDetails';
import { Edit } from './components/studentDetails/editPage/editPage';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App container">
      <div className='container-md'>
        {/* <Link to="/form" className='link'>Student Form</Link> */}
        
        <a href="/form" class="btn btn-outline-warning" style={{"margin":"0 20px"}}>Student Form</a>


        <a href="/details" class="btn btn-outline-success">Student Details</a>

        {/* <Link to="/details" className='link'>Student Details</Link> */}

      </div>
      <Routes>
        <Route path='/form' element={<Form/>}>
          
        </Route>
        <Route path='/details' element={<StudentDetails/>} > 
          
        </Route>

        <Route path="/student/:id"  element={<Edit/>} ></Route>
      </Routes>
      
         {/* <Form/> */}
    </div>
  );
}

export default App;

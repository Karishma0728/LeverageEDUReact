import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddListComponent from './Components/AddListComponent';
import TasksBoxComponent from './Components/TasksBoxComponent';
import EditTaskComponent from './Components/EditTaskComponent';
import Weather from './Pages/WeatherPage.jsx';
import Calculator from './Pages/Calculator';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/taskBoxConponent" element={<TasksBoxComponent/>} ></Route>
        <Route path="/weather" element={<Weather/>}></Route>
        <Route path="/calculator" element={<Calculator/>}></Route>
      </Routes>
    </BrowserRouter>

    
    </>
  );
}

export default App;

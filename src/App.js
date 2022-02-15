import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import AppNavbar from './components/AppNavbar';

//pages
import Home from './pages/Home';
import Task1 from './pages/Task1';
import Task2 from './pages/Task2';
import Task3 from './pages/Task3';
import Task4 from './pages/Task4';
import Task5 from './pages/Task5';

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
        <Routes>
          <Route path="/ewave" element={<Home />}/>
          <Route path="/ewave/task1" element={<Task1 />}/>
          <Route path="/ewave/task2" element={<Task2 />}/>
          <Route path="/ewave/task3" element={<Task3 />}/>
          <Route path="/ewave/task4" element={<Task4 />}/>
          <Route path="/ewave/task5" element={<Task5 />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

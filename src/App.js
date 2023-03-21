import "./App.css";
import CounterFC from "./components/CounterFC";
import DataFetch2 from "./components/DataFetch2";
import Task1 from "./components/Task1";
// import Todo from "./components/Todo";
import RouterTest from "./components/Router";
// import Count from "./count";
import { Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import Counter from './pages/Counter';
import Todo from './pages/Todo';
import Task from './pages/Task';
import PageError from './pages/PageError';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<Counter/>}></Route>
          <Route path="/todo" element={<Todo/>}></Route>
          <Route path="/task" element={<Task/>}></Route>
          <Route path="*" element={<PageError/>}></Route>
        </Routes>
        {/* <Typography variant="h2" >Home</Typography> */}
        {/* <Count label="Clicked!" /> */}
        {/* <CounterFC/>
        <Task1/>
        <DataFetch2/> */}
        {/* <Todo/> */}
      </div>
    </div>
  );
}

export default App;

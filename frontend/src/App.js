import Navbar from "./Components/Navbar";
import AllNotes from "./Pages/AllNotes";
import CreateNote from "./Pages/CreateNote";
import UpdateNote from "./Pages/UpdateNote";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/allNotes' element={<AllNotes/>}/>
      <Route path='/createNote' element={<CreateNote/>}/>
      <Route path='/updateNote/:id' element={<UpdateNote/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;

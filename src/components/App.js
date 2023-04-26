import Album from "./Album";
import ImageFolder from "./ImageFolder";
import Navbar from "./Navbar";
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Album/>} />
        <Route exact path='/album/:postId' element={<ImageFolder/>} />
      </Routes>
    </div>
  );
}

export default App;

import Album from "./Album";
import logo from '../assets/logo.png';
function App() {
  return (
    <div className="App">
      <header>
        <div className="navbar">
          <img src={logo} alt="logo" />
          <text>PhotoFolio</text>
        </div>
      </header>
      <Album />
    </div>
  );
}

export default App;

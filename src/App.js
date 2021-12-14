
import './App.css';
import Navbar from './component/navbar';
import Weather from './component/weather';
import Contact from './component/Contact';


function App() {
  return (
    <div className="App bg-dark">
      <Navbar /><br /><br />
      <Weather/>
      <Contact />

    </div>
  );
}

export default App;

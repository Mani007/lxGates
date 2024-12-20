import logo from './logo.svg';
import './App.css';
import Firstchart from './components/Firstchart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Firstchart/>
      </header>
    </div>
  );
}

export default App;

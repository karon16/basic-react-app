import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the React Page of Christopher Buhendwa
        </p>
        <button className="App-button" onClick={() => alert("Button clicked!")}>
          Click Me
        </button>
      </header>
    </div>
  );
}

export default App;

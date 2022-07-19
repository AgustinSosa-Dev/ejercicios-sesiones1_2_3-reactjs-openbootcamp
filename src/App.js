import logo from "./logo.svg";
import "./App.css";
import ContactComponent from "./components/container/componentA";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente A (ContactComponent): Renderizado dentro de App.js */}
        <ContactComponent></ContactComponent>
      </header>
    </div>
  );
}

export default App;

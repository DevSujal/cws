import './App.css';
import CurrencyCalculator from "./components/CurrenyCalculator";
import Header from "./components/Header";
import Submit from './components/Submit';

function App() {
  let variable = {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    backgroundColor: "snow",
    color : "black"
}
  return (
    <>
    <div className="App"  style={variable}>
      <form action="">
      <Header />
      <CurrencyCalculator amount = {4}/>
      <Submit />
      </form>
    </div>
    </>
  );
}

export default App;

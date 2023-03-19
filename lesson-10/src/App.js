import './App.css';

function App() {

  let name = "Ahror"
  
  const handleClick = () => {
    name = "Doniyor"
    console.log(name)
  }

  return (
    <div className="App">
        <h1>My name is {name}</h1>
        <button onClick={handleClick}>Change name</button>
    </div>
  );
}

export default App;
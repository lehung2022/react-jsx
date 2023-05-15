import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleNameChange = () => {
    const name = ["Hung", "Long", "Minh"];
    const int = Math.floor(Math.random() * 3);
    return name[int];
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h4>
          {handleNameChange()}
        </h4>
     
      </div>
    </>
  )
}

export default App;

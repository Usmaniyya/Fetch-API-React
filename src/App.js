import './App.css';
import { useState, useEffect } from 'react';
import Cards from './components/Cards';

function App() {
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    fecthPost().then(response => setResults(response))
  }, [])

  const fecthPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())

    return response;
  }

  return (
    <div className="App">
    <h1>Fetch Post</h1>
        <Cards results = {results} />
    </div>
  );
}

export default App;

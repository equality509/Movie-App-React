import {useState, useEffect} from "react"
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';


function App() {

const apiKey = "d7009a9f"

// declare our state
const [movie, setMovie] = useState(null)

// function to get movie
const getMovie = async (searchTerm) => {
  // Make api call and get back response
  const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
  // convert the response into a javascript object
  const data = await response.json()
  // update the movie state
  setMovie(data)
}

console.log("log in the body of the component")
  useEffect(()=>{
    getMovie('Swiss Army Man')
    console.log("log in the use effect")
  }, [])

return (
  <div className="App">
    <Form moviesearch={getMovie} />
    <MovieDisplay movie={movie}/>
  </div>
);
}

export default App;







import React, { useEffect , useState} from 'react'
import axios from 'axios'
const apikey = "dc4a86911275397345a45711cc673d67"
const url = "https://api.themoviedb.org/3"
const popular = 'popular';
export default function Api() {
  const [popularMovies,setPopularMovies] = useState([])
  useEffect(() => {
      const fetchPopular = async()=>{
  const {data:{results}}= await axios.get(`${url}/movie/${popular}?api_key=${apikey}`)
  setPopularMovies(results)
  console.log(popularMovies);
  }
      fetchPopular();
  }, [])
  
  return (
    <header
      className="banner1"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/c/cd/Black_flag.svg")`,
        backgroundPosition: "center center",
      }}>
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>{" "}
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae non
          recusandae ad repellat culpa eum nesciunt, nobis excepturi qui,
          assumenda nostrum autem rem totam saepe doloribus quae neque
          reprehenderit reiciendis, 
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  )
}

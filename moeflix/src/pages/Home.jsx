import MovieCard from "../components/MovieCard"
import { useState } from "react";
import '../css/Home.css'


function Home(){

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Iron Man", release_date: "2012"},
        {id: 2, title: "Spider-Man: HomeComing", release_date: "2021"},
        {id: 3, title: "Thor", release_date: "2014"},
        {id: 4, title: "Guardians Of The Galaxy", release_date: "2019"},
    ]

    const handleSearch =(e)=>{
        e.preventDefault()
        alert(searchQuery)
        // setSearchQuery("---")
    };


    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="Search for a Movie..." 
                className="search-input" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-btn">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map(
                (movie) =>
                /*movie.title.toLowerCase().startsWith(searchQuery) &&*/ (
                <MovieCard movie={movie} key={movie.id} />
                )
            )}
        </div>
    </div>
}

export default Home
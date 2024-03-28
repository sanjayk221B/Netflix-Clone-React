import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjljOWJhNDAzNTA4YTk0YTkzY2ZmYmIwMDFmYmNiZSIsInN1YiI6IjY1ZmU4ZWI4MTk3ZGU0MDE4NjE4Mzk5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qrBp_35D2c_xPe7KXezBh6yen8GAyDPL_jgQsHEKjAI",
        },
      }
    );
    const json = await data.json();
    console.log("popular", json);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;

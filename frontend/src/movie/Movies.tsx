import { useEffect, useState } from 'react';
import { Movie } from './Movie';

function MovieList() {
  const [activeMovieList, setActiveMovieList] = useState<Movie[]>([]);

  useEffect(() => {
    const movieFetch = async () => {
      const url = 'http://localhost:4000/api';
      const res = await fetch(url + '/Movie');
      const data = await res.json();
      setActiveMovieList(data.movies);
    };
    movieFetch();
  }, []);

  console.log(activeMovieList);

  return (
    <div>
      <div>
        <h1>Joel Hilton's Movie Collection</h1>
      </div>
      <div>
        <table className="table table-bordered table-striped">
          <thead className="font-weight-bold">
            <tr>
              <td>Title</td>
              <td>Year</td>
              <td>Director</td>
              <td>Rating</td>
              <td>Category</td>
              <td>Edited</td>
              <td>Lent</td>
              <td>Notes</td>
            </tr>
          </thead>
          <tbody>
            {activeMovieList.map((m) => (
              <tr key={m.MovieId}>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
                <td>{m.LentTo}</td>
                <td>{m.Notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ); //<td>{m.CategoryId}</td>
}

export default MovieList;

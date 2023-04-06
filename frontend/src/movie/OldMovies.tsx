import { useState } from 'react';
import MovieForm from './MovieForm';
import data from '../NewMovieData.json';
const dataSample = data.MovieData;

function OldMovieList() {
  const [movieList, setMovies] = useState(dataSample);

  const [formData, setMovieData] = useState({
    title: 'Title',
    year: 'Year',
    director: 'Director',
    rating: 'Rating',
    category: 'Category',
    edited: false,
    id: movieList.length + 1,
  });

  const handleChange = (event: any) => {
    const { name, value, type, checked } = event.target;
    setMovieData((movieList) => ({
      ...movieList,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const addMovie = (e: any) => {
    e.preventDefault();
    setMovies([
      ...dataSample,
      {
        Title: formData.title,
        Year: formData.year,
        Director: formData.director,
        Rating: formData.rating,
        Category: formData.category,
        Edited: formData.edited ? 'Yes' : 'No',
        MovieId: movieList.length,
      },
    ]);
    setMovieData({
      title: '',
      year: '',
      director: '',
      rating: '',
      category: '',
      edited: false,
      id: movieList.length,
    });
  };

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
            </tr>
          </thead>
          <tbody>
            {movieList.map((m) => (
              <tr key={m.MovieId}>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <MovieForm
          //movies={formData}
          handleChange={handleChange}
          handleSubmit={addMovie}
        />
      </div>
    </div>
    //<td>Edited</td>
    //<td>{m.Edited}</td>
  );
}

export default OldMovieList;

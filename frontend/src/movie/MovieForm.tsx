function MovieForm(props: any) {
  const { handleChange, handleSubmit } = props; // formData,
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          //value={formData.title}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="year">Year</label>
        <input
          type="number"
          name="year"
          //value={formData.year}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="director">Director</label>
        <input
          type="text"
          name="director"
          //value={formData.director}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="rating">Rating</label>
        <select
          name="rating"
          //value={formData.rating}
          onChange={handleChange}
          className="form-control"
        >
          <option value="PG">PG</option>
          <option value="PG-13">PG-13</option>
          <option value="R">R</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          //value={formData.category}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-check">
        <input
          type="checkbox"
          name="edited"
          //checked={formData.edited}
          onChange={handleChange}
          className="form-check-input"
        />
        <label htmlFor="edited" className="form-check-label">
          Edited
        </label>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
}

export default MovieForm;

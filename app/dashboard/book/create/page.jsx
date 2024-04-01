"use client";
export default function BookCreate({ book, authors, genres, onSubmit }) {
  return (
    <div>
      <div className="text-4xl">Create Book</div>
      {/* <form method="POST" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            className="form-control"
            type="text"
            placeholder="Name of book"
            name="title"
            required
            value={book ? book.title : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <select id="author" className="form-control" name="author" required>
            <option value="">--Please select an author--</option>
            {authors.map((author) => (
              <option
                key={author._id}
                value={author._id}
                selected={
                  book && author._id.toString() === book.author._id.toString()
                }
              >
                {author.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="summary">Summary:</label>
          <textarea
            id="summary"
            className="form-control"
            placeholder="Summary"
            name="summary"
            required
            value={book ? book.summary : ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="isbn">ISBN:</label>
          <input
            id="isbn"
            className="form-control"
            type="text"
            placeholder="ISBN13"
            name="isbn"
            value={book ? book.isbn : ""}
            required
          />
        </div>
        <div className="form-group">
          <label>Genre:</label>
          <div>
            {genres.map((genre) => (
              <div
                key={genre._id}
                style={{ display: "inline", paddingRight: "10px" }}
              >
                <input
                  className="checkbox-input"
                  type="checkbox"
                  name="genre"
                  id={genre._id}
                  value={genre._id}
                  checked={genre.checked}
                />
                <label htmlFor={genre._id}>&nbsp;{genre.name}</label>
              </div>
            ))}
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form> */}
    </div>
  );
}

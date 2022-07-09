import MUITable from "./common/table/MUITable";

const createColumns = (label, path) => {
  return { label, path };
};

const columns = [
  createColumns("Title", "title"),
  createColumns("Genre", "genre.name"),
  createColumns("Stock", "numberInStock"),
  createColumns("Price", "dailyRentalRate"),
  createColumns("", "like"),
  createColumns("", "delete"),
];

const MoviesTable = ({ movies, sortBy, onDelete, onLike, onSort }) => (
  <MUITable
    columns={columns}
    movies={movies}
    sortBy={sortBy}
    onDelete={onDelete}
    onLike={onLike}
    onSort={onSort}
  />
);

export default MoviesTable;

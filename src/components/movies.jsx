import { useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import CustomPagination from "./common/CustomPagination";
import paginate from "../utils/paginate";
import MoviesTable from "./MoviesTable";
import List from "./common/ListGroup";
import { Typography, Container, Grid, Box } from "@mui/material";
import _ from "lodash";

const Movies = () => {
  const [movies, setMovies] = useState(getMovies());
  const [genres, setGenres] = useState([
    { name: "All Genres", _id: "" },
    ...getGenres(),
  ]);
  const [pageSize, setPageSize] = useState(4);
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  const [sortBy, setSortBy] = useState({ column: "title", order: "asc" });

  const handleDelete = (movieDelete) => {
    const remainingMovies = movies.filter(
      (movie) => movie._id !== movieDelete._id
    );
    setMovies(remainingMovies);
  };

  const handleLike = (movie) => {
    const allMovies = [...movies];
    allMovies.find((m) => m._id === movie._id).liked = !movie.liked;
    setMovies(allMovies);
  };

  const handlePageChange = (event, value) => {
    setPageNumber(value);
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setPageNumber(1);
  };

  const handleSort = (newSortBy) => {
    setSortBy(newSortBy);
  };

  const filteredMovies =
    selectedGenre._id != ""
      ? movies.filter((m) => m.genre._id === selectedGenre._id)
      : movies;

  const sortedMovies = _.orderBy(
    filteredMovies,
    [sortBy.column],
    [sortBy.order]
  );

  const displayMovies = paginate(sortedMovies, pageNumber, pageSize);

  if (movies.length === 0)
    return (
      <Container>
        <p>There are no movies to play</p>
      </Container>
    );

  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item>
          <List
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={handleGenreSelect}
          />
        </Grid>
        <Grid item>
          <Typography variant="h6" my={2}>
            Showing {filteredMovies.length} movies from the database.
          </Typography>
          <MoviesTable
            movies={displayMovies}
            sortBy={sortBy}
            onDelete={handleDelete}
            onLike={handleLike}
            onSort={handleSort}
          />
          <Box display="flex" justifyContent="center">
            <CustomPagination
              itemsCount={filteredMovies.length}
              pageNumber={pageNumber}
              pageSize={pageSize}
              onPageChange={handlePageChange}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Movies;

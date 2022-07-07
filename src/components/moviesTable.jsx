import Like from "./common/like";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableHeader from "./common/tableHeader";

const MoviesTable = ({ movies, onDelete, onLike, onSort }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ fontWeight: "bold" }}
              onClick={() => onSort("title")}
            >
              Title
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold" }}
              onClick={() => onSort("genre.name")}
            >
              Genre
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontWeight: "bold" }}
              onClick={() => onSort("numberInStock")}
            >
              Stock
            </TableCell>
            <TableCell
              align="right"
              sx={{ fontWeight: "bold" }}
              onClick={() => onSort("dailyRentalRate")}
            >
              Price
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}></TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((movie) => (
            <TableRow
              key={movie.title}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {movie.title}
              </TableCell>
              <TableCell>{movie.genre.name}</TableCell>
              <TableCell align="right">{movie.numberInStock}</TableCell>
              <TableCell align="right">{movie.dailyRentalRate}</TableCell>
              <TableCell align="right">
                <Like liked={movie.liked} onClick={() => onLike(movie)} />
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => onDelete(movie)}
                >
                  DELETE
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MoviesTable;

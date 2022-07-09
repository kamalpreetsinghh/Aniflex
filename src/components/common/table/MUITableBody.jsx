import Like from "../Like";
import { TableBody, TableRow, TableCell, Button } from "@mui/material";

const MUITableBody = ({ movies, columns, onLike, onDelete }) => (
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
);

export default MUITableBody;

import { Paper, Table, TableContainer } from "@mui/material";
import MUITableHeader from "./MUITableHead";
import MUITableBody from "./MUITableBody";

const MUITable = ({ columns, movies, sortBy, onDelete, onLike, onSort }) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <MUITableHeader columns={columns} sortBy={sortBy} onSort={onSort} />
      <MUITableBody
        columns={columns}
        movies={movies}
        onDelete={onDelete}
        onLike={onLike}
      />
    </Table>
  </TableContainer>
);

export default MUITable;

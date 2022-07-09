import { TableHead, TableRow, TableCell } from "@mui/material";

const MUITableHead = ({ columns, sortBy, onSort }) => {
  const raiseSort = (column) => {
    const newSortBy = { ...sortBy };
    if (newSortBy.column === column) {
      newSortBy.order = newSortBy.order === "asc" ? "desc" : "asc";
    } else {
      newSortBy.column = column;
      newSortBy.order = "asc";
    }

    onSort(newSortBy);
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.path}
            sx={{ fontWeight: "bold" }}
            onClick={() => raiseSort(column.path)}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default MUITableHead;

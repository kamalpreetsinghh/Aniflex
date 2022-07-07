import { TableCell, TableHead, TableRow } from "@mui/material";

const TableHeader = ({ columns }) => {
  <TableHead>
    {columns.map((column) => (
      <TableRow key={column.path}>
        <TableCell
        //   sx={{ fontWeight: "bold" }}
        //   onClick={() => onSort(column.path)}
        >
          column.label
        </TableCell>
      </TableRow>
    ))}
    <TableRow key="hfdjv">
      <TableCell
      //   sx={{ fontWeight: "bold" }}
      //   onClick={() => onSort(column.path)}
      >
        jvkdf
      </TableCell>
    </TableRow>
  </TableHead>;
};

export default TableHeader;

import Pagination from "@mui/material/Pagination";
import PropTypes from "prop-types";

const CustomPagination = ({
  itemsCount,
  pageSize,
  pageNumber,
  onPageChange,
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;

  return (
    <Pagination
      sx={{ my: 2 }}
      shape="rounded"
      count={pagesCount}
      page={pageNumber}
      onChange={onPageChange}
    />
  );
};

CustomPagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default CustomPagination;

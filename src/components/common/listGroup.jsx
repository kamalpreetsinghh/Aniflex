import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { indigo, red } from "@mui/material/colors";

const ListGroup = ({ items, selectedItem, onItemSelect }) => {
  const selectedButtonStyle = {
    bgcolor: indigo[500],
    color: indigo[50],
    borderRadius: 1,
    "&:hover": {
      color: indigo[50],
      bgcolor: indigo[400],
    },
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List>
        {items.map((item) => (
          <ListItem key={item._id}>
            <ListItemButton
              component="button"
              sx={
                item._id == selectedItem._id
                  ? selectedButtonStyle
                  : { borderRadius: 1 }
              }
              onClick={() => onItemSelect(item)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ListGroup;

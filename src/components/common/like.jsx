import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Like = ({ liked, onClick }) => {
    if(liked) {
        return <FavoriteIcon style={{cursor: 'pointer'}} onClick={onClick} />
    } 

    return <FavoriteBorderIcon style={{cursor: 'pointer'}} onClick={onClick} />
}

export default Like
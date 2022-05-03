
import TextField from '@mui/material/TextField';
import './search-box.style.css';

const SearchBox =(props)=> {

        return (
            <TextField id={props.Id} type={props.type} className="searchbox" label={props.placeholder} variant="outlined" onChange={props.onSearchHandler} />
        );
    
}
export default SearchBox;
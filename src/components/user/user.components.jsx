
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Link, useParams } from 'react-router-dom';
import './user.style.css';

const User = (props) => {

    const userDetails = props.user;
    const user_name = userDetails.name.first + " " + userDetails.name.last;
    const username = userDetails.login.username;

    
    return (


        <TableRow
            key={userDetails.login.uuid}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >

            <TableCell component="th" scope="row">
                <Link to={`/UserData/${username}`}>
                    <img src={userDetails.picture.medium} className="userPicture" alt={user_name} />
                </Link>
            </TableCell>

            <TableCell align="right"><Link to={`/UserData/${username}`}>{user_name}</Link></TableCell>
            <TableCell align="right">{userDetails.email}</TableCell>
            <TableCell align="right">{userDetails.gender}</TableCell>
            <TableCell align="right">{userDetails.dob.age}</TableCell>
        </TableRow >
    );

}

export default User;

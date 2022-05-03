import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import DataTabs from '../tabs/tabs.components';
import './userData.style.css'




const UserData = ({ usersList }) => {
    const [value, setValue] = useState(0);
    const[username,setUsername]=useState('');
    const[userdata,setUser]=useState([]);

    const handleChange = (event,newvalue) => {
        setValue(newvalue);
    };



    const { userName } = useParams();

    const LoadUser = () => {
        
        return usersList.map(user => {
            if (user.login.username === userName) {
                setUsername(user.name.first+' '+user.name.last);
                setUser(user);
                console.log(userdata)
                return (
                    <DataTabs user={user}/>
                    
                  
                );
            }
        }
        )
    }


    return (
        <div>
            
            <div className='pageContainer'>
                <h1>{username} Details</h1>
                
                <LoadUser />
            </div>
        </div>
    )
}

export default UserData;

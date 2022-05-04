import { useState, useEffect } from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import HomePage from './components/homePage/homePage.components';
import Navigation from './routes/navigation/navigation.components';
import UserData from './components/userData/userData.components';

const App = () => {
  const [usersList, setUsersList] = useState([]);
  const fetchData = () => {
    fetch(`https://randomuser.me/api/?page=?&results=150&seed=moveo`)
      .then((response) => response.json())
      .then((users) => setUsersList(users.results)
      );
  }
  
  useEffect(() => {
    fetchData();

  }, []);

  return (
    <Routes>
      
        <Route index element={<HomePage usersList={usersList}/>}/>
        <Route path='/' element={<Navigation/>}>
        <Route path='UserData/:userName' element={<UserData usersList={usersList}/>}/>
      </Route>
    </Routes>
    );
}

  export default App;

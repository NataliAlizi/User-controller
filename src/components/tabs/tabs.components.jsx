import { useState, useEffect } from 'react';
import { Box } from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import { AppBar } from '@mui/material';
import Tab from '@mui/material/Tab';
import './tabs.style.css'


const DataTabs = ({ user }) => {
    const TabPanel = (props) => {
        const { children, value, index } = props;
        return (
            <div>{
                value === index && (
                    <h2>{children}</h2>
                )}
            </div>
        );
    }

    const [tabNumber, setTabNumber] = useState(0);
    const handleTabs = (event, value) => {
        console.log(value)
        setTabNumber(value);
    }
    const [isShown, setIsShown] = useState(false);
    return (
        <div>
            <img src={user.picture.large} className="profileImg" />
            <AppBar position='static'>
                <Tabs className='Tabs' value={tabNumber} onChange={handleTabs}>

                    <Tab label="Age" > <div>check</div></Tab>
                    <Tab label="Gender" />
                    <Tab label="Email" />
                    <Tab label="Location" />
                </Tabs>
            </AppBar>
            <div className='dataUser'>
                <TabPanel value={tabNumber} index={0}>Age : {user.dob.age} </TabPanel>
                <TabPanel value={tabNumber} index={1}>Gender : {user.gender} </TabPanel>
                <TabPanel value={tabNumber} index={2}>
                    <span>Email:</span><a href={`mailto:${user.email}`} onMouseEnter={
                        () => setIsShown(true)
                    }
                        onMouseLeave={
                            () => setIsShown(false)
                        }>
                        <span className='email'>{user.email}</span>  {
                            isShown && (
                                <div className="emailPopup">
                                    Click to send an Email!
                                </div>
                            )
                        } </a>
                </TabPanel>
                <TabPanel value={tabNumber} index={3}>location : 
                <iframe title="map" src={`https://www.google.com/maps/@=${user.location.coordinates.latitude},${user.location.coordinates.longitude}`}/>
                </TabPanel>
            </div>
        </div>

    );

}
export default DataTabs;
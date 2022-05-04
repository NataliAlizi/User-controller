import './homePage.style.css'
import { useState, useEffect } from 'react';
import UserList from '../user-list/user-list.components';
import SearchBox from '../search-box/search-box.components';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';

const HomePage = (props) => {
    const { usersList } = props;
    const [filterList, setFilterList] = useState(usersList);
    const [pageNumber, setPageNumber] = useState(1);
    const [firstNameSearchQuery, setFirstNameSearchQuery] = useState('');
    const [lastNameSearchQuery, setLastNameSearchQuery] = useState('');
    const [emailSearchQuery, setEmailSearchQuery] = useState('');
    const [ageSearchQuery, setAgeSearchQuery] = useState([0, 100]);
    const [sliceList, setSliceList] = useState(usersList);
    
    const onSearchChange = (event) => {

        const searchQuery = event.target.value.toLocaleLowerCase();
        console.log(searchQuery)
        if (event.target.id === "firstName") {
            setFirstNameSearchQuery(searchQuery);
        }
        if (event.target.id === "lastName") {
            setLastNameSearchQuery(searchQuery);
        }
        if (event.target.id === "email") {
            setEmailSearchQuery(searchQuery);
        }
    }

    const handlePageing = (event) => {
        console.log("Event Page");
        if (event.target.id === "prevButton") {
            if (pageNumber > 1) {
                setPageNumber(pageNumber - 1);
            }
        } else {
            if(pageNumber<10){
            setPageNumber(pageNumber + 1);}
        }
    }
    useEffect(() => {
        const newFilteredList = usersList.filter((usersList) => {
            return usersList.name.first.toLocaleLowerCase().includes(firstNameSearchQuery) && usersList.name.last.toLocaleLowerCase().includes(lastNameSearchQuery)
                && usersList.email.toLocaleLowerCase().includes(emailSearchQuery) && (usersList.dob.age > ageSearchQuery[0] && usersList.dob.age < ageSearchQuery[1]);
        });
        setFilterList(newFilteredList);
        setPageNumber(1)
        sliceLists(filterList);
    }, [firstNameSearchQuery, lastNameSearchQuery, emailSearchQuery, ageSearchQuery]);

    useEffect(() => {
        sliceLists(usersList);
    }, [usersList,pageNumber]);

    useEffect(() => {
        sliceLists(filterList);
    }, [filterList]);

    const categories = [
        {
            Id: 'firstName',
            placeholder: 'First name :'
        },
        {
            Id: 'lastName',
            placeholder: 'Last name :'
        },
        {
            Id: 'email',
            placeholder: 'Email :'
        },
    ];

    const sliceLists =(props) => {
            const silce_list=props.slice((pageNumber * 10 - 10), (pageNumber * 10 ))
            setSliceList(silce_list)
    }

    const updateRange = (event, props) => {
        setAgeSearchQuery(props);
        console.log(ageSearchQuery)
    }

    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 10,
            label: '10',
        },
        {
            value: 20,
            label: '20',
        },
        {
            value: 30,
            label: '30',
        },
        {
            value: 40,
            label: '40',
        },
        {
            value: 50,
            label: '50',
        },
        {
            value: 60,
            label: '60',
        },
        {
            value: 70,
            label: '70',
        },
        {
            value: 80,
            label: '80',
        },
        {
            value: 90,
            label: '90',
        },
        {
            value: 100,
            label: '100',
        },
    ];

    return (
        <div className='App'>
            <h1 className='app-title'>All users</h1>
            <div className="searchLineZone">
                {categories.map(({ placeholder, Id }) =>
                    <SearchBox
                        onSearchHandler={onSearchChange}
                        placeholder={placeholder} Id={Id}
                        type="search" />
                )}

                <section className='sliderZone'>
                    <span className='ageRange'>Age Range</span>
                    <Slider  value={ageSearchQuery}
                        onChange={updateRange}
                        marks={marks}
                        step={10}
                    />
                </section>


            </div>

            <UserList usersList={sliceList} pagenumber={pageNumber} />

            <div className="ButtonArea">
                <Button variant="contained" id="prevButton" onClick={handlePageing} >
                    Prev
                </Button>

                <Button variant="contained" id="nextButton" onClick={handlePageing}>
                    Next
                </Button>
            </div>
        </div>
        
    );
}

export default HomePage;

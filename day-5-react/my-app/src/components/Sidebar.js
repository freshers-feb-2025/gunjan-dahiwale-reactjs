import React, { useEffect, useState } from 'react';
import styles from './Sidebar.module.css';

function Sidebar(props) {
    const [selectedAge, setSelectedAge] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [searchByTitle, setSearchByTitle] = useState('');

    const data = props.data || [];

    useEffect(() => {
        let result = data || [];
        if (selectedAge) {
            const ageLimit = parseInt(selectedAge.match(/\d+/), 10);
            result = result.filter((user) => user.age < ageLimit);
        }

        if (selectedGender) {
            result = result.filter((user) => user.gender.toLowerCase() === selectedGender.toLowerCase());
        }

        if (searchInput.trim() !== '') {
            result = result.filter((user) => user.firstName.includes(searchInput));
        }

        props.onChangeTable1(result);

        if (searchByTitle.trim() !== '') {
            result = result.filter((user) => user.company.title.includes(searchByTitle));
            props.onChangeTable2(result)
        }
        console.log(result);
    }, [selectedAge, selectedGender, data, searchInput, searchByTitle]);

    const clearFilter = () => {
        setSelectedAge('');
        setSearchByTitle('');
        setSearchInput('');
        setSelectedGender('');
        props.onChangeTable1(data);
    }

    return (
        <>
            <div className={styles.Sidebar}>
                {props.activeButton == 'button1' && <div>
                    <h2>Filter by Age</h2>
                    <select onChange={(e) => setSelectedAge(e.target.value)} value={selectedAge}>
                        <option value="">All Ages</option>
                        <option value="Less than 25">Less than 25</option>
                        <option value="Less than 30">Less than 30</option>
                        <option value="Less than 35">Less than 35</option>
                    </select>

                    <h2>Filter by Gender</h2>
                    <select onChange={(e) => setSelectedGender(e.target.value)} value={selectedGender}>
                        <option value="">All Genders</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <h2>Search by name</h2>
                    <input type='search' onChange={(e) => setSearchInput(e.target.value)} />
                </div>
                }

                {props.activeButton == 'button2' && <div>
                    <h2>Search by Title</h2>
                    <input type='search' onChange={(e) => setSearchByTitle(e.target.value)} />
                </div>}

                <button onClick={clearFilter}>Clear Filters</button>
            </div>
        </>
    );
}

export default Sidebar;

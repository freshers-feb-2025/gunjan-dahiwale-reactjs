import React, { useEffect, useState } from 'react';
import Table from './Table';
import Table2 from './Table2';
import Sidebar from './Sidebar';
import styles from './Index.module.css';

function Index() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filteredDataTable2, setFilteredDataTable2] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [activeButton, setActiveButton] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://dummyjson.com/users?limit=50');
                if (!res.ok) throw new Error("Something went wrong");

                const response = await res.json();
                setData(response.users);
                setFilteredData(response.users);
                setFilteredDataTable2(response.users);  
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const toggleSidebar = (button) => {
        if(activeButton == button && isVisible)
        {
            console.log("Active button", activeButton);
            console.log("Is visible", isVisible);
            
            setIsVisible(false);
            setActiveButton(null);
        } else {
            console.log("Active button", activeButton);
            console.log("Is visible", isVisible);
            setIsVisible(true);
            setActiveButton(button)
        }
    }


    return (
        <div className={styles.container}>
            <div className={`${styles.sidebar} ${isVisible ? styles.show : styles.hide}`}>
                <Sidebar onChangeTable1={setFilteredData} onChangeTable2={setFilteredDataTable2} data={data} activeButton={activeButton}/>
            </div>
            <div className={styles.tablesContainer}>
                <div className={styles.tableWrapper}>
                    <Table data={filteredData} />
                    <button onClick={() => toggleSidebar('button1')} className={styles.button}>{activeButton=='button1' ? 'Hide Filter' : 'Apply Filter'}</button>
                </div>
                <div className={styles.tableWrapper}>
                    <Table2 data={filteredDataTable2} />
                    <button onClick={() => toggleSidebar('button2')} className={styles.button}>{activeButton=='button2' ? 'Hide Filter' : 'Apply Filter'}</button>
                </div>
            </div>
        </div>
    );
}

export default Index;

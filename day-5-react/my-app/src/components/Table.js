import React, { useState, useEffect } from 'react';
import styles from './Table.module.css';

const Table = () => {

  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://dummyjson.com/users?limit=100');
        if (!res.ok) throw new Error("Something went wrong");

        const response = await res.json();
        setData(response.users);
        console.log(response);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>First Name</th>
            <th className={styles.th}>Last Name</th>
            <th className={styles.th}>Age</th>
            <th className={styles.th}>Gender</th>
            <th className={styles.th}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((user) => (
              <tr className={styles.tableRow}>
                <td className={styles.td}>{user.id}</td>
                <td className={styles.td}>{user.firstName}</td>
                <td className={styles.td}>{user.lastName}</td>
                <td className={styles.td}>{user.age}</td>
                <td className={styles.td}>{user.gender}</td>
                <td className={styles.td}>{user.phone}</td>
              </tr>
            ))
          ) : (<tr>
                  <td colSpan="6" className={styles.td}>Loading...</td>
              </tr>)
            }
        </tbody>
      </table>
    </div>
  );
};

export default Table;

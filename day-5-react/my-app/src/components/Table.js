import React, { useState, useEffect } from 'react';
import styles from './Table.module.css';

const Table = ({data}) => {

  const [currPage, setCurrPage ] = useState(1);
  
  const rows = 5;
  const total = Math.ceil(data.length/rows);
  const lastRowIndex = currPage*rows;
  const firstRowIndex = lastRowIndex - rows;
  const currRows = data.slice(firstRowIndex, lastRowIndex);

  const paginate = (no) => {
    setCurrPage(no);
  }

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
            currRows.map((user) => (
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
                  <td colSpan="6" className={styles.td}>No data found</td>
              </tr>)
            }
        </tbody>
      </table>
      <div className={styles.pagination}>
        <button onClick={() => paginate(currPage-1)} disabled={currPage === 1} className={styles.pageButton}>Prev</button>
        {[...Array(total).keys()].map((num) => (
                    <button 
                        key={num + 1} 
                        onClick={() => paginate(num + 1)} 
                        className={`${styles.pageButton} ${currPage === num + 1 ? styles.active : ''}`}
                    >
                        {num + 1}
                    </button>
                ))}
        <button onClick={() => paginate(currPage+1)} disabled={currPage === total} className={styles.pageButton}>Next</button>
      </div>
    </div>
  );
};

export default Table;

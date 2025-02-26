import React, { useState, useEffect } from 'react';
import styles from './Table.module.css';

const Table2 = ({data}) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>Title</th>
            <th className={styles.th}>Company Name</th>
            <th className={styles.th}>Department Name</th>
            <th className={styles.th}>City</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((user) => (
              <tr className={styles.tableRow}>
                <td className={styles.td}>{user.id}</td>
                <td className={styles.td}>{user.company.title}</td>
                <td className={styles.td}>{user.company.name}</td>
                <td className={styles.td}>{user.company.department}</td>
                <td className={styles.td}>{user.company.address.city}</td>
              </tr>
            ))
          ) : (<tr>
                  <td colSpan="6" className={styles.td}>No data found</td>
              </tr>)
            }
        </tbody>
      </table>
    </div>
  );
};

export default Table2;

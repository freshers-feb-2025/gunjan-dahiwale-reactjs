import React from "react";

function YearFilter(props) {

    const yearChangeHandler = (e) => {
        props.onYearChange(e.target.value);
    };
    
    return (
        <div>
        <label>Filter by Year</label>
        <select onChange={yearChangeHandler} value={props.selectedValue}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
        </select>
        </div>
    );
    }

export default YearFilter;
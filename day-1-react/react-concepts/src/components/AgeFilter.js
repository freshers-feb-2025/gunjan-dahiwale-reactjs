import React from "react";

function AgeFilter(props) {

    const ageChangeHandler = (e) => {
        props.onAgeChange(e.target.value);
    };
    
    return (
        <div>
        <label>Filter by Age</label>
        <select onChange={ageChangeHandler} value={props.selectedValue}>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
        </select>
        </div>
    );
    }

export default AgeFilter;
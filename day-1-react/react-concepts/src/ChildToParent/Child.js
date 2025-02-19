import React from "react";

const Child = (props) => {

    const nameChangeHandler = (e) => {
        props.onNameChange(e.target.value);
    }

    const ageChangeHandler = (e) => {
        props.onAgeChangeHandler(e.target.value);
    }

    return(
        <>
            <div>
                <input type="text" placeholder="Enter your name" onChange={nameChangeHandler}/>
                <input type="number" placeholder="Enter your age" onChange={ageChangeHandler}/>
            </div>
        </>
    )
}

export default Child;
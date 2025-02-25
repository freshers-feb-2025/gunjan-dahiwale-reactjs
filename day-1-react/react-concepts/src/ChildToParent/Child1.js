import React from "react";

const Child1 = (props) => {

    const ageChangeHandler = (e) => {
        props.onAgeChangeHandler(e.target.value);
    }

    return(
        <>
            <div>
                <input type="number" placeholder="Enter your age" onChange={ageChangeHandler}/>
            </div>
        </>
    )
}

export default Child1;
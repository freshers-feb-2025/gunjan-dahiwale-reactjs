import React from "react";
import Child from "./Child";
import Child1 from "./Child1";

const Parent = () => {

    const [ageCount, setAgeCount] = React.useState(0);

    const onNameChangeHandler = (name) => {
        console.log(name);
    }

    const onAgeChangeHandler = (age) => {
        console.log(age);
        setAgeCount((prev) => {
            console.log("prev", prev)
            return prev + parseInt(age)
        }
        );
        console.log("age count", ageCount);
        console.log("age", age);

    }

    return (
        <>
            <div>
                <h4>Child</h4>
                <Child onNameChange={onNameChangeHandler} onAgeChangeHandler={onAgeChangeHandler} />
            </div>
            <div>
                <h4>Child 1</h4>
                <Child1 onAgeChangeHandler={onAgeChangeHandler} />
            </div>
            <div>
                <h1>Sum</h1>
                <p>{ageCount}</p>
            </div>
        </>
    )
}

export default Parent;
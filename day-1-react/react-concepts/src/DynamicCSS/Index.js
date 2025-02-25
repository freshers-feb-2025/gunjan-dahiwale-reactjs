import React, { useState } from 'react';


function Index() {
    const [isActive, setIsActive] = useState(false);
    const [changeBG, setChangeBG] = useState(false);
    const [changeBG1, setChangeBG1] = useState(false);
    const [changeBG2, setChangeBG2] = useState(false);
    const [changeBG3, setChangeBG3] = useState(false);



    const btnstyles = {
        backgroundColor: isActive ? 'red' : 'blue',
        padding: '1rem',
        color: 'white',
        textAlign: 'center',
        fontSize: '1.5rem',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '0.5rem'

    };

    const styles = {
        backgroundColor: changeBG ? 'lightgray' : 'Yellow',
        padding: '1rem',
        color: 'black',
        textAlign: 'center',
        fontSize: '1.5rem',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '0.5rem',
        width: '50%'
    }

    const styles1 = {
        backgroundColor: changeBG1 ? 'blue' : 'lightgreen',
        padding: '1rem',
        color: 'black',
        textAlign: 'center',
        fontSize: '1.5rem',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '0.5rem',
        width: '50%'
    }

    const styles2 = {
        backgroundColor: changeBG2 ? 'red' : 'lightblue',
        padding: '1rem',
        color: 'black',
        textAlign: 'center',
        fontSize: '1.5rem',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '0.5rem',
        width: '50%'
    }

    const styles3 = {
        backgroundColor: changeBG3 ? 'brown' : 'lightyellow',
        padding: '1rem',
        color: 'black',
        textAlign: 'center',
        fontSize: '1.5rem',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '0.5rem',
        width: '50%'
    }

    return (
        <>
            <h1>Dynamic CSS</h1>
            <div style={styles}>
                <p>Styling in ReactJS is a vast and exciting topic. From inline styles to external stylesheets, CSS modules, and Styled Components , there are numerous ways to style your React components. The ReactJS style attribute, with its ability to accept JavaScript objects and compute dynamic styles, offers a powerful tool for developers.

                    While each method has its pros and cons, understanding how they work and when to use them can significantly enhance your ability to create visually appealing and responsive UIs. Whether you're a fan of inline styles, prefer the traditional CSS approach, or want to explore the CSS-in-JS world with Styled Components, mastering these techniques will undoubtedly level up your ReactJS styling game.</p>
                <button style={btnstyles} onClick={() => setChangeBG(!changeBG)}>{isActive ? 'Active' : 'Inactive'}</button>
            </div>
            <h1>Another paragraph</h1>
            <div style={styles1}>
                <p>Styling in ReactJS is a vast and exciting topic. From inline styles to external stylesheets, CSS modules, and Styled Components , there are numerous ways to style your React components. The ReactJS style attribute, with its ability to accept JavaScript objects and compute dynamic styles, offers a powerful tool for developers.

                    While each method has its pros and cons, understanding how they work and when to use them can significantly enhance your ability to create visually appealing and responsive UIs. Whether you're a fan of inline styles, prefer the traditional CSS approach, or want to explore the CSS-in-JS world with Styled Components, mastering these techniques will undoubtedly level up your ReactJS styling game.</p>
                <button style={btnstyles} onClick={() => setChangeBG1(!changeBG1)}>{isActive ? 'Active' : 'Inactive'}</button>
            </div>
            <h1>Second paragraph</h1>
            <div style={styles2}>
                <p>Styling in ReactJS is a vast and exciting topic. From inline styles to external stylesheets, CSS modules, and Styled Components , there are numerous ways to style your React components. The ReactJS style attribute, with its ability to accept JavaScript objects and compute dynamic styles, offers a powerful tool for developers.

                    While each method has its pros and cons, understanding how they work and when to use them can significantly enhance your ability to create visually appealing and responsive UIs. Whether you're a fan of inline styles, prefer the traditional CSS approach, or want to explore the CSS-in-JS world with Styled Components, mastering these techniques will undoubtedly level up your ReactJS styling game.</p>
                <button style={btnstyles} onClick={() => setChangeBG3(!changeBG3)}>{isActive ? 'Active' : 'Inactive'}</button>
            </div>
            <h1>Third paragraph</h1>
            <div style={styles3}>
                <p>Styling in ReactJS is a vast and exciting topic. From inline styles to external stylesheets, CSS modules, and Styled Components , there are numerous ways to style your React components. The ReactJS style attribute, with its ability to accept JavaScript objects and compute dynamic styles, offers a powerful tool for developers.

                    While each method has its pros and cons, understanding how they work and when to use them can significantly enhance your ability to create visually appealing and responsive UIs. Whether you're a fan of inline styles, prefer the traditional CSS approach, or want to explore the CSS-in-JS world with Styled Components, mastering these techniques will undoubtedly level up your ReactJS styling game.</p>
                <button style={btnstyles} onClick={() => setChangeBG2(!changeBG2)}>{isActive ? 'Active' : 'Inactive'}</button>
            </div>
        </>
    )
}

export default Index;


function Home (props) {

    const handleLogout = () => {
        localStorage.setItem('isLoggedIn', '0');
        props.onLogout();
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleLogout}>Log out</button>
        </div>
    )
}

export default Home;
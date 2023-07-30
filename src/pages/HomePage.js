import { Link } from "react-router-dom";
const HomePage = () => {
    return (
        <>
            <h1>JOURNEY JOURNALS</h1>
            <p>
                Journey Journals helps you to write and document about the experience you had during your trips.

                Journey Journals is one of the most popular Journal amongst the different types of journals.
            </p>
                <Link to="/register" >Register</Link>
                <Link to="/logIn" >LogIn</Link>
        </>
    );
};
 
export default HomePage;
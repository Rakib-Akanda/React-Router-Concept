import { Link } from "react-router-dom";

const User = ({user}) => {
    const {name, id, email, phone} = user;
    const userStyle = {
        border: '2px solid purple',
        padding: '5px',
        borderRadius: '10px',
        marginTop: '10px'

    }
    return (
        <div style={userStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;
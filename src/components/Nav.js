import React, { useState } from 'react';
import {
    Link, useNavigate
} from 'react-router-dom';
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const [status, setStatus] = useState(true)
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }

    return (
        <React.Fragment>
            <img
                alt='logo'
                className='logo'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw4xlLI2Ikz8mLJ_9eDd6S4U-iwN3FabsWpw&usqp=CAU' />
            <button className='toggle-btn' onClick={() => setStatus(!status)}>=</button>
            {
                auth ?
                    status ? <ul className="nav-ul" >
                        <li><Link to="/">Products</Link></li>
                        <li><Link to="/add">Add Products</Link></li>
                        <li><Link to="/update"> Update Products</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li> <Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
                    </ul> :null
                    :
                    <ul className="nav-ul nav-right">
                        <li> <Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
            }
        </React.Fragment>
    )
}

export default Nav;
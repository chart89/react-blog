
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {

    return (
        
        <Navbar bg="primary" data-bs-theme="light" expand="lg" className="mt-4 mb-4 rounded justify-content-between bg-body-tertiary" >
            
            <div>
                <h5 className="text-white ms-2">Blog.app</h5>
            </div>
            <div className={styles.navbar_rh}>
                <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink>
            </div>
        </Navbar>
    
    );
}

export default NavBar;
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';


const CategoryLink = ({categoryName}) => {

    return (
        <ListGroup.Item>
            <Nav.Link className="pe-0" as={NavLink} to={'/categories/'+categoryName}>{categoryName}</Nav.Link>
        </ListGroup.Item>
    )
}

export default CategoryLink;
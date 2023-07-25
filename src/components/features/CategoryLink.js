import ListGroup from 'react-bootstrap/ListGroup';


const CategoryLink = ({categoryName}) => {

    return (
        <ListGroup.Item>{categoryName}</ListGroup.Item>
    )
}

export default CategoryLink;
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import dateToStr from '../../../utils/dateToStr';

const PostDetails = ({title, author, published, description, id, category}) => {

    return (
        
        <Col xs={12} md={6} lg={4} className="my-2">
            <Card className="mx-auto" style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title><span className="fw-bold">Title: </span>{title}</Card.Title>
                    <Card.Subtitle className="mb-2"><span className="fw-bold">Author:</span> <span className="text-muted">{author}</span></Card.Subtitle>
                    <Card.Subtitle className="mb-2"><span className="fw-bold">Published:</span> <span className="text-muted">{dateToStr(published)}</span></Card.Subtitle>
                    <Card.Subtitle className="mb-2"><span className="fw-bold">Category:</span> <span className="text-muted">{category}</span></Card.Subtitle>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Nav className="me-auto">
                        <Nav.Link className="ps-0" as={NavLink} to={'/post/' + id}><Button variant="primary">Read more</Button>{' '}</Nav.Link>
                    </Nav>
                </Card.Body>
            </Card>
        </Col>
        
    );
}

export default PostDetails;

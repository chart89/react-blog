import { useParams, Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { getPostById } from '../../redux/postsRedux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import DeletePost from '../features/DeletePost';
import dateToStr from '../../utils/dateToStr';

const SinglePost = () => {

    const { id } = useParams();
    const postData = useSelector(state => getPostById(state, id));


    if(!postData) return <Navigate to="/" />
    return (
        <Container style={{ width: '900px' }}>
            <Row>
                <Col sm={9}>
                    <Card className="mx-auto border-0">
                        <Card.Body>
                            <Card.Title className="mb-3"><span className="fw-bold fs-2">{postData.title}</span></Card.Title>
                            <Card.Subtitle className="mb-2"><span className="fw-bold">Author:</span> <span className="text-muted">{postData.author}</span></Card.Subtitle>
                            <Card.Subtitle className="mb-2"><span className="fw-bold">Published:</span> <span className="text-muted">{dateToStr(postData.publishedDate)}</span></Card.Subtitle>
                            <Card.Text>
                                {postData.shortDescription}
                            </Card.Text>
                            <Card.Subtitle>
                            <p dangerouslySetInnerHTML={{ __html: postData.content }} />
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Nav>
                        <Nav.Link className="pe-0" as={NavLink} to={'/post/edit/' + postData.id}><Button variant="outline-info">Edit</Button>{' '}</Nav.Link>
                        <Nav.Link>
                            <DeletePost id={id} />
                        </Nav.Link>
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
}

export default SinglePost;

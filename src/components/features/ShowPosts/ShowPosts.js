import { getAllPosts } from "../../../redux/postsRedux";
import { useSelector } from "react-redux";
import PostDetails from "../PostDetails/PostDetails";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const ShowPosts = () => {

    const posts = useSelector(getAllPosts);

    return (
        <div>
            <Container className="my-3">
                <Row>
                    <Col><h1>All post</h1></Col>
                    <Col xs={2}>
                        <Nav className="justify-content-end">
                            <Nav.Link className="pe-0" as={NavLink} to="/post/add"><Button variant="outline-info">Add post</Button>{' '}</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    {posts.map(post => <PostDetails id={post.id} author={post.author} title={post.title} published={post.publishedDate} description={post.shortDescription}/>)}
                </Row>
            </Container>
        </div>
    );
}

export default ShowPosts;

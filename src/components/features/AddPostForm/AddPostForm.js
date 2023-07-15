import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate();
    

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(addPost({ title, author, shortDescription, publishedDate, content }));
        
        navigate("/");
    };

    return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Published</Form.Label>
        <Form.Control type="date" placeholder="Enter date published" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Short description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Leave a short description" value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Main content</Form.Label>
        <Form.Control as="textarea" rows={6} placeholder="Leave a coment here" value={content} onChange={e => setContent(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add post
      </Button>
    </Form>
    );
}

export default AddPostForm;

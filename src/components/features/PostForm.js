import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './AddPostForm/AddPostForm.module.scss';

const PostForm = ({ action, actionText, ...props }) => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    
    console.log('props', title);

    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
      };

    return (
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control className={styles.input} type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Author</Form.Label>
        <Form.Control className={styles.input} type="text" placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Published</Form.Label>
        <Form.Control className={styles.input} type="text" placeholder="Enter date published" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
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
        {actionText}
      </Button>
    </Form>
    );
}

export default PostForm;
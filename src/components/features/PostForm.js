import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './AddPostForm/AddPostForm.module.scss';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PostForm = ({ action, actionText, ...props }) => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(new Date() || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    console.log('darek', new Date(publishedDate));

    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, shortDescription, publishedDate, content });
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
      <Form.Group className="mb-0">
        <Form.Label>Published</Form.Label>
      </Form.Group>
      <DatePicker className="mb-3" selected={publishedDate} onChange={(data) => setPublishedDate(data)} />
      
      <Form.Group className="mb-3" >
        <Form.Label>Short description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Leave a short description" value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Main content</Form.Label>
        <ReactQuill theme="snow" placeholder="Leave a coment here" value={content} onChange={setContent} />
      </Form.Group>
      <Button variant="primary" type="submit">
        {actionText}
      </Button>
    </Form>
    );
}

export default PostForm;

PostForm.propTypes = {
  action: PropTypes.func,
  actionText: PropTypes.string,
  title: PropTypes.string,
};
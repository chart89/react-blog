import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './AddPostForm/AddPostForm.module.scss';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";

const PostForm = ({ action, actionText, ...props }) => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);
  
    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const handleSubmit = e => {
        setContentError(!content);
        setDateError(!publishedDate);
        if(content && publishedDate){
          action({ title, author, shortDescription, publishedDate, content });
        }
      };

    return (
        <Form onSubmit={validate(handleSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control className={styles.input} 
            {...register("title", { required: true, minLength: 3 })}
            type="text" 
            placeholder="Enter title" 
            value={title} 
            onChange={e => setTitle(e.target.value)}
            />
          {errors.title && <small className="d-block form-text text-danger mt-2">This field is required (min 3)</small>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control className={styles.input}
            {...register("author", { required: true, minLength: 3 })}
            type="text"
            placeholder="Enter author" 
            value={author} 
            onChange={e => setAuthor(e.target.value)} />
          {errors.author && <small className="d-block form-text text-danger mt-2">This field is required (min 3)</small>}
          </Form.Group>
          <Form.Group className="mb-0">
            <Form.Label>Published</Form.Label>
          </Form.Group>
          <DatePicker className="mb-3" selected={publishedDate} onChange={(data) => setPublishedDate(data)} />
          {dateError && <small className="d-block form-text text-danger mt-0 mb-3">Date can't be empty</small>}
          <Form.Group className="mb-3" >
            <Form.Label>Short description</Form.Label>
            <Form.Control 
            {...register("shortDescription", { required: true, minLength: 20 })}
            as="textarea" 
            rows={3} 
            placeholder="Leave a short description" 
            value={shortDescription} 
            onChange={e => setShortDescription(e.target.value)} />
          {errors.shortDescription && <small className="d-block form-text text-danger mt-2">This field is required (min 20)</small>}
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Main content</Form.Label>
            <ReactQuill theme="snow" placeholder="Leave a coment here" value={content} onChange={setContent} />
            {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
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
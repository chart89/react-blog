import { useDispatch } from 'react-redux';
import PostForm from '../PostForm';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const handleSubmit = (post, postcat) => {

        dispatch(addPost(post));
        
        navigate("/");
    };


    return (
      <PostForm action={handleSubmit} actionText="Add post" />
    );
}

export default AddPostForm;


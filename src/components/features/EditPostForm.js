import { editPost } from "../../redux/postsRedux"
import { useDispatch } from 'react-redux';
import PostForm from "./PostForm";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getPostById } from "../../redux/postsRedux";
import { useParams } from 'react-router';

const EditPostForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { id } = useParams();
    const postData = useSelector(state => getPostById(state, id));

    const handleSubmit = post => {

        dispatch(editPost({...post, id}));
        
        navigate("/");
    };


    return (
      <PostForm action={handleSubmit} actionText="Edit post" {...postData} />
    );
}

export default EditPostForm;
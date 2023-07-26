import PostDetails from "./PostDetails/PostDetails";
import { useSelector } from "react-redux";
import { getPostByCat } from '../../redux/postsRedux';

const FilteredPostsByCat = ({cat}) => {

    const filteredPosts = useSelector(state => getPostByCat(state, cat));

    console.log(filteredPosts);

    if(filteredPosts.length === 0) return <p>No posts in this category...</p>
    return (
        <>
        {filteredPosts.map(post => <PostDetails key={post.id} id={post.id} author={post.author} title={post.title} published={post.publishedDate} description={post.shortDescription} category={post.categoryName}/>)}
        </>
    );
}

export default FilteredPostsByCat;
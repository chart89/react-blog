import ListGroup from 'react-bootstrap/ListGroup';
import CategoryLink from '../features/CategoryLink';
import { getAllCategory } from '../../redux/categoryRedux';
import { useSelector } from 'react-redux';
import styles from '../features/AddPostForm/AddPostForm.module.scss';
import shortid from 'shortid';

const Categories = () => {

    const categories = useSelector(getAllCategory);

    return (
        <div className="mx-auto w-75">
            <h1 className="mb-5">All categories</h1>
            <ListGroup className={styles.input}>
                {categories.map(cat => <CategoryLink key={shortid()} categoryName={cat.categoryName} />)};
            </ListGroup>
        </div>
    );
}

export default Categories;
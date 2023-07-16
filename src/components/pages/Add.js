import AddPostForm from "../features/AddPostForm/AddPostForm";
import styles from "../features/AddPostForm/AddPostForm.module.scss"


const Add = () => {

    return (
        <>
        <div>
            <h1>Add post</h1>
        </div>
        <div className={styles.form}>
            <AddPostForm />
        </div>
        </>
    );
}

export default Add;
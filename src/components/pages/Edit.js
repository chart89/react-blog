import EditPostForm from "../features/EditPostForm";
import styles from "../features/AddPostForm/AddPostForm.module.scss"


const Add = () => {

    return (
        <>
        <div>
            <h1>Edit posts</h1>
        </div>
        <div className={styles.form}>
            <EditPostForm />
        </div>
        </>
    );
}

export default Add;
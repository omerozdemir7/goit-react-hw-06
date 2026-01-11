import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "./Contact.module.css";

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <p className={styles.text}>
          <span className={styles.icon}>👤</span>
          {name}
        </p>
        <p className={styles.text}>
          <span className={styles.icon}>📞</span>
          {number}
        </p>
      </div>
      <button type="button" onClick={handleDelete} className={styles.btn}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
import css from './Contact.module.css';
import { FaPhone } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa6';

const Contact = ({ data, onDelete }) => {
  return (
    <div className={css.contact}>
      <div className={css.contactData}>
        <div>
          <FaUser />
          <p>{data.name}</p>
        </div>
        <div>
          <FaPhone />
          <p>{data.number}</p>
        </div>
      </div>
      <button type="button" onClick={() => onDelete(data.id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;

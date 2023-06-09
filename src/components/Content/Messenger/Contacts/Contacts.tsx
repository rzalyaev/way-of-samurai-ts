import React from 'react';
import styles from './Contacts.module.css';
import {NavLink} from 'react-router-dom';
import {ContactType} from '../../../../redux/store';


type PropsType = {
    contacts: ContactType[]
}

const Contacts = ({contacts}: PropsType) => {
    const mappedContacts = contacts.map((contact: ContactType) =>
        <NavLink to={`/messenger/${contact.id}`}>{contact.name}</NavLink>);

    return (
        <div className={styles.users}>
            {mappedContacts}
        </div>
    );
};

export default Contacts;
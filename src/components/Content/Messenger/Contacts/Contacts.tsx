import React from 'react';
import styles from "./Contacts.module.css";
import {NavLink} from "react-router-dom";
import {ContactType} from '../../../../redux/state';


type PropsType = {
    contacts: ContactType[]
}

const Contacts: React.FC<PropsType> = ({contacts}) => {
    const mappedContacts = contacts.map((contact: ContactType) =>
        <NavLink to={`/messenger/${contact.id}`}>{contact.name}</NavLink>)

    return <div className={styles.users}>
        {mappedContacts}
    </div>
};

export default Contacts;
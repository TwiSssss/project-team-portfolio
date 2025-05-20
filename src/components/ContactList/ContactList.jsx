import style from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

const getVisibleContacts = (contacts, statusFilter) => {
    if (statusFilter) {
        return contacts.filter((contact) => {
            const name = contact.name || "";
            const number = contact.number || "";
            return name.toLowerCase().includes(statusFilter.toLowerCase()) || number.includes(statusFilter);
        });
    }
    return contacts;
};
const ContactList = () => {
    const contacts = useSelector((state) => state.contacts.items);
    const filter = useSelector((state) => state.filters.filter);
    const filterContacts = getVisibleContacts(contacts, filter);
    return <ul className={style.contactList}>{filterContacts.length > 0 ? filterContacts.map(({ id, number, name }) => <Contact key={id} number={number} name={name} id={id} />) : <p>No contacts</p>}</ul>;
};

export default ContactList;

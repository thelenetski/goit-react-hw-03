import './App.css';
import contactsData from './contacts.json';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useEffect, useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(() => {
    if (localStorage.getItem('contactData') !== null) {
      return JSON.parse(localStorage.getItem('contactData'));
    }

    return contactsData;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contactData', JSON.stringify(contacts));
  }, [contacts]);

  const handleAdd = newUser => {
    setContacts(prev => {
      return [...prev, newUser];
    });
  };

  const handleDelete = id => {
    setContacts(prev => {
      return prev.filter(item => item.id !== id);
    });
  };

  const visibleContactList = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAdd} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList data={visibleContactList} onDelete={handleDelete} />
    </>
  );
}

export default App;

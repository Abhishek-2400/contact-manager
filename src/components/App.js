import React, { useState, useEffect } from 'react';
import './App.css';
import uuid from 'react-uuid';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './contactList';
import ContactDetails from './ContactDetails';
import EditContacts from './EditContacts';
import api from '../api/contacts';

//importing react router dom

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditContact from './EditContacts';

function App() {

  const local_storage_key = "contacts";//object to be stringified during setitem in useeffect hook


  //creating hook usestate with inital value empty array
  // usestate return 2 values  if.e. current+a function to update current value (update)
  const [contacts, update] = useState([]);
  const [st, sst] = useState("");
  const [sr, ssr] = useState([]);
  //usestate hook
  //this function is receiving data from addcontact .js add function and then updating the current contacts i.e. contacts to  data 
  //receiving from child function i.e. add func in file addcontact .js
  const addcontacthandler = async (contact_from_addcotact) => {

    const request = {
      id: uuid(),
      ...contact_from_addcotact,
    }
    //did this because to assign uuid (uniqye id) to all our entries

    const response = await api.post("/contacts", request);
    //console.log(response);
    update([...contacts, response.data]);
  };

  const updatecontacthandler = async (contact_from_addcotact) => {

    const response = await api.put(`/contacts/${contact_from_addcotact.id}`, contact_from_addcotact);
    const { id, name, email } = response.data;
    update(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };


  //retrieve contacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };


  //useeffect hook
  useEffect(() => {
    //fetchimg data from local stotrage
    // const fetch = JSON.parse(localStorage.getItem(local_storage_key));
    // if (fetch) update(fetch);
    const getallcontacts = async () => {
      const allcontacts = await retrieveContacts();
      if (allcontacts) update(allcontacts);
    };
    getallcontacts();
  }, []);

  //use effect function help us to retain and store our changes in page even when refreshed with help of local memmory
  //it uses arrow function inside it
  //adding 'cotacts' dependency with use effect
  //use effect only helps to store info in local storage
  useEffect(() => {
    // localStorage.setItem(local_storage_key, JSON.stringify(contacts));
  }, [contacts])


  const removecontacthandler = async (id) => {
    //creatimg copy of contacts first
    await api.delete(`/contacts/${id}`);
    const newcontactlist = contacts.filter((contact) => {
      return contact.id !== id;
    });

    //now change contact state with new list after deleteing
    update(newcontactlist);
  };

  const searchhandler = (searchterm) => {
    sst(searchterm);
    if (searchterm !== "") {
      const ncl = contacts.filter((contact) => {
        return Object.values(contact).join("").toLowerCase().includes(searchterm.toLowerCase());
      });
      ssr(ncl);
    }
    else {
      ssr(contacts);
    }
  };
  return (
    <div>

      {/* router will contain all components to be route */}
      <Router>

        <Header />


        {/* //switch helps to switch between them   */}
        <Routes>


          {/* //exact matches the exact adderess */}
          <Route

            exact
            path="/"
            element={
              <AddContact addcontacthandler={addcontacthandler} />
            }
          />

          <Route
            path="/add"
            element={
              <ContactList term={st} contacts={st.length < 1 ? contacts : sr} getcontactid={removecontacthandler} searchkey={searchhandler} />

            }
          />

          <Route
            path="/contact/:id"
            element={<ContactDetails />}   //told by dhruv....way to add link to any text
          />

          <Route
            path="/edit"
            element={<EditContacts updatecontacthandler={updatecontacthandler} />}

          />


        </Routes>


        {/* here i am passing my fnction as paramete to addcontact.js so that it can update it  */}
        {/* <AddContact addcontacthandler={addcontacthandler} /> */}

        {/* sending above contact list  to file contact list */}
        {/* <ContactList contacts={contacts} getcontactid={removecontacthandler} /> */}
        {/* this getcontactid which is passed as a property to contactlist.js will bring me id  */}

        {/* here contacts is prop name and property which it is passing is contacts array */}
        {/* this contact array can be assesd in contactlist.js as props */}

      </Router>



    </div>

  );
}

export default App;

import React from 'react';

//helps to navigate with help of button
import { Link } from 'react-router-dom';


//for receiving items from contactcard file which is exporting
import ContactCard from './ContactCard';
import ContactDetails from './ContactDetails';

//function component
const contactList = (props) => {

    console.log(props);
    //this delete contact handler is providing id to getcontactid
    const deletecontacthandler = (id) => {
        props.getcontactid(id);
        //console.log(id);
    };
    //renderlist  function receving props(having all list of people) from  app.js


    //revise map here 
    const renderContactList = props.contacts.map((contact) => {
        return (

            //here a function was there which was repetititve so we created other file for it

            //sending each detail to contact card file

            //here a function was there which was repetititve so we created other file for it
            //sending each detail to contact card file
            <ContactCard contact={contact} clickhandler={deletecontacthandler} key={contact.id}></ContactCard>

            //this deletecontacthandler we have passed to clickhandler which goes to contact id

        );
    })




    return (


        //div referencing above render function
        < div class="render" >
            < div class="render-heading" >
                <hr />
                <b>CONTACT LIST</b>
                <Link to="/">
                    <button>Add Contact</button>
                </Link>

            </div >

            <div class="ui action input" >
                <input type="text" placeholder="Search..." fdprocessedid="o5ywvh" id="bar"
                    // value={props.term}
                    onChange={(e) => {
                        props.searchkey(e.target.value);
                    }}
                />
                <button class="ui button" fdprocessedid="py8d37">Search</button>
            </div>


            {renderContactList}

        </div >
    );
};


export default contactList; 
import React from "react";
import user from "../images/user.png";
import { Link, useParams, useLocation } from 'react-router-dom';
//this file is basically concatanating each entry receiving from  {app.js--->contactlist.js--->contactcard.js} in this file

//receiving props from contactlist file it has all details
const ContactDetails = (props) => {

    // const { name, email } = props.location.state.contact;
    console.log(props);
    // const { id, name, email } = props.contact;
    // const { type } = useParams();
    // const { contact } = useLocation().state;
    // console.log(type);
    // console.log(contact);
    return (

        <div className="main">
            <div className="ui acrd centered">

                <div className="image">
                    <img src={user} alt="text"></img>
                </div>

                <div className="content">
                    {/* <div className="header">{name}</div>
                    <div className="description">{email}</div> */}
                </div>


            </div>
        </div>

    );
};

export default ContactDetails; //name of function you are exporting(bahr bhejna)

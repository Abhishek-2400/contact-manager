import React from "react";
import user from "../images/user.png";
import { Link, useParams, useLocation } from 'react-router-dom';
//this file is basically concatanating each entry receiving from  {app.js--->contactlist.js--->contactcard.js} in this file

//receiving props from contactlist file it has all details
const CardContact = (props) => {

    //console.log(props);
    const { id, name, email } = props.contact;
    console.log(props.contact);
    return (

        <div class="content">

            {/* to access this contact email etc we will have to use props */}
            {/* if remove line 4 so will have to access by props.contact.name ..like this */}

            <div>

                {/* adding image to screen in react  */}
                <img class="image" src={user} alt="user" />
                {/* from here i will also provide all info about user */}

                <Link to={{

                    pathname: `/contact/${id}`,
                    state: props.contact,

                }}>
                    <b>{name}</b>
                </Link>

            </div>

            <br></br>

            <div class="align-trash">

                {email}

                <Link to={{

                    pathname: `/edit`,
                    state: { contact: props.contact }

                }}>
                    <button class="btn btn-primary">Edit</button>
                </Link>



                <button class="btn btn-danger" onClick={() => props.clickhandler(id)}>Delete Row</button>






            </div>

            <br></br>
            <hr />



        </div>

    );
}

export default CardContact; //name of function you are exporting(bahr bhejna)

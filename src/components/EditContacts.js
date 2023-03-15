import React from 'react';
import { Link } from 'react-router-dom';

//class component
class EditContacts extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        // this.state = {
        //     id,
        //     name,
        //     email,
        // };
    }
    // state = {
    //     name: "",              //state in class omponent
    //     email: "",
    // };
    update = (e) => {
        e.preventDefault();
        if (this.state.name === '' || this.state.email === '') {
            alert("all fields are mandatory");
            return;
        }

        //i need to pass my object to my app component becuase it is my app.js that is going to add it to my contact array and to screen
        //this transfer is from child to parent

        //tranfering contact to addcontact handler
        this.props.updatecontacthandler(this.state);


        this.setState({ name: '', email: '' });



    };

    render() {
        return (

            //<div>ABHISHEK</div>
            <div class="forms">

                {/* //will be submitted to add function */}
                <form onSubmit={this.update} >
                    <div class="form-row">


                        <div class="form-group col-md-6">

                            <label for="inputEmail4">Name</label>
                            <input
                                align="center"
                                type="text"
                                class="form-control"
                                id="inputEmail4"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={(e) => this.setState({ name: e.target.value })}

                            />
                            {/* onchange is returning an event e and to update the state i will use setstate */}
                        </div>

                        <br />

                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Email</label>
                            <input
                                align="center"
                                type="email"
                                class="form-control"
                                id="inputEmail4"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={(e) => this.setState({ email: e.target.value })}
                            />
                        </div>

                    </div>


                    <br></br>

                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />

                            <label class="form-check-label" for="gridCheck">
                                READ ALL DETAILS CAREFULLY BEFORE ADDING
                            </label>
                        </div>
                    </div>



                    <button type="submit" class="btn btn-primary" >Update</button>
                    <br></br>
                    <br></br>
                    {/* <Link to="/add">
                                <button type="submit" class="btn btn-primary" >Update</button>
                            </Link> */}




                </form>
                <br></br>
                <br></br>
            </div>
        );
    }
}


export default EditContacts;
import React, { Component } from 'react';



class AddUser extends Component {

    state = {
        name: null,
        companyName: null,
        emailId: null,
        contactNo: null,
        designation: null,
        isEditing: false
    }
    //call addUser (App.js)
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
        e.target.reset();

    }
    // update state
    updateState = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return (
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                
                    <div className="form-group">
                        <label>Name :</label>
                        <input name="name" className="input-form" autoComplete="off" placeholder="" required type="text" onChange={this.updateState} />
                    </div>
                    <div className="form-group">
                        <label>Company Name :</label>
                        <input name="companyName" className="input-form" autoComplete="off" type="text" required placeholder="" onChange={this.updateState} />
                    </div>
                    <div className="form-group">
                        <label>Email Id :</label>
                        <input name="emailId" className="input-form" autoComplete="off" type="email" placeholder="" onChange={this.updateState} />
                    </div>
                    <div className="form-group">
                        <label>Contact No :</label>
                        <input name="contactNo" className="input-form" autoComplete="off" type="text" required placeholder="" onChange={this.updateState} />
                    </div>
                    <div className="form-group">
                        <label>Designation:</label>
                        <input name="designation" className="input-form" autoComplete="off" type="text" required placeholder="" onChange={this.updateState} />
                    </div>
                    <div className="">
                        <button type="submit" className="btn btnAdd pull-right"> Add Employee </button>
                    </div>
                </form>
            </div>
        );
    }
}
export default AddUser;
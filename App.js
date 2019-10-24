import React, { Component } from 'react';
import Users from './components/Users';
import AddUser from './components/AddUser';

class App extends Component{

    // Default dummy data
    state = {

        users:[
          {name:"Kissan", companyName:"gtpl", emailId:"mani@gmail.com", contactNo:"8344887993", designation:"developer", isEditing:false},
          {name:"Mani", companyName:"gtpl", emailId:"mani@gmail.com", contactNo:"8344887993", designation:"developer", isEditing:false}

         
    
        ]
      }
      addUser = (newUser) => {
            let users = [...this.state.users, newUser];
            this.setState({
                users
            });     
      }
      
      pressViewBtn = (i) => {
        alert ();
      }


      pressEditBtn = (i) => {
        let users = this.state.users;
        users[i].isEditing = true;
        this.setState({
            users
        });
      }

      updateUser = (i, name, companyName, emailId, contactNo, designation) => {
        let users = this.state.users;
        users[i].name = name;
        users[i].companyName = companyName;
        users[i].emailId = emailId;
        users[i].contactNo = contactNo;
        users[i].designation = designation;
        users[i].isEditing = false;

        this.setState({
            users
        });

      }


      pressDelete = (i) => {
        let users = this.state.users.filter((u,index)=>{
            return index !== i;
        });
        this.setState({
            users
        });
      }

    render(){
        return(
            <div className="Main-Wrapper">
              <center>
                <h1 className="titleText">Employee Management App</h1>
              </center>
              <div className="block-addEmployee">
                <AddUser addUser={this.addUser}/> 
              </div>
                
                <Users allUsers={this.state.users}pressViewBtn={this.pressViewBtn} pressEditBtn={this.pressEditBtn} updateUser={this.updateUser} pressDelete={this.pressDelete} />
                
            </div>
        );
    }
}

export default App;
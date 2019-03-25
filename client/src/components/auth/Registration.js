import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  NavLink,
  Label,
  Input
} from 'reactstrap';
 
import Axios from 'axios'
import PropTypes from'prop-types'

class Registration extends Component {
    state = {
      modal: false,
      name: '',
      email: '',
      password: '',
      msg: null
    };

  
    toggle = () => {
      this.setState({ 
      modal: !this.state.modal  
      });
    };
    
    onSubmit = e => {
      e.preventDefault();
      this.toggle()
    }
  render(){
    return(
        <div>
        <NavLink onClick = { this.toggle } href = "#">
            Register
        </NavLink>

        <Modal isOpen = { this.state.modal} toggle = {this.toggle}>
        <ModalHeader toggle = {this.toggle}>Register</ModalHeader>
        <ModalBody>
          <Form onSubmit = {this.onSubmit}>
          <FormGroup>
            <Label for= "name">Name</Label>
            <Input
              type = 'text'
              name= 'name'
              id= 'name'
              placeholder= 'Name'
              onChange={this.onChange}
              />

            <Label for= "email">Email</Label>
            <Input
              type = "email"
              name= "email"
              id= "email"
              placeholder= "Email"
              onChange={this.onChange}
              />

            <Label for= "password">Name</Label>
            <Input
              type = "password"
              name= "password"
              id= "password"
              placeholder= "Password"
              onChange={this.onChange}
              />
          <Button color = 'dark' style = {{ marginTop: '2rem'}} block>
          Register
          </Button>
          </FormGroup>
          </Form>
        </ModalBody>
        </Modal> 
        </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default Registration;

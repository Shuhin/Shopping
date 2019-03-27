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
  Input,
  Alert
} from 'reactstrap';

import Axios from 'axios'
import PropTypes from'prop-types'

class login extends Component {
    state = {
      modal: false,
      email: '',
      password: '',
      msg: null
    };

    static propTypes = {
      isAuthenticated: PropTypes.bool,
      error: PropTypes.object.isRequired,
      clearErrors: PropTypes.func.isRequired
    }

    toggle = () => {
      this.setState({
      modal: !this.state.modal
      });
    };

    onSubmit = e => {
      e.preventDefault();
      Axios.post('/api/auth', { email: this.state.email, password: this.state.password })
      .then(res => console.log(res.data.token))
      .catch((error) => {
       alert(error.message);
       });
     }

  render(){
    return(
        <div>
        <NavLink onClick = { this.toggle } href = "#">
            Login
        </NavLink>

        <Modal isOpen = { this.state.modal} toggle = {this.toggle}>
        <ModalHeader toggle = {this.toggle}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit = {this.onSubmit}>
          <FormGroup>

            <Label for= "email">Email</Label>
            <Input
              type = "email"
              name= "email"
              id= "email"
              placeholder= "Email"
              onChange={this.onChange}
              />

            <Label for= "password">Password</Label>
            <Input
              type = "password"
              name= "password"
              id= "password"
              placeholder= "Password"
              onChange={this.onChange}
              />
          <Button color = 'dark' style = {{ marginTop: '2rem'}} block>
          Login
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

export default login;

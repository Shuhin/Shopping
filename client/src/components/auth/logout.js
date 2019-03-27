import React, { Component , Fragment } from 'react';
import { NavLink } from 'reactstrap'
import Axios from 'axios'
import PropTypes from 'prop-types'

export class logout extends Component {
  static propTypes = {
    logout : PropTypes.func.isRequired
  }
  render() {
    return (
      <Fragment>
      <NavLink onClick = {this.props.logout} href= '#'>
      Logout
      </NavLink>
      </Fragment>
    );
  }
}

export default logout;

import React, { Component } from 'react';
import Axios from 'axios'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class ShoppingList extends Component {
  state = {
    items: [
    ]
  }

  componentDidMount() {
    Axios.get('/api/items')
    .then(res => this.setState({ items: res.data}))
  }

  render(){
    const { items } = this.state;
    return(
      <Container>
      <Button
       color= "dark"
       style= {{ marginBottom: 'Zrem' }}
       onClick= {() => {
         const name = prompt('Enter Item');
         if(name){
           Axios.post('/api/items', {name})
           .then( res => this.setState({ items:
           [...this.state.items, res.data] }))
         };
       }
     }
      >Add Item</Button>

      <ListGroup>
      <TransitionGroup className = "shopping-list">
      {items.map(({ _id, name }) => (
        <CSSTransition key = {_id} timeout= {500} classNames= "fade">
        <ListGroupItem>
        <Button
            className= "remove-btn"
            color= "danger"
            size= "sm"
            onClick= {() => {
              Axios.delete(`/api/items/${_id}`)
              .then( res => this.setState({ items:
              [...this.state.items.filter(items => items._id !== _id)] }))
            }}
            >
            &times;
          </Button>
        {name}
        </ListGroupItem>
        </CSSTransition>
      ))}
      </TransitionGroup>
      </ListGroup>
      </Container>
    );
  }
}

export default ShoppingList;

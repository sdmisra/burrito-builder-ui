import React, { Component } from 'react';
import './App.css';
import {getOrders, giveOrder} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      orders: []
    })
  }

  componentDidMount() {
    getOrders()
      .then(data=> this.setState(...this.state.orders, data))
      .catch(err => console.error('Error fetching:', err));
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.state.orders !== prevState.orders)
    // getOrders()
    //   .then(data=> this.setState(...this.state.orders, data))
    //   .catch(err => console.error('Error fetching in update:', err))
  }

  addOrder = (orderObject) => {
    console.log('ln 29:', orderObject)
    giveOrder(orderObject)
      .then(order=> this.setState(...this.state, order))
      .catch(err=> console.error('Error Posting:', err))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm addOrder={this.addOrder}/>
        </header>
        <Orders orders={this.state.orders}/>
      </main>
    );
  }
}


export default App;

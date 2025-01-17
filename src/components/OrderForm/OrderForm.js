import React, { Component } from 'react';

class OrderForm extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      ingredients: []
    };
  }


  handleSubmit = e => {
    e.preventDefault();
    let orderObj = {name: this.state.name, ingredients: this.state.ingredients}
    this.props.addOrder(orderObj)
    this.clearInputs();
  }

  handleNameChange = e => {
    this.setState({[e.target.name] : e.target.value})
  }

  handleIngredientChange = e => {
    e.preventDefault()
    this.setState({ingredients: [...this.state.ingredients, e.target.name]})
  }


  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
          required
        />
        { ingredientButtons }
        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button className ="submit" onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;

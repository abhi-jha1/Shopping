import React, { Component } from 'react';
import Category from './components/Category';
import Home from './components/Home'
import { items } from './components/data';
import Slider from './components/slider'


class App extends Component {

  state = {
    items: items
  }

  onShoes = (arg) => {
    const data = items.filter((item) => item.category == arg);
    console.log(data, 'data');
    this.setState({ items: data });
  }



  render() {
    return (
      <div>
        <Slider />
        <Category click={this.onShoes} />
        <Home items={this.state.items} />
      </div>


    );
  }
}

export default App;

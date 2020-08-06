import React, { Component } from 'react';
import Category from './components/Category';
import Home from './components/Home'
import { items } from './components/data';
import Slider from './components/slider'


class App extends Component {

  state = {
    items: items
  }

  click = (arg) => {
    const data = items.filter((item) => item.category == arg);
    console.log(data, 'data');
    this.setState({ items: data });
  }

  slider = (arg) => {
    const data = this.state.items.filter((item) => item.price < 40);
    this.setState({ items: data });
    console.log('slider called');
  }



  render() {
    return (
      <div>
        <Slider slider={this.slider} />
        <Category click={this.click} />
        <Home items={this.state.items} />
      </div>


    );
  }
}

export default App;

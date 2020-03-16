import React from 'react';
import Box from './Box';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.colors = [
      'red',
      'orange',
      'yellow',
      'green',
      'cyan',
      'blue',
      'purple',
      'pink',
      'brown',
    ];
    this.state = {
      boxes: this.buildBoxes(),
    }
  }

  selectRandItem(length) {
    return Math.floor(Math.random() * length);
  }

  selectRandColor() {
    return this.colors[this.selectRandItem(this.colors.length)];
  }

  buildBoxes() {

    const boxes = [];
    const NUM_BOXES = 32;

    for (let i = 0; i < NUM_BOXES; i++) {
      boxes.push(<Box key={i} backgroundColor={{backgroundColor: this.selectRandColor()}} />);
    }

    return boxes;
  
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState(state => {
        let i = this.selectRandItem(state.boxes.length);
        state.boxes[i] = <Box key={i} backgroundColor={{backgroundColor: this.selectRandColor()}} />;
        return state;
      });
    }, 300);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <div className="grid">
        {this.state.boxes}
      </div>
    );  
  }
  
}

export default App;

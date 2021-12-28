import React from 'react';
import './App.css';

class Randomize extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { random: 0 };
  }

  handleClick() {
    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);
    this.setState({ random: this.state.random + rand });
  }

  render() {
    return (
      <div>
            <button
            className='randomButton' 
            onClick={this.handleClick.bind(this)}
            >
                Random 👋
            </button>
        <div style={{color: '#F0F0F0'}}>
            {this.state.random}
        </div>
      </div>
    );
  }
}

export default Randomize
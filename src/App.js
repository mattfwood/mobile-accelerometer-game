import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

class App extends Component {
  state = {
    orientation: {
      beta: 0,
      gamma: 0,
    },
    position: {
      top: 90,
      left: 90,
    },
  };
  componentDidMount() {
    window.addEventListener('deviceorientation', this.handleOrientation);
  }

  handleOrientation = e => {
    this.setState({
      orientation: {
        beta: e.beta.toFixed(4),
        gamma: e.gamma.toFixed(4),
      },
    });
    const { top, left } = this.state.position;
    const maxX = 300 - 20;
    const maxY = 300 - 20;

    let x = e.beta;
    let y = e.gamma;

    const newPosition = {
      top: (top + (x / 10)),
      left: (left + (y / 10)),
    };

    // prevent ball from going out of bounds
    if (
      newPosition.top > maxY ||
      newPosition.top < 0 ||
      newPosition.left > maxX ||
      newPosition.left < 0
    ) {
      // do nothing
    } else {
      this.setState({
        position: newPosition,
      });
    }
  };

  render() {
    const { top, left } = this.state.position;
    return (
      <div className={this.props.className}>
        <div className="field">
          <div className="ball" style={{ top, left }} />
        </div>
        <div>
          {Object.entries(this.state).map(([key, value]) => (
            <div>
              {key}: {JSON.stringify(value)}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default styled(App)`
  .field {
    position: relative;
    width: 300px;
    height: 300px;
    border: 5px solid #ccc;
    border-radius: 10px;
  }

  .ball {
    position: absolute;
    width: 20px;
    height: 20px;
    background: green;
    border-radius: 100%;
  }
`;

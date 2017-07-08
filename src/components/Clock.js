import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2 className="clock">It's {this.state.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12:false})}.</h2>
      </div>
    );
  }
}

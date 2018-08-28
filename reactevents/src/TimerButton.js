import React, { Component } from 'react';

class TimerButton extends React.Component {
    constructor() {
        super();
        this.state = {date: new Date()};
    }
    TimeButton = () => {
        this.setState(
            {
                date: this.state.date + 10000
            }
        )
    };

    componentDidMount() {
        this.timerID = setInterval(
            () => {this.tick()}, 1000
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
                <button onClick={this.TimeButton}>Timer Add</button>
                {this.state.date.toString()}
            </div>
        );
    }
}

export default TimerButton;
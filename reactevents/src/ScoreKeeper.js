import React, { Component } from 'react';


class ScoreKeeper extends Component {
    constructor(props){
        super(props);
        this.state = {displayScore: this.props.score}
    }
    clickButton = () => {
        this.setState(
            {
                displayScore: this.state.displayScore + 1
            }
        )
    };
    render() {
        return (
            <div>
                <button onClick={this.clickButton}>Add Score</button>
                <h2>{this.state.displayScore}</h2>
            </div>
        );
    };

}


export default ScoreKeeper;
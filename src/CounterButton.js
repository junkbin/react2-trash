import React from 'react';

const btnStyle = {
    padding:5,
    minWidth:100,
    minHeight:30,
    backgroundColor : "tomato",
    color: "white"
};

const btnStyleSecondary = {
    padding:5,
    minWidth:100,
    minHeight:30,
    backgroundColor : "green",
    color: "white"
};


export default class CounterButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {"counter" : this.props.counter}

        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter(e){
        console.log(e);

        this.setState((prevState)=>({
            counter : prevState.counter + 1
        }));
    }

    render(){
        return (
            <div>
                <button onClick={this.incrementCounter} style={btnStyle}>{this.state.counter}</button>

                <button onClick={(e)=>{this.incrementCounter(e)}} style={btnStyleSecondary}>{this.state.counter}</button>
            </div>
        );
    }

}
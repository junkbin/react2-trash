import React from 'react';

export default class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {"date" : new Date()};
    }

    componentDidMount(){
        this.timerId = setInterval(()=>{
            this.clockTick();
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    clockTick(){
        this.setState({"date" : new Date()});
    }

    render(){
        return (
            <div>
                <h1><code>Hello World!! <code>{this.state.date.toLocaleTimeString()}</code></code></h1>
                <FormatClock date={this.state.date} />
            </div>
        );
    }
}


class FormatClock extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h3>I am Format Clock <code>{this.props.date.toLocaleTimeString()}</code></h3>
            </div>
        );
    }
}
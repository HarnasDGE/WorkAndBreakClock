import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../containers/TimerContainer';
import { ON } from '../constans/constans';
//import { stopTimer, startTimer } from '../actions/timerActions';

class Controls extends React.Component {

    startStop = () => {
        console.log(`this.props.power === ${this.props.power}`)
        this.props.power === ON ? this.props.stopTimer() : this.props.startTimer();
    }

    reset = () => {
        this.props.resetState();
    }

    render() {
        return (
        <div id="controls-container">
            <button id="start_stop" onClick={this.startStop}><span className="material-symbols-outlined">{this.props.power === false ? "play_arrow" : "stop"}</span></button>
            <button id="reset" onClick={this.reset}><span className="material-symbols-outlined">restart_alt</span></button>
            <button id="timerId">{this.props.timerId}</button>
        </div>  
        )
    }
}
const Container = connect(mapStateToProps, mapDispatchToProps)(Controls)
export default Container;
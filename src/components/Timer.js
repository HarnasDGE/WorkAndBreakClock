import React from 'react';
import {connect } from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../containers/TimerContainer';

class Timer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id="timer-container">
                <div id="timer-label">{this.props.timeStatus}</div>
                <div id="time-left">{`${Math.floor(this.props.restTime/60) < 10 ? '0'+Math.floor(this.props.restTime/60) : Math.floor(this.props.restTime/60)}:${this.props.restTime % 60 < 10 ? '0' + this.props.restTime % 60 : this.props.restTime % 60}`}</div>
                <audio id="beep">
                    <source src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
                </audio>
            </div>
        )   
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Timer);
export default Container;
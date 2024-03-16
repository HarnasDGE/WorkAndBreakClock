import React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from '../containers/TimerContainer';
import { BREAK, OFF, ON, SESSION} from '../constans/constans';

class Options extends React.Component {
    constructor(props) {
        super(props);
    }
    increment = (event) => {
        //if(this.props.power === OFF) {
            if(event.currentTarget.value === BREAK && this.props.breakTime < 60) this.props.incrementBreak();
            if(event.currentTarget.value === SESSION && this.props.session < 60) this.props.incrementSession();
       // }
    }

    decrement = (event) => {
        //if(this.props.power === OFF) {
        if(event.currentTarget.value === BREAK && this.props.breakTime > 1) this.props.decrementBreak();
        if(event.currentTarget.value === SESSION && this.props.session > 1) this.props.decrementSession();
       // }
    }
    render() {
    return (
        <div id="clock-options">
            <div className="option">
                <div className="option-title" id="break-label">Break Time</div>
                <button className="option-arrow-left" id="break-decrement" value={BREAK} onClick={this.decrement}><span className="material-symbols-outlined">arrow_left</span></button>
                <div className="option-length" id="break-length">{this.props.breakTime}</div>
                <button className="option-arrow-right" id="break-increment" value={BREAK} onClick={this.increment}><span className="material-symbols-outlined">arrow_right</span></button>
            </div>
            <div className="option">
                <div className="option-title" id="session-label">Session Time</div>
                <button className="option-arrow-left" id="session-decrement" value={SESSION} onClick={this.decrement}><span className="material-symbols-outlined">arrow_left</span></button>
                <div className="option-length" id="session-length">{this.props.session}</div>
                <button className="option-arrow-right" id="session-increment" value={SESSION} onClick={this.increment}><span className="material-symbols-outlined">arrow_right</span></button>
            </div>
        </div>
    );
}
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Options)
export default Container;
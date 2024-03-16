import { startTimer, stopTimer, reset, breakIncrement, powerToggle, breakDecrement, sessionDecrement, sessionIncrement, resetState, setRestTime} from "../actions/timerActions";

export const mapStateToProps = (state) => {
    return {
        power: state.timerState.power,
        breakTime: state.timerState.breakTime,
        session: state.timerState.session,
        restTime: state.timerState.restTime,
        timerId: state.timerState.timerId,
        timeStatus: state.timerState.timeStatus,
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        togglePowerState: () => dispatch(powerToggle()),
        incrementBreak: () => dispatch(breakIncrement()),
        decrementBreak: () => dispatch(breakDecrement()),
        incrementSession: () => dispatch(sessionIncrement()),
        decrementSession: () => dispatch(sessionDecrement()),
        resetState: () => dispatch(reset()),
        startTimer: () => dispatch(startTimer()),
        stopTimer: () => dispatch(stopTimer()),
        setRestTime: (restTime) => dispatch(setRestTime(restTime))
    }
}
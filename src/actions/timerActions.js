import { BREAK, TOGGLE_STATUS, START_TIMER, STOP_TIMER, SET_REST_TIME, DECREMENT_REST_TIME, RESET, POWER_TOGGLE, BREAK_DECREMENT, BREAK_INCREMENT, SESSION_DECREMENT, SESSION_INCREMENT, STARTSTOP } from '../constans/constans'

export const powerToggle = () => ({
    type: POWER_TOGGLE,
})

export const breakIncrement = () => ({
    type: BREAK_INCREMENT,
    
})

export const breakDecrement = () => ({
    type: BREAK_DECREMENT,
    
})

export const sessionIncrement = () => ({
    type: SESSION_INCREMENT,
    
})

export const sessionDecrement = () => ({
    type: SESSION_DECREMENT,
})

export const toggleStatusTime = () => ({
    type: TOGGLE_STATUS
})
export const reset = () => {
    return (dispatch, getState) => {
        const { timerId } = getState().timerState;
        console.log(`(reset) timerId: ${timerId}`);
        if(timerId) {
            clearInterval(timerId);
            dispatch({type: STOP_TIMER});
            dispatch({type: RESET});
        }else {
            dispatch({type: RESET});
        }
        let audio = document.getElementById("beep");
        audio.pause();
        audio.currentTime = 0;
    }
}


export const setRestTime = (restTime) => ({
    type: SET_REST_TIME,
    restTime
})

export const restTimeDecrement = () => ({
    type: DECREMENT_REST_TIME
})

export const startTimer = () => (dispatch, getState) => {
    const timerId = setInterval(() => {
        const { restTime, breakTime, session, timeStatus } = getState().timerState;
        console.log(`restTime: ${restTime}`)
        if (restTime <= 0) {
            clearInterval(timerId);
            dispatch(toggleStatusTime());
            const newRestTime = timeStatus === BREAK ? session * 60 : breakTime * 60;
            dispatch(setRestTime(newRestTime));
            dispatch(stopTimer());
            let audio = document.getElementById("beep");
            audio.play()
            //setTimeout(() => {audio.pause()}, 1000)
            dispatch(startTimer());
        } else {
            dispatch(restTimeDecrement());
        }
    }, 1000);
    console.log(`(startTimer) timerId: ${timerId}`);
    dispatch( {type: START_TIMER, timerId})
    dispatch(powerToggle());
}

export const stopTimer = () => {
    return (dispatch, getState) => {
        const { timerId } = getState().timerState;
        console.log(`(stopTimer) timerId: ${timerId}`);
        if(timerId) {
            clearInterval(timerId);
            dispatch({type: STOP_TIMER});
            dispatch(powerToggle());
        }
    }
}
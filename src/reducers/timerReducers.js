import { ON, BREAK, POWER_TOGGLE, BREAK_DECREMENT, BREAK_INCREMENT, SESSION_DECREMENT, SESSION_INCREMENT, RESET, DECREMENT_REST_TIME, SET_REST_TIME, START_TIMER, STOP_TIMER, TOGGLE_STATUS, SESSION } from '../constans/constans'

const initialState = {
    power: false,
    breakTime: 5,
    session: 25,
    restTime: 1500,
    timerId: null,
    timeStatus: SESSION
}


export const timerReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_STATUS: 
            return {...state, timeStatus: state.timeStatus === SESSION ? BREAK : SESSION}
        case POWER_TOGGLE:
            return {...state, power: !state.power}
        case BREAK_INCREMENT:
            return {
                ...state, 
                breakTime: state.breakTime + 1
            };
        case BREAK_DECREMENT:
            return {...state, breakTime: state.breakTime - 1};

        case SESSION_INCREMENT:
            return {...state, session: state.session + 1, restTime: state.restTime + 60};
        case SESSION_DECREMENT:
            return {...state, session: state.session - 1, restTime: state.restTime - 60};

        case DECREMENT_REST_TIME: 
            return {...state, restTime: state.restTime - 1};
        case SET_REST_TIME:
            return {...state, restTime: action.restTime};

        case START_TIMER:
            return { ...state, timerId: action.timerId };
        case STOP_TIMER:
            return { ...state, timerId: null };

        case RESET: 
            return {...initialState}
        default:
            return state;
    }
}

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="clock-container">
        <div id="clock-title">Work and Break Clock</div>
        <div id="clock-options">
          <div class="option">
            <div class="option-title" id="break-label">Break Time</div>
            <button class="option-arrow-left" id="break-decrement"><span class="material-symbols-outlined">
arrow_left
</span></button>
            <div class="option-length" id="break-length">5</div>
            <button class="option-arrow-right" id="break-increment"><span class="material-symbols-outlined">
arrow_right
</span></button>
          </div>
          <div class="option">
            <div class="option-title" id="session-label">Session Time</div>
            <button class="option-arrow-left" id="session-decrement"><span class="material-symbols-outlined">
arrow_left
</span></button>
            <div class="option-length" id="session-length">25</div>
            <button class="option-arrow-right" id="session-increment"><span class="material-symbols-outlined">
arrow_right
</span></button>
          </div>
        </div>
        <div id="timer-container">
          <div id="timer-label">Session</div>
          <div id="time-left">25:00</div>
        </div>
        <div id="controls-container">
          <button id="start_stop"><span class="material-symbols-outlined">
play_arrow
</span></button>
      {/*<span class="material-symbols-outlined">
play_arrow
    </span>*/}
          <button id="reset"><span class="material-symbols-outlined">
restart_alt
</span></button>
        </div>
      </div>
    );
  }

}

export default App;

import React from 'react';
import '../styles/App.css';
import Options from './Options';
import Controls from './Controls';
import Timer from './Timer';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../containers/TimerContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="clock-container">
        <div id="clock-title">Work and Break Clock</div>
        <Options/>
        <Timer />
        <Controls />
      </div>
    );
  }

}

const Container = connect(mapStateToProps, mapDispatchToProps)(App);
export default Container;

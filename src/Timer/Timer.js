import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

let timerID;

function Timer() {
  const [runningTime, setRunningTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const buttonRef = useRef();

  const handleStart = (e) => {
     e.preventDefault();
     setRunningTime(e.target.value);
  }
  
  const handleClickStartStop = () => {
    // debugger;
    if(isRunning) {
      clearInterval(timerID);
      setIsRunning(false);
    } else {
      timerID = setInterval(() => {
        setRunningTime(runningTime => runningTime - 1);
        setIsRunning(true);
      }, 1000);
      if( runningTime === 1 ) {
        buttonRef.current.disabled = true;
      }
    }
}

console.log(runningTime);

  useEffect(() => {
    if( runningTime === 1 ) {
      return () => {
        clearInterval(timerID);
        console.log('unmounted');
      }
    }
  });


  function formatTime(t) {
    let h = Math.floor(t / 3600);
    let m = Math.floor(t % 3600 / 60);
    let s = Math.floor(t % 3600 % 60);
    let hDisplay = h >= 0 ? h + (h === 1 ? " hour : " : " hours : ") : "";
    let mDisplay = m >= 0 ? m + (m === 1 ? " minute : " : " minutes : ") : "";
    let sDisplay = s >= 0 ? s + (s === 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
  }

  const handleResetClick = () => {
    setIsRunning(false);
    setRunningTime(0);
    buttonRef.current.disabled = false;
    clearInterval(timerID);
  }

  return (
    <> 
        <div>
         <input type='number' onChange={handleStart}/>
         <h1> {formatTime(runningTime)} </h1>
         <button onClick={handleClickStartStop}  ref={buttonRef}> {isRunning ? 'Stop' : 'Start'} </button>
         <button onClick={handleResetClick}> Reset </button>
        </div>
    </>
  )
}

export default Timer;



// import React from "react";

// class Timer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       runningTime: 0,
//       isRunning: false,
//     }
//     this.buttonRef = React.createRef();
//   }

//   handleStart = (e) => {
//     e.preventDefault();
//      this.setState({runningTime: e.target.value});
//   }

//   handleClickStartStop = () => {
//       if(this.state.isRunning) {
//         clearInterval(this.timerID);
//         this.setState({isRunning: false});
//       } else {
//         this.timerID = setInterval(() => {
//           this.setState({runningTime: this.state.runningTime - 1, isRunning: true});
//           if(this.state.runningTime === 0) {
//             clearInterval(this.timerID);
//             this.buttonRef.current.disabled = true;
//           }
//         }, 1000);
//       }
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   formatTime(t) {
//     let h = Math.floor(t / 3600);
//     let m = Math.floor(t % 3600 / 60);
//     let s = Math.floor(t % 3600 % 60);
//     let hDisplay = h >= 0 ? h + (h === 1 ? " hour : " : " hours : ") : "";
//     let mDisplay = m >= 0 ? m + (m === 1 ? " minute : " : " minutes : ") : "";
//     let sDisplay = s >= 0 ? s + (s === 1 ? " second" : " seconds") : "";
//     return hDisplay + mDisplay + sDisplay;
//   }

//   handleResetClick = () => {
//     this.setState({ isRunning: false, runningTime: 0 });
//     this.buttonRef.current.disabled = false;
//     clearInterval(this.timerID);
//   }

//   render() {
//     console.log(this.state.runningTime);
//     return (
//       <div className='timerDiv'>
//       <div>
//         <input type='number' onChange={this.handleStart}/>
//         <h1> {this.formatTime(this.state.runningTime)} </h1>
//         <button onClick={this.handleClickStartStop}  ref={this.buttonRef}> {this.state.isRunning ? 'Stop' : 'Start'} </button>
//         <button onClick={this.handleResetClick}> Reset </button>
//       </div>
//       </div>
//     )
//   }
// }

// export default Timer;



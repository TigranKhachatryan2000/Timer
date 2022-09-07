import React from 'react'

export default class Child extends React.Component {
  constructor(props) {
    super(props);
    console.log('Cdild constructor work!!!!!!!');
  }

  componentDidMount() {
    console.log('child mounted');
  }

  componentDidUpdate() {
    console.log('child update');
  }

  render() {
    console.log('Child render');
    return (
        <button onClick={this.props.handler}> Click </button>
    )
  }
}


// import React from "react";

// class Child extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log("Child Constructor called");
//     }

//     componentDidMount() {
//         console.log('child componentDidMount');
//     }

//     componentDidUpdate() {
//         console.log('Child componentDidUpdate');
//     }

//     render() {
//         console.log('Child render called');
//         return (
//             <div>
//                 <p onClick={this.props.call}>{this.props.message}</p>
//             </div>
//         )
//     }
// }

// export default Child;





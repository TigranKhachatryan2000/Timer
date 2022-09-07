// import React from "react";
// import Child from "./Child";

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     }
//     console.log('Parent constructor work!!!!!!');
//   }

//   handleClick = () => {
//     this.setState({count: this.state.count + 1});
//   }

//   componentDidMount() {
//     console.log('parent mounted');
//   }

//   componentDidUpdate() {
//     console.log('parnet update');
//   }

//   render() {
//     console.log('Parent render work!!!!!!!');
//     return <Child count={this.state.count} handler={this.handleClick}/>
//   }
// }

// import Child from "./Child";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: 'Inital message',
//       obj: {name: 'Tigran', age: 21},
//       n: 1,
//     }
//     console.log('Parent constructor called');
//   }

//   componentDidMount() {
//     console.log('Parent component mounted')
//   }

//   componentDidUpdate() {
//     console.log('Parent component updated');
//   }

//   call = () => {
//     this.state.obj.name = 'asdasdasda'
//     this.setState({obj: this.state.obj})
//   }

//   render() {
//     console.log("Parent render called");
//     return (
//       <div style={{ margin: 100 }}>
//         <button onClick={this.call}>call</button>
//         <Child obj={{obj1: this.state.obj}}/>
//       </div>
//     )
//   }
// }

// export default App;






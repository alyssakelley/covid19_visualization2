import React, { Component } from 'react';

// class Button extends Component {

//     handleClick = () => {
//         console.log('this is:', this);
//         this.setState({graphType: this.children});
//       }
    
//       render() {
//         return (
//             // <button onClick={() => this.handleGraphPicker()}>
//             //     {this.props.children}
//             // </button>
//             <button>
//                 {this.props.children}
//             </button>
//         );
//       }
//     }

class Button extends Component {

    constructor(props) {
        super(props)

        this.state = {
            graphType: "barGraph"
        }
    }

    clickHanderL() {
        this.setState({
            graphType: "lineGraph"
        })
        // console.log("Clicked. --> " + this);
    }
    clickHanderG() {
        this.setState({
            graphType: "barGraph"
        })
        // console.log("Clicked. --> " + this);
    }
    render() {
        return (
        <div>
            <div>{this.state.graphType}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click!</button> */}
        <button onClick={() => this.clickHanderL()}>Line Graph</button>
        <button onClick={() => this.clickHanderG()}>Bar Graph</button>
        </div>
    )
}
}
export default Button;
 
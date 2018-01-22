import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Calculator extends React.Component{
	constructor(){
		super();
		this.state = {
			currentValue: "0",
		}
		this.inputDigit.bind(this);
	}

	inputDigit(digit){
		console.log('The link was clicked.');
		this.setState({
			if(this.state.currentValue!=0){
			currentValue : this.state.currentValue + digit
			}
			else{
				currentValue : digit
			}
		});
	}

	render(){
		return(
			<div>
				<h1 align="center">React Calculator </h1>
				<table align="center">
					<thead>
						<tr>
							<td colspan = "4"> <input type = "text" name = "display" id = "display" value={this.state.currentValue} disabled/> </td>
						</tr>
					</thead>
					<tr>
						<td><button className = "calculator-key-one" onClick ={() => this.inputDigit(1)}> 1 </button> </td>
						<td><button className = "calculator-key-two" onClick ={() => this.inputDigit(2)}> 2 </button></td>
						<td><button className = "calculator-key-three" onClick ={() => this.inputDigit(3)}> 3 </button></td>
						<td><button className = "calculator-key-plus" /*onClick ={() => this.inputDigit(1)}*/> + </button></td>
					</tr>
					<tr>
						<td><button className = "calculator-key-four" onClick ={() => this.inputDigit(4)}> 4 </button> </td>
						<td><button className = "calculator-key-five" onClick ={() => this.inputDigit(5)}> 5 </button></td>
						<td><button className = "calculator-key-six" onClick ={() => this.inputDigit(6)}> 6 </button></td>
						<td><button className = "calculator-key-minus" /*onClick ={() => this.inputDigit(1)}*/> - </button></td>
					</tr>
					<tr>
						<td><button className = "calculator-key-seven" onClick ={() => this.inputDigit(7)}> 7 </button> </td>
						<td><button className = "calculator-key-eight" onClick ={() => this.inputDigit(8)}> 8 </button></td>
						<td><button className = "calculator-key-nine" onClick ={() => this.inputDigit(9)}> 9 </button></td>
						<td><button className = "calculator-key-multiply" /*onClick ={() => this.inputDigit(1)}*/> x </button></td>
					</tr>
					<tr>
						<td><button className = "calculator-key-clear" /*onClick ={() => this.inputDigit(1)}*/> C </button> </td>
						<td><button className = "calculator-key-zero" onClick ={() => this.inputDigit(0)}> 0 </button></td>
						<td><button className = "calculator-key-equals" /*onClick ={() => this.inputDigit(3)}*/> = </button></td>
						<td><button className = "calculator-key-divides" /*onClick ={() => this.inputDigit(1)}*/> / </button></td>
					</tr>

				</table>
			</div>
		);
	}

}

ReactDOM.render(<Calculator />, document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Main extends React.Component{
	render(){
		return(
			<div>
				<h1 align="center">React Calculator </h1>
				<table align="center">
					<thead>
						<tr>
							<td colspan = "4"> <input type = "text" name = "display" id = "display" disabled/> </td>
						</tr>
					</thead>
					<tr>
						<td><input type = "button" name = "one" value = "1"/> </td>
						<td><input type = "button" name = "two" value = "2"/> </td>
						<td><input type = "button" name = "three" value = "3"/> </td>
						<td><input type = "button" name = "plus" value = "+"/> </td>
					</tr>
					<tr>
						<td><input type = "button" name = "four" value = "4"/> </td>
						<td><input type = "button" name = "five" value = "5"/> </td>
						<td><input type = "button" name = "six" value = "6"/> </td>
						<td><input type = "button" name = "minus" value = "-"/> </td>
					</tr>
					<tr>
						<td><input type = "button" name = "seven" value = "7"/> </td>
						<td><input type = "button" name = "eight" value = "8"/> </td>
						<td><input type = "button" name = "nine" value = "9"/> </td>
						<td><input type = "button" name = "times" value = "x"/> </td>
					</tr>
					<tr>
						<td><input type = "button" name = "clear" value = "C"/> </td>
						<td><input type = "button" name = "zero" value = "0"/> </td>
						<td><input type = "button" name = "equals" value = "="/> </td>
						<td><input type = "button" name = "divides" value = "/"/> </td>
					</tr>

				</table>
			</div>
		);
	}

}

ReactDOM.render(<Main />, document.getElementById('root'));


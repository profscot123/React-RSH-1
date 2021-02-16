import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"

// const element = <h1>Hello from Create React App</h1>

// ReactDOM.render(element, document.getElementById("root"))

//component file
import TodoContainer from "./functionBased/components/TodoContainer"
//stylesheet
import "./functionBased/App.css"

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<TodoContainer />
		</BrowserRouter>
	</React.StrictMode>, 
	document.getElementById("root"))
	
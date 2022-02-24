import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";

function App() {
	return (
		<Router>
			<HeaderComponent />
			<div className="container">
				<Switch>
					<Route exact path="/" component={ListEmployeeComponent} />
					<Route path="/employees" component={ListEmployeeComponent} />
					<Route path="/add-employee" component={CreateEmployeeComponent} />
				</Switch>
			</div>
			<FooterComponent />
		</Router>
	);
}

export default App;

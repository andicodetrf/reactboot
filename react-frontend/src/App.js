import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";

function App() {
	return (
		<Router>
			<HeaderComponent />
			<div className="container">
				<Switch>
					<Route path="/" component={ListEmployeeComponent} />
					<Route path="/employees" component={ListEmployeeComponent} />
				</Switch>
			</div>
			<FooterComponent />
		</Router>
	);
}

export default App;

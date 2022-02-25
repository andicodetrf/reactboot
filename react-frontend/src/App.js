import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmployeeDetailsComponent from "./components/EmployeeDetailsComponent";
import EmployeeFormComponent from "./components/EmployeeFormComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import EmployeeService from "./services/EmployeeService";

function App() {
	return (
		<Router>
			<HeaderComponent />
			<div className="container">
				<Switch>
					<Route exact path="/" component={ListEmployeeComponent} />
					<Route path="/employees" component={ListEmployeeComponent} />
					<Route
						path="/add-employee"
						component={(props) => (
							<EmployeeFormComponent
								header={"Add Employee"}
								apiHandler={EmployeeService.createEmployee}
								{...props}
							/>
						)}
					/>
					<Route
						path="/view-employee/:id"
						component={EmployeeDetailsComponent}
					/>
					<Route
						path="/update-employee/:id"
						component={(props) => (
							<>
								<EmployeeDetailsComponent {...props} />
								<EmployeeFormComponent
									header={"Update Employee Details"}
									apiHandler={EmployeeService.updateEmployee}
									{...props}
								/>
							</>
						)}
					/>
				</Switch>
			</div>
			<FooterComponent />
		</Router>
	);
}

export default App;

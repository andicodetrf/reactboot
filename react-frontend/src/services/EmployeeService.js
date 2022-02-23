import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";
class EmployeeService {
	getEmployees() {
		const res = axios.get(EMPLOYEE_API_BASE_URL);

		return res;
	}
}

export default new EmployeeService();

import axios from "axios";
import { IdTypes, IEmployee } from "../types";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";
class EmployeeService {
	getEmployees() {
		return axios.get(EMPLOYEE_API_BASE_URL);
	}

	createEmployee(employee: IEmployee) {
		return axios.post(EMPLOYEE_API_BASE_URL, employee);
	}

	getEmployeeById(id: IdTypes) {
		return axios.get(`${EMPLOYEE_API_BASE_URL}/${id}`);
	}

	updateEmployee(employeeWithId: IEmployee) {
		const id = employeeWithId.id;
		return axios.put(`${EMPLOYEE_API_BASE_URL}/${id}`, employeeWithId);
	}

	deleteEmployee(id: IdTypes) {
		return axios.delete(`${EMPLOYEE_API_BASE_URL}/${id}`);
	}
}

export default new EmployeeService();

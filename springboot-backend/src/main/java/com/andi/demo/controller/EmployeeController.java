package com.andi.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.andi.demo.exception.ResourceNotFoundException;
import com.andi.demo.model.Employee;
import com.andi.demo.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
	
	//inject repo here via autowired
	@Autowired
	private EmployeeRepository employeeRepository;
	
	
	//get all employees GET http://localhost:8080/api/v1/employees
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		System.out.println("get all employees api");
		return employeeRepository.findAll();
	}
	
	//create employee
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	
	
	//get employee by id
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
		Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("id not found: " + id));
		return ResponseEntity.ok(employee);
	}
	
	
	//update employee details
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails){
		employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("id not found: " + id));
		Employee savedRecord = employeeRepository.save(employeeDetails);
		return ResponseEntity.ok(savedRecord);
	}
	
	
	//delete employee by id
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployeeById(@PathVariable Long id){
		Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("id not found: " + id));
		employeeRepository.delete(employee);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}
	
}

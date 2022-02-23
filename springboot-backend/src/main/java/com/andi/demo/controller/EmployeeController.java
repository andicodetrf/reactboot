package com.andi.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
	
}

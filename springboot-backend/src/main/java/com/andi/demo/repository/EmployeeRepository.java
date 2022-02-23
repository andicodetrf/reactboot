package com.andi.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.andi.demo.model.Employee;


//JpaRepo exposes all the DB methods eg find, save, delete
//<class, id (primary key)> 
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
	
	
}

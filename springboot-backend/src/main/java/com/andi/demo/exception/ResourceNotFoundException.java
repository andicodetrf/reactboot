package com.andi.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


//custom exception - when the record doesnt exist in db, api will return http status not found to client
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
	
	//it is good practice to provide the serialVersionUID value and update it after changes to the class 
	//so that we can have control over the serialization/deserialization process and to avoid unwanted incompatibility 
	private static final long serialVersionUID = 1L;
	
	public ResourceNotFoundException(String message) {
		super(message);
	}
}

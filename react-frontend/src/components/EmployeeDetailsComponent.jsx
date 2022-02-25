import React, { useState, useEffect } from 'react'
import EmployeeService from '../services/EmployeeService'

const EmployeeDetailsComponent = (props) => {

    const [employeeData, setEmployeeData] = useState({})

    useEffect(() => {
        if (props.match.params) {
            EmployeeService.getEmployeeById(props.match.params.id).then((res) => {
                setEmployeeData(res.data)
            })
        }
    }, [])
    return (
        <div className="container">

            <div className="col-md-4 offset-md-4 offset-md-4 text-center">
                <h2>Employee Details:</h2>
                <hr />
                <div>First Name: {employeeData.firstName}</div>
                <div>Last Name: {employeeData.lastName}</div>
                <div>Email: {employeeData.emailId}</div>
            </div>
            <hr />
        </div>
    )
}

export default EmployeeDetailsComponent
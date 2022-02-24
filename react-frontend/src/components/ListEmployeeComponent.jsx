import React, { useState, useEffect } from 'react'
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponent = (props) => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        EmployeeService.getEmployees()
            .then(res => {
                res.data && setEmployees(res.data)
            })
            .catch((err) => {
                console.log('err:', err)
            })
    }, [])

    const addEmployee = () => {
        console.log(props.history)
        props.history.push('/add-employee')
    }

    return (
        <div>
            <h2 className="text-center">Employees List</h2>
            <div>
                <button className="btn btn-primary" onClick={addEmployee}>
                    Add Employee
                </button>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp) => (
                            <tr key={emp.id}>
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.emailId}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default ListEmployeeComponent
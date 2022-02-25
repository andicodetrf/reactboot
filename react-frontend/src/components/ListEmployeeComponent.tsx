import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'
import { IdTypes, IEmployee } from '../types'


const ListEmployeeComponent = (props: RouteComponentProps) => {

    const [employees, setEmployees] = useState<IEmployee[]>([])

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
        props.history.push('/add-employee')
    }

    const editEmployee = (id: IdTypes) => {
        props.history.push(`/update-employee/${id}`)
    }

    const deleteEmployee = async (id: IdTypes) => {
        const { data } = await EmployeeService.deleteEmployee(id)
        if (data?.deleted) {
            const updatedList = employees.filter((emp: IEmployee) => emp.id !== id)
            setEmployees(updatedList)
        }
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
                        {employees.map((emp: IEmployee) => (
                            <tr key={emp.id}>
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.emailId}</td>

                                <td>
                                    <button className="btn btn-info" onClick={() => editEmployee(emp.id)}>Update</button>
                                    <button className="btn btn-danger" onClick={() => deleteEmployee(emp.id)}>Delete</button>
                                    <button className="btn btn-warning" onClick={() => props.history.push(`/view-employee/${emp.id}`)}>View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default ListEmployeeComponent
import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService'

const CreateEmployeeComponent = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')

    const firstNameHandler = (e) => {
        setFirstName(e.target.value)
    }

    const lastNameHandler = (e) => {
        setLastName(e.target.value)
    }

    const emailIdHandler = (e) => {
        setEmailId(e.target.value)
    }

    // const clearInputHandler = () => {
    //     setFirstName('')
    //     setLastName('')
    //     setEmailId('')
    // }

    const saveEmployeeHandler = async (e) => {
        e.preventDefault()
        const employeeData = {
            firstName,
            lastName,
            emailId
        }
        const res = await EmployeeService.createEmployee(employeeData)
        console.log(res.data)
        props.history.push('/employees')
        // clearInputHandler()
    }

    const cancelHandler = () => {
        props.history.push('/employees')
    }



    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Employee</h3>
                        <div className="card-body">
                            <form action="">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" name="firstName" placeholder='First Name' className="form-control" value={firstName} onChange={firstNameHandler} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" name="lastName" placeholder='Last Name' className="form-control" value={lastName} onChange={lastNameHandler} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="emailId">Email Id</label>
                                    <input type="email" required name="emailId" placeholder='Email Id' className="form-control" value={emailId} onChange={emailIdHandler} />
                                </div>
                                <button className="btn btn-success" onClick={saveEmployeeHandler}>Save</button>
                                <button className="btn btn-danger" onClick={cancelHandler}>Cancel</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateEmployeeComponent
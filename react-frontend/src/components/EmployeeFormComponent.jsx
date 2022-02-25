import React, { useState } from 'react'
import { useEffect } from 'react'

const EmployeeFormComponent = (props) => {
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

    const saveEmployeeHandler = async (e) => {
        e.preventDefault()
        let employeeData = {
            firstName,
            lastName,
            emailId
        }

        employeeData = props.match.params ? { ...employeeData, ...props.match.params } : employeeData
        await props.apiHandler(employeeData)
        props.history.push('/employees')
    }

    const cancelHandler = () => {
        props.history.push('/employees')
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">{props.header}</h3>
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

export default EmployeeFormComponent
import React, { Component, useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import withNavigateHook from '../components/withNavigateHook';
import { useParams } from 'react-router-dom';

const CreateEmployeeComponent = (props) => {
    const { id } = useParams();
    const [employee, setEmployee] = useState({});
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        if (id === '_add') {
            return;
        } else {
            EmployeeService.getEmployeeById(id).then((res) => {
                setEmployee(res.data);
                setFirstName(employee.firstName);
                setLastName(employee.lastName);
                setEmailId(employee.emailId);
                setAddress(employee.address);
            });
        }
    }, [employee.firstName, employee.lastName, employee.emailId, employee.address]);

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        console.log('employee => ' + JSON.stringify(employee));
        if (id === '_add') {
            let employee = {
                firstName: firstName,
                lastName: lastName,
                emailId: emailId,
                address: address
            }
            EmployeeService.createEmployee(employee).then(res => {
                props.navigation('/employees');
            });
        } else {
            let updateEmployee = {
                firstName: firstName,
                lastName: lastName,
                emailId: emailId,
                address: address
            }
            EmployeeService.updateEmployee(updateEmployee, id).then(res => {
                props.navigation('/employees');
            });
        }
    }

    const changeFirstNameHandler = (event) => {
        //this.setState({ firstName: event.target.value });
        setFirstName(event.target.value);
    }

    const changeLastNameHandler = (event) => {
        //this.setState({ lastName: event.target.value });
        setLastName(event.target.value);
    }

    const changeEmailHandler = (event) => {
        //this.setState({ emailId: event.target.value });
        setEmailId(event.target.value);
    }

    const changeAddressHandler = (event) => {
        //this.setState({ address: event.target.value });
        setAddress(event.target.value);
    }

    const cancel = () => {
        //this.props.history.push('/employees');
        props.navigation('/employees');
    }

    function getTitle() {
        if (id === '_add') {
            return <h3 className="text-center">Add Employee</h3>
        } else {
            return <h3 className="text-center">Update Employee</h3>
        }
    }
    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            getTitle()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> First Name: </label>
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                        value={firstName} onChange={changeFirstNameHandler} />
                                </div>
                                <div className="form-group">
                                    <label> Last Name: </label>
                                    <input placeholder="Last Name" name="lastName" className="form-control"
                                        value={lastName} onChange={changeLastNameHandler} />
                                </div>
                                <div className="form-group">
                                    <label> Email Id: </label>
                                    <input placeholder="Email Address" name="emailId" className="form-control"
                                        value={emailId} onChange={changeEmailHandler} />
                                </div>
                                <div className="form-group">
                                    <label>Address: </label>
                                    <input placeholder="Address" name="address" className="form-control"
                                        value={address} onChange={changeAddressHandler} />
                                </div>

                                <button className="btn btn-success" onClick={saveOrUpdateEmployee}>Save</button>
                                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default withNavigateHook(CreateEmployeeComponent);
import React, { Component, useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import withNavigateHook from '../components/withNavigateHook';
import { useParams } from 'react-router-dom';

const ViewEmployeeComponent = (props) => {
    const { id } = useParams();
    const [employee, setEmployee] = useState({});

    //on page load api will call in useEffect
    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((res) => {
            setEmployee(res.data);
        });
    }, []);

    const goBack = () => {
        props.navigation("/employees");
    }


    return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Employee Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Employee First Name: </label>
                            <div> {employee.firstName}</div>
                        </div>
                        <div className="row">
                            <label> Employee Last Name: </label>
                            <div> {employee.lastName}</div>
                        </div>
                        <div className="row">
                            <label> Employee Email ID: </label>
                            <div> {employee.emailId}</div>
                        </div>
                        <div className="row">
                            <label> Address: </label>
                            <div> {employee.address}</div>
                        </div>
                    </div>
                <button
                    className='btn btn-primary'
                    onClick={goBack}
                    style={{marginLeft: "10px"}}
                    >GoBack</button>
                </div>
            </div>
        )
}

export default withNavigateHook(ViewEmployeeComponent);
import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import withNavigateHook from '../components/withNavigateHook';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({ 
                employees: this.state.employees.filter(employee => employee.id !== id) 
            });
        });
    }
    viewEmployee(id) {
        //this.props.history.push(`/view-employee/${id}`);
        this.props.navigation(`/view-employee/${id}`);
    }
    editEmployee(id) {
        //this.props.history.push(`/add-employee/${id}`);
        this.props.navigation(`/add-employee/${id}`);
    }

    goToEmployee() {
        //this.props.history.push(`/view-employee/${id}`);
        this.props.navigation(`/home`);
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ 
                employees: res.data 
            });
        });
    }

    addEmployee() {
        //this.props.history.push('/add-employee/_add');
        this.props.navigation('/add-employee/_add');
    }

    addUser() {
        //this.props.history.push('/add-employee/_add');
        this.props.navigation('/add-user');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Employee First Name</th>
                                <th> Employee Last Name</th>
                                <th> Employee Email Id</th>
                                <th> Address</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td> {employee.firstName} </td>
                                            <td> {employee.lastName}</td>
                                            <td> {employee.emailId}</td>
                                            <td> {employee.address}</td>
                                            <td>
                                                <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.goToEmployee()} className="btn btn-info">Emp </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.addUser()} className="btn btn-info">AddUser </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default withNavigateHook(ListEmployeeComponent);
import React, { Fragment } from "react";
import { Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import withNavigateHook from '../components/withNavigateHook';
import {Link, useNavigate} from 'react-router-dom';

function Home(props) {

    let history = useNavigate();

    const goBack = () => {
        props.navigation("/employees");
    }

    const handleDelete = (id) => {
        var index = Employees.map(function(e) {
            return e.id
        }).indexOf(id);

        Employees.splice(index, 1);
        history('/home');
    }

    return(
        <Fragment>
            <div style={{margin: "10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                Employees.length > 0 ? Employees.map(employee =>
                                        <tr>
                                            <td>{employee.Name}</td>
                                            <td> {employee.Age} </td>
                                            <td>
                                                <Link to={`/edit`}>
                                                <Button onClick={() => alert(employee.id)}>Edit</Button>&nbsp;
                                                </Link>
                                                <Button onClick={() => handleDelete(employee.id)}>DELETE</Button>
                                            </td>                                                                         
                                        </tr>
                                ) : "No data available"
                            }
                    </tbody>
                </Table>
                <br>
                </br>
                   <Link className='d-grid gap-2' to="/create">
                        <Button size="lg">Create</Button>
                   </Link><br></br>       
                <Button
                    className='btn btn-primary'
                    onClick={goBack}
                    style={{marginLeft: "10px"}}
                    >GoBack</Button>
            </div>
        </Fragment>
    )
}

export default withNavigateHook(Home);
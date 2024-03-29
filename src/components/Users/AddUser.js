import React, {useRef, useState} from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import withNavigateHook from '../../components/withNavigateHook';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values.",
            });
            return;
        }
        if(+enteredAge<1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (>0).",
            });
            return;
        }
        props.onAddUser(enteredName, enteredAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };
    const errorHandler = () => {
        setError(null);
    }

    // const goBack = () => {
    //     props.navigation("/employees");
    // }

    return (
        <Wrapper>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                    />
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">UserName</label>
                    <input
                        id="username"
                        type="text"
                        ref={nameInputRef}
                        ></input>
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        ref={ageInputRef}
                        ></input>
                        <Button type="submit">Add User</Button>
                </form>
                {/* <button
                        className='btn btn-primary'
                        onClick={goBack}
                        style={{marginLeft: "10px"}}
                        >GoBack</button> */}
            </Card>
        </Wrapper>
    );
};
export default withNavigateHook(AddUser);
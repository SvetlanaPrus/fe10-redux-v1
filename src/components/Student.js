import React, {useState} from 'react'
// import PropTypes from 'prop-types'
import {connect} from "react-redux";

function Student(props) {

    const {student} = props;

    const [newStudentName, setNewStudentName] = useState('')
    const [validation, setValidation] = useState([])

    const addButtonHandler = () => {
        const newStudentObject = {id: Math.random(), name: newStudentName, age: 10}
        props.addStudent(newStudentObject)
        setNewStudentName('')
    }

    function validate(currentValue){
        const valMessage = [];
        if (currentValue.match(/[0-9,.<>;]/g)) valMessage.push("*Use only letters");
        setValidation(valMessage);
    }

    const onChange = (e) => {
        setNewStudentName(e.target.value)
        validate(e.target.value)
    }

    return (
        <div>
            <h4>Student's data:</h4>
            <input
                className="form-control w-25 d-md-inline"
                type="text"
                value={newStudentName} onChange={onChange}
            />
            <button
                type="button"
                className="btn btn-primary m-lg-4"
                onClick={addButtonHandler}>Add Student</button>

            {newStudentName && validation.map(el => <h6 className="text-danger mt-2"> {el} </h6>)}

            {
                student.map(el => <li key={el.id}>{el.name}</li>)
            }
        </div>
    )
}

const mapStateToProps = (store) => ({
    student: store.studentReducer.student,
})

const mapDispatchToProps = (dispatch) => ({
    addStudent: (newStudentObject) => dispatch({
        type: 'ADD_STUDENT',
        payload: {...newStudentObject}
    })
})


// Student.propTypes = {
//     name: PropTypes.string.isRequired
// }

export default connect(mapStateToProps, mapDispatchToProps)(Student);



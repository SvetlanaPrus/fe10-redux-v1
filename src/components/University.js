import React, {useState} from 'react'
// import PropTypes from 'prop-types'
import {connect} from "react-redux";

function University(props) {

    const {university} = props;

    const [newCourse, setNewCourse] = useState('')
    const [validation, setValidation] = useState([])

    function addButtonHandler(){
        const newCourseObject = {id: Math.random(), course: newCourse, subject: "Russian"}
        props.addCourse(newCourseObject);
        setNewCourse('')
    }

    function validate(currentValue){
    const validationMessage = [];
    if (currentValue > 5 || currentValue < 0) validationMessage.push("*Only from 1 to 5")
        setValidation(validationMessage)
    }

    const onChange = (e) => {
        setNewCourse(e.target.value+'')
        validate(e.target.value)
    }


    return (
        <div>
            <h4>University's data:</h4>
            <input
                className="form-control w-25 d-md-inline"
                type="number"
                id="inputCourse"
                value={newCourse} onChange={onChange}/>

            <button
                className="btn btn-primary m-lg-4"
                type="button"
                onClick={addButtonHandler}> Add Course </button>

            {validation.map(el => <h6 className="text-danger mt-2"> {el} </h6>)}

            {
                university.map(el =>
                    <li key={el.id}>
                        Course: {el.course} /
                        Subject: {el.subject}
                    </li>)
            }
        </div>
    )
}

const mapStateToProps = (store) => ({
    university: store.universityReducer.university
})

const mapDispatchToProps = (dispatch) => ({
    addCourse: (newCourseObject) => dispatch({
        type: 'ADD_COURSE',
        payload: {...newCourseObject}
    })
})


// University.propTypes = {
//     course: PropTypes.number.isRequired,
// }

export default connect(mapStateToProps, mapDispatchToProps)(University);


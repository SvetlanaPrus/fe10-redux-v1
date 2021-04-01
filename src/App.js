import React from 'react'
import {connect} from "react-redux";
import Student from "./components/Student";
import University from "./components/University";


function App() {

    return (
        <div className="container m-4">
            <h1> Redux - ver.1 </h1>
            <h6> *Practice building React application with Redux. </h6>
            <div className="row mt-4">
                <div className="col-sm">
                    <Student/>
                </div>
                <div className="col-sm">
                    <University/>
                </div>
            </div>
        </div>
    )
}

// const mapStateToProps = (store) => ({
//     student: store.studentReducer.student,
//     university: store.universityReducer.university
// })

export default connect(null)(App);
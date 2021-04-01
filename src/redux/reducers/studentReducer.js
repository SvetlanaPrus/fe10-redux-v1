const initialState = {
    student: [
        {id: 1, name: "Svetlana", age: 15},
    ]
}

const studentReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_STUDENT':
            return {
                ...state, student: [...state.student, {...action.payload}]
            }
        default:
            return state
    }
}

export default studentReducer;
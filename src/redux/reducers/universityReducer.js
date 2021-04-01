const initialState = {
    university: [
        {id: 1, course: "1", subject: "Russian"}
    ]
}

const universityReducer = (state=initialState, action)  => {
    switch (action.type){
        case 'ADD_COURSE':
            return {
                ...state,
                university: [...state.university, {...action.payload}],
            }
        default:
            return state
    }
}

export default universityReducer;
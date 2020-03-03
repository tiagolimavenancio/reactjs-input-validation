const initialState = {
    input: {
        label: '',
        name: '',
        type: '',
        placeholder: '',  
        value: '',   
        message: '',
        rules: {
            isRequired: true
        }
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'INPUT_UPDATE_VALUES':
            return { 
                ...state,
                input: {
                    ...state.input,                    
                }
            }

        default:
            return state
    }
}
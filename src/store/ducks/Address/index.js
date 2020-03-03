import Validates from '../../../utils/Validates'

const initialState = {
    form: {
        street: {
            label: 'Street',
            name: 'street',
            type: 'text', 
            placeholder: 'Street', 
            value: '',   
            message: '',
            rules: {
                isRequired: true
            }
        },
        complement: {
            label: 'Complement',
            name: 'complement',
            type: 'text', 
            placeholder: 'Complement',  
            value: '',   
            message: '',
            rules: {
                isRequired: true
            }
        },
        number: {
            label: 'Number',
            name: 'number',
            type: 'number', 
            placeholder: 'Number',  
            value: '',   
            message: '',
            rules: {
                isRequired: true                
            }
        },
        neighborhood: {
            label: 'Neighborhood',
            name: 'neighborhood',
            type: 'text', 
            placeholder: 'Neighborhood',  
            value: '',   
            message: '',
            rules: {
                isRequired: true
            }
        },
        zipcode: {
            label: 'Zipcode',
            name: 'zipcode',
            type: 'text',             
            placeholder: 'Zipcode',  
            value: '',   
            message: '',
            rules: {
                isRequired: true,
                isCEP: true
            }
        }
    }, 
    errors: {}
}

export default (state = initialState, action) => {
    switch (action.type) { 
        case 'ADDRESS_FORM_UPDATE_VALUES': {                           
            return { 
                ...state,  
                form: {
                    ...state.form,
                    [action.name]: {
                        ...state.form[action.name],
                        value: action.value,                      
                        message: Validates.validate(action.value, state.form[action.name].rules).message
                    },                                       
                },
                errors: {
                    ...state.errors,
                    [action.name]: {
                        message: Validates.validate(action.value, state.form[action.name].rules).message 
                    }
                }               
            }                        
        }

        case 'SUBMIT_ADDRESS_FORM': {               
            const validation = Validates.validator(state.form);                        
            return { 
                ...state,
                ...state.form, 
                errors: {
                    ...state.errors,
                    ...validation
                }                                
            }         
        }

        default:
            return state;
    }
}
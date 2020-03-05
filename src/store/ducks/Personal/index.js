import Validates from '@/utils/Validates'

const initialState = {
    form: { 
        username: {
            label: 'Username',
            name: 'username',
            type: 'text',
            placeholder: 'Username',  
            value: '',   
            rules: {
                isRequired: true
            }
        },
        email: {
            label: 'Email',
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            value: '',
            rules: {
                isRequired: true,
                isEmail: true,
            }            
        },
        password: {
            label: 'Password',
            name: 'password',
            type: 'password',
            placeholder: 'Password',  
            value: '', 
            rules: {
                isRequired: true,
                minLength: 6
            }
        },
        confirmPassword: {
            label: 'Password Confirmation',
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Password Confirmation', 
            value: '',  
            rules: {
                isRequired: true,
                minLength: 6
            }
        },        
    },
    errors: {}
}

export default (state = initialState, action) => {
    switch (action.type) { 
        
        case 'PERSONAL_FORM_UPDATE_VALUES': {                           
            return { 
                ...state,
                form: {
                    ...state.form,
                    [action.name]: {
                        ...state.form[action.name],
                        value: action.value,
                    },                                       
                },
                errors: {
                    ...state.errors,
                    [action.name]: {
                        isValid: Validates.validate(action.value, state.form[action.name].rules).isValid,
                        message: Validates.validate(action.value, state.form[action.name].rules).message 
                    }
                } 
            }                        
        }

        case 'SUBMIT_PERSONAL_FORM': {   
            const validation = Validates.validator(action.payload);                        
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
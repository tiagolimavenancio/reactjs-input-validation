import pages from '@/constants/pages';

const initialState = {    
    first: 0,
    index: 0,
    pages,    
}

export default (state = initialState, action) => {
    switch (action.type) {                   
        case 'NEXT_STEP': {            
            return { 
                ...state,                
                index: state.index >= state.pages.length-1 ? state.pages.length : state.index + 1                
            }  
        }                    
        case 'PREVIOUS_STEP': {            
            return { 
                ...state,
                index: state.index <= state.first ? state.first : state.index - 1,                
            } 
        }                                 
        default:
            return state
    }
}
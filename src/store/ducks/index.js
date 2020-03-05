import { combineReducers } from 'redux';

import steps from './Steps';
import personal from './Personal';
import address from './Address';

export default combineReducers({
    steps,
    personal,
    address    
})

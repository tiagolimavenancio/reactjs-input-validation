import { combineReducers } from 'redux';

import personal from './Personal';
import address from './Address';

export default combineReducers({
    personal,
    address    
})

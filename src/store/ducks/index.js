import { combineReducers } from 'redux';

import personal from './Personal';
import address from './Address';
import textinput from './TextInput';

export default combineReducers({
    personal,
    address,
    textinput
})

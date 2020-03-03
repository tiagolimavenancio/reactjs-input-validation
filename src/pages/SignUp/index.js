import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PersonalActions from '../../store/ducks/Personal/actions';
import * as AddressActions from '../../store/ducks/Address/actions';

import PersonalForm from '../../components/PersonalForm';
import AddressForm from '../../components/AddressForm';

import {
    Container,
    SubmitButton
} from './styled';

function SignUp(props) {
    const { personal, address } = props;
    
    function onSubmit(e) {
        e.preventDefault();                
        props.onSubmitPersonal(personal.form); 
        props.onSubmitAddress(address.form);                       
    }

    return (
        <Container>
            <PersonalForm />
            <AddressForm />
            <SubmitButton type='submit' onClick={onSubmit}>Submit</SubmitButton>
        </Container>
    );
}

function mapStateToProps(state) {
    const { personal, address } = state;
    return { personal, address }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, PersonalActions, AddressActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

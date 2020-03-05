import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as StepsActions from '../../store/ducks/Steps/actions';
import * as PersonalActions from '../../store/ducks/Personal/actions';
import * as AddressActions from '../../store/ducks/Address/actions';

import {
    Container,
    SectionButtons,
    PreviousButton,
    NextButton
} from './styles';

function SignUp(props) {  
    const { personal, address, steps } = props;

    function onNext(e) {  
        e.preventDefault();  
        onSubmit()      
    }

    function onPrevious(e) {
        e.preventDefault();
        props.previous();
    }

    function onNextButton() {           
        if(steps.index < steps.pages.length-1) 
            return <NextButton onClick={onNext}>Next</NextButton> 
                   
        return null;
    }

    function onPreviousButton() {                
        if(steps.index !== steps.first) 
            return <PreviousButton onClick={onPrevious}>Previous</PreviousButton>            
                
        return null;
    }

    function onSubmit() {
        switch (steps.index) {
            case 0: {                                
                props.onSubmitPersonal(personal.form);                                  
                const isValid = Object.keys(personal.errors).length && Object.keys(personal.errors).every((key) => personal.errors[key].isValid)                
                isValid && props.next();                                             
                break;
            }
            case 1: {
                props.onSubmitAddress(address.form);
                const isValid = Object.keys(address.errors).length && Object.keys(address.errors).every((key) => address.errors[key].isValid)                           
                isValid && props.next();               
                break;
            }
            case 2:
                break;            
            default:
                return null;
        }
        
    }
   
    return (
        <Container>
            { steps.pages[steps.index].component }           
            <SectionButtons>
                { onPreviousButton() }
                { onNextButton() }  
            </SectionButtons>          
        </Container>
    );
}

function mapStateToProps(state) {
    const { personal, address, steps } = state;
    return { personal, address, steps }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, PersonalActions, AddressActions, StepsActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

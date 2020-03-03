import React from 'react';

import {
  FormGroup,
  Input,
  Label,
  SpanError
} from './styled';

function TextInput(props) {    

  function handleChange(event) {
    const { name, value } = event.target;
    props.onHandleChange(name, value);
  }

  return (
    <FormGroup>
      <Label>{ props.label }</Label>
      <Input { ...props } onChange={handleChange} />        
      { props.errors[props.name] && <SpanError>{ props.errors[props.name].message }</SpanError> }                
    </FormGroup>
  );
}

export default TextInput;
import React, { useEffect } from 'react';

import {
  FormGroup,
  Input,
  Label,
  SpanError
} from './styled';

function FieldGroup(props) {  
  return (
    <FormGroup>
      <Label>{ props.label }</Label>
      <Input { ...props } />        
      { props.errors[props.name] && <SpanError>{ props.errors[props.name].message }</SpanError> }                
    </FormGroup>
  );
}

export default FieldGroup;
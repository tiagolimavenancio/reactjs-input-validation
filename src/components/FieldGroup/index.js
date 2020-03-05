import React, { useMemo } from 'react';

import {
  FormGroup,
  Input,
  Label,
  SpanError
} from './styles';

const FieldGroup = (props) => useMemo(() => {  
  return (
    <FormGroup>
      <Label>{ props.label }</Label>
      <Input { ...props } />        
      { props.errors[props.name] && <SpanError>{ props.errors[props.name].message }</SpanError> }                
    </FormGroup>
  )
}, [props.value, props.errors[props.name]])

export default FieldGroup;
import styled from 'styled-components/macro';

export const FormGroup = styled.section`
    display: flex;
    flex-direction: column;    
    margin: 10px;
`

export const Label = styled.label`

`;

export const Input = styled.input`
    border: 1px solid ${props => props.errors[props.name] ? '#ff0000' : '#fff'};
    border-radius: 10px;
    padding: 10px;    
    width: 300px;
    box-sizing: border-box;
`;

export const SpanError = styled.span`
    font-size: 12px;
    color: #ff0000
`
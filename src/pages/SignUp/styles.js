import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
`;

export const SectionButtons = styled.section`
    display: flex;    
    justify-content: center;
    align-items: space-around;
`;

export const DefaultButton = styled.button`
    margin: 0.5rem;
    padding: 1rem 1.5rem;
    font-size: 1rem;
    border-radius: 3px;
    color: white;
`;

export const PreviousButton = styled(DefaultButton)`
   background: grey;
   border: 2px solid grey;   
`;

export const NextButton = styled(DefaultButton)`
   background: royalblue;
   border: 2px solid royalblue;
`;

export const SubmitButton = styled.button`
    margin: 1rem;
    padding: 1rem 1.5rem;
    background: royalblue;
    font-size: 1em;
    border-radius: 5px;
    border: 2px solid royalblue;
    color: white;
`;
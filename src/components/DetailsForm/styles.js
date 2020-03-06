import styled from 'styled-components/macro';

export const Content = styled.div`
    display: flex;
    flex-direction: column;    
    overflow: hidden;
    padding: 25px 12px 18px;
    margin: 48px auto 0;
    width: 70rem;
    font-family: Quicksand, Arial, Helvetica, sans-serif;
    background: #149414;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.05), 0 0px 40px rgba(255, 255, 255, 0.08);
    border-radius: 5px;
`;

export const Header = styled.header`
    padding-top: 32px;
    padding-bottom: 32px;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

export const Body = styled.section`
    padding-right: 32px;
    padding-left: 32px;
`;

export const Subtitle = styled.h6`
    padding: 0;
    margin: 0;
`;

export const Text = styled.p`
    font-weight: 300;
    font-size: 0.85rem;
`




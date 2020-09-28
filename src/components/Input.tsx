import React, { useState } from 'react';
import styled from 'styled-components';
import { Theme } from '../styles';

type Props = {}

const Input: React.FC<Props> = ({ }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e: React.FormEvent<HTMLInputElement>): void => setInputValue(e.currentTarget.value);

    const onGenerate = (): void => {
        console.log('submitting:')
        console.log(inputValue)
    }

    return (
        <Container>
            <TextField onChange={onInputChange} />
            <Button onClick={onGenerate}>Generate</Button>
        </Container>
    )
}

const Container: any = styled.div`
  align-self: center;
  display: grid;
  height: fit-content;
  justify-items: center;
  text-align: center; 
  width: 60%;
`;

const TextField: any = styled.textarea`
    background-color: #e6e6fa;
    border: 25px;
    border-radius: 25px;
    font-family: Comic Neue;
    font-size: 17px;
    height: 20vh
    margin: 1em;
    padding: 1em;
    width: 100%;
`;

const Button: any = styled.button`
    background-color: ${Theme.color.red};
    border-radius: 25px;
    border: none;
    color: ${Theme.color.white};
    cursor: pointer;
    font-family: ${Theme.font.secondary};
    font-size: 2vw;
    height: 10vh;
    transition: all 0.2s;
    width: 30vh;

    &:hover  {
        background-color: ${Theme.color.white};
        color: ${Theme.color.blue}
    }
`;

export default Input
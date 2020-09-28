import React from 'react';
import styled from 'styled-components';
import Input from './Input';

import { Theme } from '../styles';

type Props = {}

const Main: React.FC<Props> = ({ }) => {

  return (
   <Container>
     <Heading>
       Hemingnay
     </Heading>
     <SubHeading>
       An extremely bad fanfiction generator
     </SubHeading>
     <Input />
   </Container> 
  )
}

const Col: any = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 5px;
`;

const Row: any = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const Container: any = styled.div`
  display: grid;
  background-color: ${Theme.color.blue};
  grid-template-rows: 1fr 1fr 6fr;
  justify-items: center;
  text-align: center; 
  width: 100%;
`;

const Heading: any = styled.div`
  color: ${Theme.color.yellow};
  font-family: ${Theme.font.secondary};
  font-size: 10vw;
  text-shadow: 3px 3px 0px ${Theme.color.red}
`;

const SubHeading: any = styled.div`
  color: ${Theme.color.white};
  font-size: 3vw;
`;

const Loading: any = styled.img.attrs(() => ({
  src: require('../assets/loading.svg'),
}))`
  color: ${Theme.color.secondary};
  width: 10rem;
  margin: auto;
`;

export default Main;

import styled from 'styled-components';

export const MonsterListContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;

@media screen and (max-width: 800px){
  grid-template-columns: 1fr;
}
`;
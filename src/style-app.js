import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  box-shadow: 1px 5px 5px black;
  height: 200px;
  width: 200px;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 21px;
    text-align: center;
  }

  p {
    font-weight: bold;
  }
`;

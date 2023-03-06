import styled from 'styled-components';

export const StyledResultsCircleContainer = styled.div`
  display: flex;
  color: #ffffff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(var(--violet-blue-color), var(--persian-blue-color));

  & h1 {
    font-size: 50px;
    margin-top: 10px;
  }

  & span {
    font-size: 13px; 
    font-weight: 700;
    color: #bebdffb0;
  }

`
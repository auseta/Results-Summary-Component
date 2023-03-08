import styled from 'styled-components';

export const StyledResultsCircleContainer = styled.div`
  display: flex;
  color: #ffffff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  background: linear-gradient(var(--violet-blue-color), var(--persian-blue-color));

  & h1 {
    font-size: 3.125rem;
    margin-top: 0.625rem;
  }

  & span {
    font-size: 0.813rem; 
    font-weight: 700;
    color: #bebdffb0;
  }

  @media (min-width: 1444px) {
    width: 10.5rem;
    height: 10.5rem;
  }

`
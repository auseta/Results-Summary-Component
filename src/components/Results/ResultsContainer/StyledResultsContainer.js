import styled from 'styled-components';

export const StyledResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.938rem;
  width: 100%;
  padding-top: 1.25rem; padding-bottom: 2.188rem;
  border-bottom-left-radius: 2.188rem;   border-bottom-right-radius: 2.188rem;
  background: linear-gradient(var(--light-slate-blue-color), var(--light-royal-blue-color));

  & h2 {
    margin-top: 0.625rem;
    font-size:1.375rem;
    color: #ffffff;
  }

  & span {
    text-align: center;
    color: #c8c3ff;
    font-weight: 700;
  }

  & p {
    text-align: center;
    color: #bebdff;
    font-size: 0.938rem;
    font-weight: 500;
    padding: 0 3.125rem;
  }

  @media (min-width: 1444px) {
    border-radius: 2.188rem;
    height: 100%;
    gap: 0;
    justify-content: space-around;

    & h2 {
      margin: 0;
    }
  }

`
import styled from 'styled-components';

export const StyledResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  min-height: 16.625rem;
  padding-top: 20px; padding-bottom: 35px;
  border-bottom-left-radius: 35px;   border-bottom-right-radius: 35px;
  background: linear-gradient(var(--light-slate-blue-color), var(--light-royal-blue-color));

  & h2 {
    margin-top: 10px;
    font-size: 22px;
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
    font-size: 15px;
    font-weight: 500;
    padding: 0 50px;
  }

`
import styled from 'styled-components';

export const StyledAppContainer = styled.div`
  display: flex;
  width: 23.4375rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1444px) {
    position: relative;
    flex-direction: row;
    width: 40.625rem;
    height: 28.125rem;
  }

`
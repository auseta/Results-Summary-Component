import styled from 'styled-components';

export const StyledSummaryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2.188rem;
  background-color: #ffffff;

  & h3 {
    font-size: 1.188rem;
    margin-top: 2rem;
    font-weight: 800;
    color: hsl(0, 0%, 0%, 0.75);
  }

  @media (min-width: 1444px) {
      position: relative;
      height: 100%;
      z-index: -2;
      gap: 22px;
      box-shadow: 12px 19px 35px -26px #656363bd, grey 3px -1px 10px -7px, grey -35px -1px 10px -7px, rgb(101 99 99 / 74%) -115px 19px 35px -26px ;
      border-bottom-right-radius: 30px; border-top-right-radius: 30px;
      
      ::after, ::before {
        content: "";
        position: absolute;
        z-index: -1;
        right: 343px;
        bottom: 401px;
        width: 50px;
        height: 50px;
        background-color: #ffffff;
      }

      ::before {
        bottom: 0;
      }
    }
`
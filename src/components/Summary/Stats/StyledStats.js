import styled from 'styled-components';

export const StyledStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
export const StyledStatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 8px;
  padding: 15px 15px;
  background-color: ${props => {
    if (props.category === 'Reaction') return "hsla(0.355, 100%, 67%, 0.12)"
    if (props.category === 'Memory') return "hsla(38.839, 100%, 56%, 0.12)"
    if (props.category === 'Verbal') return "hsla(166.032, 100%, 37%, 0.12)"
    if (props.category === 'Visual')return "hsla(233.846, 85%, 45%, 0.12)"
  }};

  & span {
    color: hsla(0, 0%, 0%, 0.65);
    font-weight: 800;
  }
`
export const StyledCategoryContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & h4 {
    color: ${props => {
      if (props.category === "Reaction")  return "var(--light-red-primary-color)";
      if (props.category === "Memory") return "var(--orangey-yellow-primary-color)";
      if (props.category === "Verbal") return "var(--green-teal-primary-color)";
      if (props.category === 'Visual') return "var(--cobalt-blue-primary-color)"
    }};
    font-weight: 700;
  }
`
export const StyledScoreContainer = styled.div`
  margin-right: 5px;
  display: flex;
  align-items: center;
  & h4 {
    color: hsla(240, 4%, 59%, 0.88);
    font-weight: 700;
  }
`

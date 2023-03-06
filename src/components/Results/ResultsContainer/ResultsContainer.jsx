import React from 'react'
import ResultsCircleContainer from '../ResultsCircleContainer/ResultsCircleContainer'
import { StyledResultsContainer } from './StyledResultsContainer'

const ResultsContainer = () => {
  return (
    <StyledResultsContainer>
      <span>Your Results</span>
      <ResultsCircleContainer />
      <h2>Great</h2>
      <p>You scored higher than 65% of the people who have taken these tests.</p>
    </StyledResultsContainer>
  )
}

export default ResultsContainer
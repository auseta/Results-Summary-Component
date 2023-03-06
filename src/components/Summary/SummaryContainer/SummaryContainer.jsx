import React from 'react'
import Stats from '../Stats/Stats'
import { StyledSummaryContainer } from './StyledSummaryContainer.js'

const SummaryContainer = () => {
  return (
    <StyledSummaryContainer>
      <h3>Summary</h3>
      <Stats />
    </StyledSummaryContainer>
  )
}

export default SummaryContainer
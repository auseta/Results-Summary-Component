import React from 'react'
import Stats from '../Stats/Stats'
import { StyledSummaryContainer } from './StyledSummaryContainer.js'
import { StyledButton } from '../../StyledButton'

const SummaryContainer = () => {
  return (
    <StyledSummaryContainer>
      <h3>Summary</h3>
      <Stats />
      <StyledButton>Continue</StyledButton>
    </StyledSummaryContainer>
  )
}

export default SummaryContainer
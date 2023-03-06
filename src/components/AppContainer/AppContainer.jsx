import React from 'react'
import Results from '../Results/Results'
import { StyledButton } from '../StyledButton'
import Summary from '../Summary/Summary'
import { StyledAppContainer } from './StyledAppContainer'

const AppContainer = () => {
  return (
    <StyledAppContainer>
      <Results/>
      <Summary/>
      <StyledButton>Continue</StyledButton>
    </StyledAppContainer>
  )
}

export default AppContainer
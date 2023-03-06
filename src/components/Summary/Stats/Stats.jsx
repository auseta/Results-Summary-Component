import React from 'react'
import data from '../../../data/data.js'
import { StyledCategoryContainer, StyledScoreContainer, StyledStatContainer, StyledStatsContainer } from './StyledStats'

const Stats = () => {
  return (
    <StyledStatsContainer>
      {
        data.map(dt => (
          <StyledStatContainer key={dt.category} category={dt.category} >
            <StyledCategoryContainer category={dt.category} >
              <img src={dt.icon} alt={`${dt.category}-stat`} />
              <h4>{dt.category}</h4>
            </StyledCategoryContainer>
            <StyledScoreContainer >
              <h4><span>{ dt.score }</span> / 100</h4>
            </StyledScoreContainer>
          </StyledStatContainer>
        ))
      }
    </StyledStatsContainer>
  )
}

export default Stats
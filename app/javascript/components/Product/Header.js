import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 150px 100px 50px 0;
  font-size: 18px;

  img {
    margin: auto;
    height: 80px;
    width: 140px;
  }
`
const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
`
const TotalOutOf = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
`

const Header = props => {
  const { name, image_url, avg_score } = props.attributes
  const total = props.reviews.length

  return (
    <Wrapper>
      <img src={image_url} alt={name} />
      <h1>{name}</h1>
      <div>
        <TotalReviews>{total} User Reviews</TotalReviews>
        <div className="starRating"></div>
        <TotalOutOf>{avg_score} out of 5</TotalOutOf>
      </div>
    </Wrapper>
  )
}

export default Header;

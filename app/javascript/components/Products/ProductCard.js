import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
  border: solid 1px #e3e3e3;
  background: white;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
`
const ProductLogo = styled.div`
  width: 120px;
  margin: auto;
  padding-top: 10px;

  img {
    height: 70px;
    width: 120px;
    border-radius: 3px;
  }
`

const ProductName = styled.div`
  padding: 20px 0 10px 0;
  font-weight: bold;
`

const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;

  a {
    color: white;
    background: black;
    border-radius: 4px;
    padding: 10px 50px;
    border: solid 1px black;
    width: 100%;
    text-decoration: none;
  }
`

const ProductCard = props => {
  const { image_url, name, avg_score, slug } = props.attributes

  return (
    <Card>
      <ProductLogo>
        <img src={image_url} alt={name} />
      </ProductLogo>

      <ProductName>{name}</ProductName>

      <div className="product-score">{avg_score}</div>

      <LinkWrapper>
        <Link to={`/products/${slug}`}>View Product</Link>
      </LinkWrapper>
    </Card>
  )
}

export default ProductCard

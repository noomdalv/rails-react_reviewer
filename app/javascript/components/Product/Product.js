import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const Column = styled.div`
  background: white;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: black;

  }
`
const Main = styled.div`
  padding-left: 30%;
`

const Product = props => {
  const [product, setProduct] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const slug = props.match.params.slug
    const url = `/api/v1/products/${slug}`

    axios.get(url)
    .then(resp => {
      console.log("resp = ", resp)
      setProduct(resp.data)
      setLoaded(true)
    })
    .catch(resp => console.log(resp))
  }, [])

  console.log("product = ", product)
  return (
    <Wrapper>
      <Column>
        <Main>
          {
            loaded &&
            <Header attributes={product.data.attributes} reviews={product.included} />
          }

          <div className="reviews"></div>
        </Main>
      </Column>

      <Column>
        <div className="review-form">Review form</div>
      </Column>
    </Wrapper>
  )
}

export default Product;

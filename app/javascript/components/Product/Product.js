import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import ReviewForm from './ReviewForm'
import Review from './Review'
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
  padding-left: 100px;
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
      setProduct(resp.data)
      setLoaded(true)
    })
    .catch(resp => console.log(resp))
  }, [])

  const handleChange = (e) => {
    e.preventDefault()

    setReview({ ...review, [e.target.name]: e.target.value })
    console.log(review)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const product_id = product.data.id

    axios.post("/api/v1/reviews", { review, product_id })
    .then(resp => {
      const included = [...product.included, resp.data.data]
      setProduct({ ...product, included })
      setReview({ title: "", description: "", score: 0 })
    })
    .catch(resp => console.log(resp))
  }

  const setRating = (score, e) => {
    e.preventDefault()
    setReview({ ...review, score })
  }

  let reviews
  if (loaded && product.included) {
    reviews = product.included.map((item, index) => {
      return <Review key={index} attributes={item.attributes} />
    })
  }


  console.log("product = ", product)
  return (
    <Wrapper>

      {
        loaded &&
        <Fragment>
          <Column>
            <Main>
              <Header attributes={product.data.attributes} reviews={product.included} />
              {reviews}
            </Main>
          </Column>

          <Column>
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setRating={setRating}
              attributes={product.data.attributes}
              review={review}
            />
          </Column>
        </Fragment>
      }

    </Wrapper>
  )
}

export default Product;

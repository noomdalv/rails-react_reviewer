import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import styled from 'styled-components'

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
`
const Header = styled.div`
  padding: 100px 100px 10px 100px;

  h1 {
    font-family: "Lucida Sans Unicode", sans-serif;
    font-size: 40px;
  }
`
const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("/api/v1/products.json")
    .then(resp => setProducts(resp.data.data))
    .catch(resp => console.log(resp))
  }, [products.length])

  const grid = products.map(item => {
    return <ProductCard key={item.attributes.name} attributes={item.attributes} />
  })

  return (
    <Home>
      <Header>
        <h1>REVIEW SERVICE</h1>
        <Subheader className="subheader">Reliable and accurate reviews.</Subheader>
      </Header>
      <Grid>
        {grid}
      </Grid>
    </Home>
  )
}

export default Products;

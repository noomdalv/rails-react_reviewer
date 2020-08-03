import React from 'react'
import styled from 'styled-components'
import Gray from './Stars/Gray'
import Hover from './Stars/Hover'
import Selected from './Stars/Selected'

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 18px;
  padding: 40px 0 10px 0;
  border: 1px solid #e6e6e6;
  background: white
`
const RatingBox = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;
  margin-top: 12px;

  input {
    display: none;
  }
  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-image: url("data:image/svg+xml;charset=UTF-8,${Gray}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
  }
  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Selected}")
  }
  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Hover}")
  }
`
const Field = styled.div`
  border-radius: 4px;

  input {
    width: 96%;
    min-height: 50px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 0 0 12px 0;
    padding: 12px;
  }

  textarea {
    width: 100%;
    min-height: 80px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 12px 0;
    padding: 12px;
  }
`
const Wrapper = styled.div`
  background: #fff;
  height: 100vh;
  padding: 20px;
  padding-top: 100px;
  background: black;
`
const SubmitBtn = styled.button`
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  color: white;
  background: #333;
  border-radius: 4px;
  padding: 12px;
  transition: ease-in-out 0.1s;
  border: 1px solid #fff;

  &:hover {
    background: #fff;
    color: black;
    border: 1px solid #fff;
  }
`
const Headline = styled.div`
  padding: 20px;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`
const RatingTitle = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  font-weight: bold;
`

const ReviewForm = props => {
  const ratingOptions = [5,4,3,2,1].map((score, index) => {
    return (
      <React.Fragment key={`score-${score}`}>
        <input
          type="radio"
          value={score}
          name="rating"
          checked={props.review.score == score}
          onChange={() => console.log("selected ", score )}
          id={`rating-${score}`}
        />
        <label onClick={props.setRating.bind(this, score)}></label>
      </React.Fragment>
    )
  })

  return (
    <div>
      <Wrapper>
        <form onSubmit={props.handleSubmit}>
          <Headline>Have an experience with {props.attributes.name}? <br/> Share your review!</Headline>
          <Field>
            <input
              type="text"
              name="title"
              placeholder="Add Title"
              value={props.review.title || ""}
              onChange={props.handleChange}
            />
          </Field>

          <Field>
            <input
              type="text"
              name="description"
              placeholder="Add Description"
              value={props.review.description || ""}
              onChange={props.handleChange}
            />
          </Field>

          <Field>
            <RatingContainer>
              <RatingTitle>Rate This Editor</RatingTitle>
              <RatingBox>{ratingOptions}</RatingBox>
            </RatingContainer>
          </Field>
          <SubmitBtn type="submit">Submit Your Review</SubmitBtn>
        </form>
      </Wrapper>
    </div>
  )
}

export default ReviewForm

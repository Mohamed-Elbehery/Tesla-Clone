import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      </Fade>
      <Buttons>
      <Fade bottom>
        <ButtonGroup>
          <LeftButton>
            {leftBtnText}
          </LeftButton>
          { rightBtnText && 
            <RightButton>
              {rightBtnText}
            </RightButton>
          }
        </ButtonGroup>
        </Fade>
        <DownArrow src="./images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('./images/model-s.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: ${props => `url('./images/${props.bgImage}')`};
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 265px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
`

const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.7;
`

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  cursor: pointer;
  animation: animateDown infinite 1.5s;
`

const Buttons = styled.div``
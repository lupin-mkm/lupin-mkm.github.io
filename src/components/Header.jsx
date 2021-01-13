import React from 'react'
import styled from 'styled-components'

const HeaderTag = styled.header`
  text-align: center;
  padding: 200px 0;
`

const Title = styled.h1`
  font-size: 32px;
  font-family: "Open sans", sans-serif;
`

export const Header = () => {
  return (
    <HeaderTag>
      <Title>
        <div>MKM</div>
        <div>PORTFOLIO</div>
      </Title>
    </HeaderTag>
  )
}

import React from 'react'
import styled from 'styled-components'

const ImageTag= styled.div`
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
`

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border: solid 1px black;
`

const DetailTag = styled.div`
  padding: 20px;
  text-align: center;
`

const DetailFont = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

const DescTag = styled.div`
  width: 70%;
  margin: auto;
`

const DescFont = styled.p`
`

export const Detail = ({ data }) => {
  return (
    <div id={data.title}>
      <ImageTag>
        <Image src={data.image} />
      </ImageTag>
      <DetailTag>
        <DetailFont>{data.title}</DetailFont>
      </DetailTag>
      <DescTag>
        <DescFont>{data.description}</DescFont>
      </DescTag>
    </div>
  )
}

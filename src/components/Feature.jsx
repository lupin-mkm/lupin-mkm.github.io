import React from 'react'
import { Detail } from './Detail'
import { portfolioDatas as datas } from './datas'
import styled from 'styled-components'

const FeatureTag = styled.div`
  padding: 20px 0;
`

const TitleTag = styled.div`
  text-align: center;
  padding: 20px 0;
`
const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  font-family: "Open sans", sans-serif;
`

const DetailTag = styled.div`
`

export const Feature = () => {
  return (
    <FeatureTag>
      <TitleTag id="feature">
        <Title>FEATURE</Title>
      </TitleTag>

      <DetailTag>
        {datas.map((data, index) => {
          return <Detail data={data} key={index}></Detail>
        })}
      </DetailTag>
    </FeatureTag>
  )
}

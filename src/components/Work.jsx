import React from 'react'
import { Card } from './Card'
import { portfolioDatas as datas } from './datas'
import styled from 'styled-components'

const WorkTag = styled.div`
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

const DescTag = styled.div`
  text-align: center;
  padding: 10px 0;
`

const Desc = styled.p`

`

const CardTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Work = () => {
  return (
    <WorkTag>
      <TitleTag id="work">
        <Title>WORK</Title>
      </TitleTag>
      <DescTag>
        <Desc>MKM's ぽーとふぉりおまん</Desc>
        <Desc>いちぶをのせるぜ</Desc>
      </DescTag>
      <CardTag>
        {datas.map((data, index) => {
          return <Card data={data} key={index}></Card>
        })}
      </CardTag>
    </WorkTag>
  )
}

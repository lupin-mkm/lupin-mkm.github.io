import React from 'react'
import { Detail } from './Detail'
import { portfolioDatas as datas } from './datas'

export const Feature = () => {
  return (
    <div>
      <div>
        <h2>FEATURE</h2>
      </div>

      <div>
        {datas.map((data, index) => {
          return <Detail data={data} key={index}></Detail>
        })}
      </div>
    </div>
  )
}

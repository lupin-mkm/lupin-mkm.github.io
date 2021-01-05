import React from 'react'
import { Card } from './Card'
import { portfolioDatas as datas } from './datas'

export const Work = () => {
  return (
    <div>
      <div>
        <h2>WORKS</h2>
      </div>
      <div>
        <p>MKM's ぽーとふぉりおまん</p>
        <p>いちぶをのせるぜ</p>
      </div>
      <div>
        {datas.map((data, index) => {
          return <Card data={data} key={index}></Card>
        })}
      </div>
    </div>
  )
}

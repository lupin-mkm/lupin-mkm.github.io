import React from 'react'

export const Detail = ({ data }) => {
  console.log(data)
  return (
    <div>
      <div>
        <img src={data.image} />
      </div>
      <div>
        <h5>{data.title}</h5>
      </div>
      <div>
        <p>{data.description}</p>
      </div>
    </div>
  )
}

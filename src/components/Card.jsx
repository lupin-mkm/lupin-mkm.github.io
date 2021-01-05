import React from 'react'

export const Card = ({ data }) => {
  console.log(data)
  return (
    <figure>
      <a href="#">
        <img
          src={data.image}
        />
      </a>
      <figcaption>
        <div>{data.title}</div>
        <div>
          <a href="#">Link</a>
        </div>
      </figcaption>
    </figure>
  )
}

import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from "@fortawesome/free-solid-svg-icons";

const FigTag = styled.figure`
  text-align: center;
  width: calc(100%/3);
  padding: 0 5px;
  box-sizing: border-box;
`

const Link = styled.a`
  position: relative;
  text-decoration: none;
`

const Image = styled.img`
  width: 90%;
  height: auto;
  border: solid 1px black;
`

const FigCaption = styled.figcaption`
  text-align: center;
`

export const Card = ({ data }) => {
  return (
    <FigTag>
      <Link href={`#${data.title}`}>
        <Image
          src={data.image}
        />
      </Link>
      <FigCaption>
        <div>{data.title}</div>
        <div>
          <a href={`#${data.title}`}><FontAwesomeIcon icon={faLink} /></a>
        </div>
      </FigCaption>
    </FigTag>
  )
}

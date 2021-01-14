import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ImageTag= styled.div`
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
`

const Image = styled.img`
  width: 70%;
  margin: auto;
  height: auto;
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

const settings={
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

export const Detail = ({ data }) => {
  return (
    <div id={data.title}>
      <ImageTag>
        <Slider {...settings}>
          <div>
            <Image src={data.image} />
          </div>
          <div>
            <Image src={data.image} />
          </div>
          <div>
            <Image src={data.image} />
          </div>
        </Slider>
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

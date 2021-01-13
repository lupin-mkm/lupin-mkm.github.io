import React from 'react'
import styled from 'styled-components'

const AboutTag = styled.div`
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

const MeTag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const IntroTag = styled.div`
`

const ImageTag = styled.div`
  text-align: center;
`

const Image = styled.img`
  width: 50%;
  max-width: 100%;
  height: auto;
  border-radius: 50%;
`

const Skill = styled.div`
`

const SkillTag = styled.div`
  display: flex;
  align-items: center;
`

const SkillImageTag = styled.div`
  width: 100px;
  box-sizing: border-box;
`

const SkillImage = styled.img`
  max-width: 100%;
  height: auto;
`

export const About = () => {
  return (
    <AboutTag>
      <TitleTag id="about">
        <Title>ABOUT</Title>
      </TitleTag>
      <MeTag>
        <ImageTag>
          <Image src='https://jp.images-monotaro.com/Monotaro3/pi/full/mono26600008-160729-04.jpg' />
        </ImageTag>
        <IntroTag>
          <p>おねがいしますのいち</p>
          <p>おねがいしますのに</p>
          <p>お願いしますのさん</p>
        </IntroTag>

        <Skill>
          <SkillTag>
            <SkillImageTag>
              <SkillImage src='./images/python.png' alt="python" />
            </SkillImageTag>
            <div>
              <h4>python3</h4>
              <p>そこそこ使えます</p>
            </div>
          </SkillTag>
          <SkillTag>
            <SkillImageTag>
              <SkillImage src="./images/django.png" alt="django" />
            </SkillImageTag>
            <div>
              <h4>djnago</h4>
              <p>そこそこ使えます</p>
            </div>
          </SkillTag>

          <SkillTag>
            <SkillImageTag>
              <SkillImage src="./images/javascript.png" alt="javascript" />
            </SkillImageTag>
            <div>
              <h4>javascript</h4>
              <p>そこそこ使えます</p>
            </div>
          </SkillTag>
        </Skill>
      </MeTag>
    </AboutTag>
  )
}

import React from 'react'
import styled from 'styled-components'

const ContactTag = styled.div`
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

const MailTag = styled.div`
  text-align: center;
`

const MailAbout = styled.p`
  font-size: 18px;
`

const Mail = styled.p`
  margin-top: 4px;
  font-size: 18px;
  font-weight: bold;
`

export const Contact = () => {
  return (
    <ContactTag>
      <TitleTag id="contact">
        <Title>CONTACT</Title>
      </TitleTag>

      <MailTag>
        <MailAbout>お問い合わせはメールでお願いします</MailAbout>
        <Mail>taikiinu@gmail.com</Mail>
      </MailTag>

    </ContactTag>
  )
}

import React from 'react'
import styled from 'styled-components'

const NavBarStyle = styled.nav`
  text-align: center;
  background-color: green;
`

const ListStyle = styled.ul`
  list-style: none;
`

const ListItemStyle = styled.li`
  float: center;
`

export const NavBar = () => {
  return (
    <NavBarStyle>
      <ListStyle>
        <ListItemStyle>WORKS</ListItemStyle>
        <ListItemStyle>FEATURE</ListItemStyle>
        <ListItemStyle>ABOUT</ListItemStyle>
        <ListItemStyle>CONTACT</ListItemStyle>
      </ListStyle>
    </NavBarStyle>
  )
}

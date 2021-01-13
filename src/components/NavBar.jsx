import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: gray;
  padding: 15px;
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
`

const ListItem = styled.li`
  padding: 15px 20px;
  font-family: "Open sans", sans-serif;
`

const Link = styled.a`
  position: relative;
  text-decoration: none;
  color: white;

  &:before{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background-color: black;
    transform: scale(0, 1);
    transform-origin: center;
    transition: transform .2s;
  }

  &:hover:before {
    transform: scale(1);
  }
`

export const NavBar = () => {
  return (
    <Nav>
      <List>
        <ListItem>
          <Link href="#work">WORK</Link>
        </ListItem>
        <ListItem>
          <Link href="#feature">FEATURE</Link>
        </ListItem>
        <ListItem>
          <Link href="#about">ABOUT</Link>
        </ListItem>
        <ListItem>
          <Link href="#contact">CONTACT</Link>
        </ListItem>
      </List>
    </Nav>
  )
}

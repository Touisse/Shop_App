import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcements = () => {
  return (
    <Container>
        Super Deals ! Free Shipping on orders over 500 DH !!
    </Container>
  )
}

export default Announcements;
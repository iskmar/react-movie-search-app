import React from "react";
import styled from "styled-components";

const DivWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: darkslategrey;
  //justify-content: space-between;
  color: white;
  height: 200px;
`;
const Logo = styled.img`
  width: 400px;
  height: 200px;
  align-self: flex-start;
  position: absolute;
  top: 0;
  left: 0;
`;
const Title = styled.p`
  font-size: 40px;
  align-self: center;
  margin: 0 auto;
`;

function NavBar() {
  return (
    <DivWrapper>
      <Logo src="https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png"></Logo>
      <Title>MOVIE SEARCH APP</Title>
    </DivWrapper>
  );
}

export default NavBar;

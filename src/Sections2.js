import React from "react";
import styled from "styled-components";

function Sections({ title, text, image }) {
  return (
    <SectionsContainer>
      <img src={image} alt="" />
      <SectionText>
        <h1>{title}</h1>
        <p>{text}</p>
      </SectionText>
    </SectionsContainer>
  );
}

export default Sections;

const SectionsContainer = styled.div`
  justify-content: center;
  background-color: black;
  color: white;
  height: 50vh;
  padding-top: 25px;
  display: flex;
  align-items: center;

  > img {
    height: 300px;
    margin-left: 30px;
  }
`;
const SectionText = styled.div`
  text-align: center;
  margin-top: 60px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  > h1 {
    font-size: 50px;
    margin-bottom: 20px;
  }
  > p {
    font-size: 25px;
    margin-top: 20px;
  }
`;

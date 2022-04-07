import React from "react";
import styled from "styled-components";

function Sections({ title, text, image, source }) {
  return (
    <SectionsContainer>
      <SectionText>
        <h1>{title}</h1>
        <p>{text}</p>
      </SectionText>
      <ImgNvd>
        <VideoNT
          className="our-story-card-video"
          autoPlay
          playsinline
          muted
          loop
        >
          <source src={source} type="video/mp4" />
        </VideoNT>
        <img src={image} alt="" />
      </ImgNvd>
    </SectionsContainer>
  );
}

export default Sections;

const ImgNvd = styled.div`
  position: relative;
  display: flex;
  > img {
    height: 300px;
    z-index: 600;
  }
`;

const VideoNT = styled.video`
  width: 300px;
  height: 290px;
  position: absolute;
  left: 45px;

  z-index: 500;
`;
// 333.77 x 187.33
const SectionsContainer = styled.div`
  justify-content: center;
  background-color: black;
  color: white;
  height: 50vh;
  padding-top: 25px;
  display: flex;
  align-items: center;
`;
const SectionText = styled.div`
  text-align: center;
  align-items: center;
  margin-top: 60px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  > h1 {
    font-size: 50px;
    margin-bottom: 20px;
  }
  > p {
    text-align: center;
    font-size: 25px;
    margin-top: 20px;
  }
`;

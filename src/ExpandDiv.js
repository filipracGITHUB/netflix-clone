import styled from "@emotion/styled";
import React from "react";

function ExpandDiv({ text }) {
  return (
    <DivContainer>
      <p>{text}</p>
    </DivContainer>
  );
}

export default ExpandDiv;

const DivContainer = styled.div`
  display: inline-block;
  text-align: left;
  align-items: center;
  width: 590px;
  background-color: #303030;
  padding: 30px;
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 10px;
  animation: fadeInAnimation ease 0.8s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

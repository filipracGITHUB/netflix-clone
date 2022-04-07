import styled from "styled-components";
import React from "react";

function Info() {
  return (
    <InfoCon>
      <div>
        <ul>
          <h4>
            <a href="#">Questions? Contact us.</a>
          </h4>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Speed Test</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Cookie Prefrences</a>
          </li>
          <li>
            <a href="#">Legal Notices</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Ways to Watch</a>
          </li>
          <li>
            <a href="#">Corporate Information</a>
          </li>
          <li>
            <a href="#">Only on Netflix</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Media Center</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </InfoCon>
  );
}

export default Info;

const InfoCon = styled.div`
  background-color: black;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > h4 {
    padding-top: 80px;
    padding-left: 80px;
    display: flex;
  }
  > div > ul > h4 > a {
    color: #757575;
    padding-left: 20px;
    padding-bottom: 10px;

    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
  > div {
    height: 30vh;
    display: flex;
    padding: 10px;
    color: #757575;
    background-color: black;
  }

  > div > ul > li > a {
    color: #757575;
    padding: 20px;
    text-decoration: none;
    font-size: 13px;
    :hover {
      text-decoration: underline;
    }
  }

  > div > ul {
    list-style: none;
    padding-left: 30px;
    align-items: center;
    padding-left: 50px;
    margin-bottom: 100px;
  }
  > div > ul > li {
    padding-bottom: 10px;
    text-align: -webkit-match-parent;
  }
  > div > ul > h4 {
    margin-bottom: 10px;
  }
`;

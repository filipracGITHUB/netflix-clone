import styled from "@emotion/styled";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ExpandDiv from "./ExpandDiv";
import CloseIcon from "@mui/icons-material/Close";

function Li({ onClick, title, icon }) {
  return (
    <li onClick={onClick}>
      {title}
      {icon}
    </li>
  );
}

function Card() {
  const [expand, setExpand] = useState(false);
  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const [expand3, setExpand3] = useState(false);
  const [expand4, setExpand4] = useState(false);
  const [expand5, setExpand5] = useState(false);

  const expandCard = () => {
    if (expand) {
      setExpand(false);
    } else {
      setExpand(true);
    }
  };
  const expandCard1 = () => {
    if (expand1) {
      setExpand1(false);
    } else {
      setExpand1(true);
    }
  };
  const expandCard2 = () => {
    if (expand2) {
      setExpand2(false);
    } else {
      setExpand2(true);
    }
  };
  const expandCard3 = () => {
    if (expand3) {
      setExpand3(false);
    } else {
      setExpand3(true);
    }
  };
  const expandCard4 = () => {
    if (expand4) {
      setExpand4(false);
    } else {
      setExpand4(true);
    }
  };
  const expandCard5 = () => {
    if (expand5) {
      setExpand5(false);
    } else {
      setExpand5(true);
    }
  };

  return (
    <CardCon>
      <h1>Frequently Asked Questions</h1>
      <ul>
        <Li
          onClick={expandCard}
          title="What is netflix?"
          icon={expand ? <CloseIcon /> : <AddIcon />}
        ></Li>
        {expand && (
          <ExpandDiv
            text="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

               You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
          />
        )}
        <Li
          onClick={expandCard1}
          title="How much does Netflix cost?"
          icon={expand1 ? <CloseIcon /> : <AddIcon />}
        ></Li>
        {expand1 && (
          <ExpandDiv text="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts." />
        )}
        <Li
          onClick={expandCard2}
          title="Where can I watch?"
          icon={expand2 ? <CloseIcon /> : <AddIcon />}
        ></Li>
        {expand2 && (
          <ExpandDiv
            text="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

          You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
          />
        )}
        <Li
          onClick={expandCard3}
          title="How do I cancel?"
          icon={expand3 ? <CloseIcon /> : <AddIcon />}
        ></Li>
        {expand3 && (
          <ExpandDiv text="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime." />
        )}
        <Li
          onClick={expandCard4}
          title="What can I watch on Netflix?"
          icon={expand4 ? <CloseIcon /> : <AddIcon />}
        ></Li>
        {expand4 && (
          <ExpandDiv text="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want." />
        )}
        <Li
          onClick={expandCard5}
          title="Is Netflix good for kids?"
          icon={expand5 ? <CloseIcon /> : <AddIcon />}
        ></Li>
        {expand5 && (
          <ExpandDiv
            text="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

          Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
          />
        )}
      </ul>
    </CardCon>
  );
}

export default Card;

const CardCon = styled.div`
  align-items: center;
  background-color: black;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  object-fit: contain;

  > ul > li {
    padding: 0.8em 2.2em 0.8em 1.2em;
    margin-bottom: 10px;
    font-weight: 400;
    position: relative;
    width: 100%;
    border: 0;
    text-decoration: none;
    background-color: #303030;
    padding: 25px;
    width: 600px;
    font-size: 20px;
    justify-content: space-between;
    display: flex;
    font-size: 25px;

    :hover {
      cursor: pointer;
    }
  }
  > ul {
    list-style: none;
  }
  > h1 {
    font-size: 50px;
    font-weight: 500;
    margin-bottom: 30px;
  }
  padding-top: 20px;
  padding-bottom: 150px;
`;

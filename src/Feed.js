import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Row from "./Row";
import requests from "./request.js";
import Banner from "./Banner";
import "./Feed.css";

function Feed() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  const user = useSelector(selectUser);
  return (
    <>
      <FeedContainer>
        <Banner />
        <div className={`nav ${show && "nav__black"}`}>
          <HeaderLeft>
            <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt="Netflix-logo"
            />
          </HeaderLeft>
          <HeaderRight>
            <HeaderAvatar onClick={logoutOfApp}>
              {user?.email[0].toUpperCase()}
            </HeaderAvatar>
          </HeaderRight>
        </div>
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending now" fetchUrl={requests.fetchTrending} />
        <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </FeedContainer>
    </>
  );
}

export default Feed;

const FeedContainer = styled.div``;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const HeaderLeft = styled.div`
  > img {
    width: 145px;
    height: 45px;
    padding-left: 50px;
    padding-top: 20px;
    z-index: 999;
  }
`;

const HeaderRight = styled.div`
  padding-right: 50px;
  padding-top: 20px;
  > Button {
    background-color: red;
    color: white;
    z-index: 999;
  }
`;

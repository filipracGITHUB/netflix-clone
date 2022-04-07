import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./request";
import styled from "styled-components";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <BannerHeader
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <BannerContents>
        <h1>{movie?.original_title || movie?.name || movie?.original_name}</h1>
        <BannerButtons>
          <BannerButton>Play</BannerButton>
          <BannerButton>My List</BannerButton>
        </BannerButtons>
        <BannerDesc>{truncate(movie?.overview)}</BannerDesc>
      </BannerContents>
      <BannerBottom></BannerBottom>
    </BannerHeader>
  );
}

export default Banner;

const BannerHeader = styled.header`
  color: white;
  object-fit: contain;
  height: 448px;
`;

const BannerContents = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
  > h1 {
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
  }
`;

const BannerButtons = styled.div``;

const BannerButton = styled.button`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: 1rem;
  padding-top: 0.5rem;
  background-color: rgba(51, 51, 51, 0.5);
  padding-bottom: 0.5rem;
  :hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;

const BannerDesc = styled.p`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  max-width: 360px;
  height: 80px;
`;
const BannerBottom = styled.div`
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;

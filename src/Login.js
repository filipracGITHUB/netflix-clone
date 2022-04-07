import React from "react";
import SectionHeader from "./SectionHeader";
import Sections from "./Sections";
import Sections2 from "./Sections2";
import Sections1 from "./Sections1";
import styled from "styled-components";
import Card from "./Card";
import Info from "./Info";

function Login() {
  return (
    <div>
      <SectionHeader
        title="Unlimited movies, TV shows, and more."
        text="Watch anywhere. Cancel anytime."
      />

      <Line></Line>
      <Sections
        image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        title="Enjoy on your TV."
        text="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        source="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
      />

      <Line></Line>
      <Sections2
        image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        title="Download your shows to watch offline."
        text="Save your favorites easily and always have something to watch."
        source=""
      />

      <Line></Line>
      <Sections1
        image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
        title="Watch everywhere."
        text="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
        source="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
      />

      <Line></Line>
      <Sections2
        image="https://occ-0-3924-1490.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd"
        title="Create profiles for kids."
        text="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        source=""
      />
      <Line></Line>
      <Card />
      <Line></Line>
      <Info />
    </div>
  );
}

export default Login;

const Line = styled.div`
  background-color: #353535;
  height: 8px;
`;

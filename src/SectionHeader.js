import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function SectionHeader({ title, text }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginToApp = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            email: email,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
              })
            );
          });
      })
      .catch((error) => alert(error));
    setEmail(() => "");
    setPassword(() => "");
  };
  return (
    <>
      <SectionContainer>
        <HeaderContainer>
          <HeaderLeft>
            <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt=""
            />
          </HeaderLeft>
          <HeaderRight>
            <Button onClick={loginToApp}>Sign In</Button>
          </HeaderRight>
        </HeaderContainer>
        <SectionTitle>
          <h1>{title}</h1>
          <p>{text}</p>
          <Ptag>Ready to watch? Enter your email to create an account.</Ptag>
        </SectionTitle>
        <InputBut>
          <form>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Email adress"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="Password"
            />
            <Button type="submit" onClick={register}>
              REGISTER
              <ArrowRightIcon />
            </Button>
          </form>
        </InputBut>
      </SectionContainer>
    </>
  );
}

export default SectionHeader;

const Ptag = styled.p`
  color: white;
  font-size: large !important;
  font-weight: bold;
`;

const SectionContainer = styled.div`
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg");
  height: 70vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;
const SectionTitle = styled.div`
  text-align: center;
  > h1 {
    font-size: 50px;
    color: white;
    text-align: center;
    padding-top: 200px;
  }
  p {
    color: white;

    padding-top: 20px;
    font-size: 25px;
  }
`;
const InputBut = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
  > form > input {
    text-align: left;
    height: 62.5px;
    width: 250px;
    outline: none;
    font-size: large;
  }
  > form > Button {
    color: white;
    background-color: red;
    padding: 18px;
    font-size: large;
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

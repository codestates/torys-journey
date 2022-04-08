import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginTitle = styled.h2`
  color: gold;
  font-size: 2em;
  width: 80%;
  margin: 0;
`;

export const LoginModal = styled.div`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
`;

export const InputModal = styled.div`
  width: 40%;
  height: 60%;
  padding: 2em;
  border-radius: 1em;
  background: white;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
`;

export const IdInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 30px;
  margin-top: 10px;
  padding: 0px;
  border: 1px solid lightgrey;
  outline: none;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  border: 0;
  outline: none;
  border-radius: 30px;
  background: gold;
  font-size: 1.2rem;
  letter-spacing: 2px;
  margin-top: 10px;
`;

export const OauthLogo = styled.img`
  width: 70px;
  margin: 10px;
`;

export const CloseButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
export const CloseButton = styled.button`
  width: 10%;
  height: 50%;
`;

export const OauthLoginDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const CloseLoginDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const LoginHeightDiv = styled.div`
  height: 70%;
`;

export const EmailDiv = styled.div`
  height: 20%;
`;

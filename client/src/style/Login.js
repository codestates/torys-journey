import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginTitle = styled.h2`
  color: #73b4ac;
  font-size: 2em;
  width: 80%;

  font-family: "Nanum_bold";
  margin-top: 20px;
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
  min-width: 20%;
  min-height: 40%;
  padding: 2em;
  border-radius: 1em;
  background: white;
  display: flex;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
`;

export const IdInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 12px;
  margin-bottom: 10%;
  border: 1px solid lightgrey;
  outline: none;
  
`;

export const LoginButton = styled.button`
  width: 18%;
  height: 50px;
  border: 0;
  outline: none;
  border-radius: 6px;

  font-size: 15px;
  letter-spacing: 2px;

  &:hover {
    cursor: pointer;
  }
`;

export const OauthLogo = styled.img`
  width: 50px;
  margin: 10px;
  &:hover{}
  cursor: pointer;
`;

export const CloseButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;

  padding-right: 20px;
  width: 100%;
`;
export const CloseButton = styled.button`
  width: 10%;
  height: 50%;
`;

export const OauthLoginDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
`;

export const CloseLoginDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin-left: 20px;
  font-family: "Nanum";
`;

export const LoginHeightDiv = styled.div`
  height: 80%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const LoginDiv = styled.div`
  width: 50%;
`;

export const LoginLogo = styled.img`
  width: 70%;
`;

export const LogoDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignUpDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const ButtonDiv = styled.div`
  width: 70%;
  justify-content: space-around;
  display: flex;
  margin-bottom: 10px;
`;
export const Error = styled.div`
  color: red;
  font-size: 15px;
`;

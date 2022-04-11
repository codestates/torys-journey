import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginTitle = styled.h2`
  color: #73b4ac;
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
  min-width: 20%;
  min-height: 60%;
  padding: 2em;
  border-radius: 1em;
  background: white;
  display: flex;
  flex-direction: column;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
`;

export const IdInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 15px;

  margin-bottom: 10%;
  padding: 0px;
  border: 1px solid lightgrey;
  outline: none;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  border: 0;
  outline: none;
  border-radius: 15px;
  background: #73b4ac;
  font-size: 1.2rem;
  letter-spacing: 2px;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const SignUpButton = styled.button`
  width: 100%;
  height: 30px;
  border: 0;
  outline: none;
  border-radius: 8px;
  background-color: white;
  border: 2px solid #73b4ac;
  font-size: 0.9rem;
  letter-spacing: 2px;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const OauthLogo = styled.img`
  width: 70px;
  margin: 10px;
  &:hover {
    cursor: pointer;
  }
`;
export const OauthGoogleLogo = styled.img`
  width: 70px;
  margin: 10px;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
`;

export const CloseButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;
export const CloseButton = styled.button`
  width: 10%;
  height: 50%;
`;

export const OauthLoginDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 10%;
`;

export const CloseLoginDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10%;
`;

export const LoginHeightDiv = styled.div`
  height: 70%;
`;

export const LoginDiv = styled.div`
  width: 100%;
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
  margin-top: 10%;
  display: flex;
  justify-content: flex-end;
`;

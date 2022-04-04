import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginTitle = styled.h2`
  color: gold;
  font-size: 2em;
`;

export const LoginModal = styled.div`
  z-index: 1;
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
  width: 40vw;
  height: 60vh;
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

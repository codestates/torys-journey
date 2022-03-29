import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignUpTitle = styled.h2`
  color: gold;
  fontsize: 2em;
`;

export const SignUpModal = styled.div`
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

export const FormModal = styled.form`
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

export const SignUpInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 30px;
  margin-top: 10px;
  padding: 0px;
  border: 1px solid lightgrey;
  outline: none;
`;

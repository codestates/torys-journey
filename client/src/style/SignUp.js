import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignUpTitle = styled.h2`
  color: gold;
  font-size: 2em;
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


   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SignUpInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 10px;

  padding: 0px;
  border: 1px solid lightgrey;
  outline: none;
`;
export const SignupButton= styled.div`
border: 1px solid yellowgreen;
border-radius: 5px;
padding: 5px;
margin-top: 10px;
&:hover{
  cursor: pointer;
  background-color: yellowgreen;
}
`
export const Error = styled.div`
  color:red;
  font-size: 15px;
`;

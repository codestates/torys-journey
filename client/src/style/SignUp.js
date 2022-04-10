import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignUpTitle = styled.h2`
  color: #73B3AC;
  font-size: 2.2em;
  font-weight: bold;
  font-family: "Nanum_bold";
  display: flex;
  justify-content: space-between;
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
  font-family: "Nanum";
`;

export const FormModal = styled.form`
  min-width: 20%;
  min-height: 60%;
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
  border-radius: 10px;
  padding: 0px;
  border: 1px solid lightgrey;
  outline: none;
`;
export const Button = styled.button`
margin-top: 30px;
background-color: #73B3AC;
width: 40%;
padding: 10px;
border-radius: 7px;
font-size: 20px;
&:hover{
  cursor: pointer;
  background-color: #73B9AC;
}

`
export const Container = styled.div`
margin-top: 50px;
`

export const Error = styled.div`
color: red;
font-size: 15px;
`

export const LastError = styled.div`
color: red;
font-size: 15px;
margin-top: 10px;
`

export const CloseButton = styled.div`
color:black;
font-size: 20px;
&:hover{
  cursor: pointer;
}
`
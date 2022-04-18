import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignUpTitle = styled.h2`
  color: #73b3ac;
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
  padding-left: 15px;

  padding: 0px;
  border: 1px solid lightgrey;
  outline: none;
`;
export const Button = styled.button`
  margin-top: 30px;
  background-color: #73b3ac;
  width: 40%;
  padding: 10px;
  border-radius: 7px;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
    background-color: #73b9ac;
  }
`;

export const MapButton = styled.button`
  border: 3px solid #73b3ac;
  background-color: white;
  width: 15%;
  border-radius: 7px;
  font-size: 1rem;
  margin-bottom: 10px;
  font-family: "Nanum";
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background-color: #73b9ac;
  }
`;
export const Container = styled.div`
  margin-top: 50px;
`;

export const Error = styled.div`
  color: red;
  font-size: 15px;
`;

export const LastError = styled.div`
  color: red;
  font-size: 15px;
  margin-top: 10px;
`;

export const CloseButton = styled.div`
  color: black;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const SignUpDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const WritingMainDiv = styled.div`
  margin-top: 5%;
  margin-left: 15%;
  margin-right: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
`;

export const WritingTitle = styled.h2`
  display: flex;
  flex-direction: column;
  font-family: "Nanum";
  height: 30px;
  width: 70%;
  padding-bottom: 10px;
  border-bottom: 3px solid #73b4ac;
  font-size: 25px;
`;

export const WritingDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const WritingInput = styled.input`
  height: 50px;
  border-radius: 30px;
  margin-top: 10px;
  border: 1px solid lightgrey;
  outline: none;
  word-wrap: break-word;
`;

export const WritingTextarea = styled.textarea`
  height: 50px;
  border-radius: 30px;
  margin-top: 10px;
  border: 1px solid lightgrey;
  outline: none;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
`;

export const WritingButton = styled.button`
  margin: 10px;
  width: 30%;
  height: 50px;
  border: 0;
  outline: none;
  border-radius: 30px;
  background: #73b4ac;
  font-size: 1.2rem;
  letter-spacing: 2px;
  margin-top: 10px;
  transition: 0.5s;
  &:hover {
    background-color: #87ceeb;
    cursor: pointer;
    color: white;
  }
`;

export const LinkTag = styled(Link)`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  width: 30%;
  height: 50px;
  border: 0;
  outline: none;
  border-radius: 30px;
  background: #73b4ac;
  font-size: 1.2rem;

  letter-spacing: 2px;
  margin-top: 10px;
  transition: 0.5s;
  &:hover {
    background-color: #87ceeb;
    cursor: pointer;
    color: white;
  }
`;

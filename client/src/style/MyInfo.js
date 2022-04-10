import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Nanum";
  height: 30px;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 3px solid #73b4ac;
  font-size: 25px;
`;

export const Input = styled.div`
  justify-content: center;
  width: 35%;
  font-size: 17px;
  font-family: "Nanum";
  margin-top: 5%;
`;

export const InputTag = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  font-family: "Nanum";
`;
export const ButtonContainer = styled.div`
  display: flex;
`;
export const Button = styled.div`
  margin-left: 120px;
  margin-top: 8%;
  align-items: center;
  border-radius: 3px;
  font-family: "Nanum";
  font-size: 17px;
  border: 2px solid #fab74d;
  padding: 7px;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);

    color: black;
  }
`;
export const MyInfoInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 8px;

  padding: 0px;
  border: 1px solid lightgrey;
  outline: none;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 15px;
`;

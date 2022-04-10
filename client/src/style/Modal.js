import styled from "styled-components";

export const ModalBack = styled.div`
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
  font-family: "Nanum";
`;
export const PostModal = styled.div`
  min-width: 30%;
  min-height: 20%;
  background: white;
  border-radius: 3px;
  font-family: "Nanum";
`;

export const ReviewModal = styled.div`
  min-width: 30%;
  min-height: 27%;
  background: white;
`;

export const ChangeModal = styled.div`
  min-width: 20%;
  min-height: 20%;
  background: white;
`;

export const WritingModal = styled.div`
  min-width: 30%;
  min-height: 50%;
  background: white;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  height: 40px;
  background-color: #73b4ac;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;

`;

export const Content = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-family: "Nanum_bold";

`;

export const Input = styled.input`
  font-size: 1.2rem;
  width: 60%;
  margin: 10px;
  border-radius: 5px;

`;
export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  justify-content: center;
  align-items: center;

`;

export const ReviseButton= styled.button`
  &:hover{
    cursor: pointer;
    
  }
  margin-bottom: 10px;
  `

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-right: 160px;
  margin-left: 160px;
  margin-bottom: 20px;
  &:hover{
    cursor: pointer;
  }

`;

export const ButtonDiv2 = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  margin-right: 100px;
  margin-left: 100px;
  margin-bottom: 20px;
`;

export const CloseDiv = styled.div`
&:hover{
  cursor: pointer;
}`

export const Delete = styled.h2`
font-family: "Nanum";
margin: 20px;
`

export const DeleteComment= styled.div`
margin:20px;`

export const DeleteButtonDiv = styled.div`
margin:20px;`

export const DeleteError = styled.div`
color:red;
font-size:15px;
margin:20px;`

export const YesOrNo = styled.button`
margin-left:10px;

`

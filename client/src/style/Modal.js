import styled from "styled-components";

export const ModalBack = styled.div`
  z-index: 999;
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
export const PostModal = styled.div`
  min-width: 30%;
  min-height: 20%;
  background: white;
  border-radius: 8px;
`;

export const ReviewModal = styled.div`
  min-width: 30%;
  min-height: 27%;
  background: white;
  border-radius: 8px;
`;

export const ChangeModal = styled.div`
  min-width: 20%;
  min-height: 20%;
  background: white;
  border-radius: 8px;
`;

export const WritingModal = styled.div`
  min-width: 30%;
  min-height: 50%;
  background: white;
  border-radius: 8px;
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
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-top: 5px;
`;

export const Content = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Input = styled.input`
  font-size: 1.2rem;
  width: 60%;
  margin: 10px;
  height: 30px;
  border-radius: 3px;
`;
export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  margin-right: 160px;
  margin-left: 160px;
  margin-bottom: 20px;
`;
export const ButtonHover = styled.button`
  padding: 10px;
  font-size: 15px;
  background-color: rgba(127, 199, 191, 0.3);
  border-radius: 3px;
  border: 1px solid #73b3ac;
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonDiv2 = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  margin-right: 100px;
  margin-left: 100px;
  margin-bottom: 50px;
`;
export const Close = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  font-size: 15px;
  width: 20%;
  padding: 2px;
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonDiv3 = styled.div`
  display: flex;
  justify-content: space-around;

  margin-right: 100px;
  margin-left: 100px;
  padding-bottom: 30px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
`;
export const DeleteContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const DeleteError = styled.div`
  display: flex;
  color: red;
  font-size: 15px;
  justify-content: center;
  margin-top: 10px;
`;
export const DelteInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin-left: 15%;
  margin-top: 20px;
  height: 30px;
  font-size: 20px;
`;

export const ButtonDelete = styled.button`
  &:hover {
    cursor: pointer;
  }
`;

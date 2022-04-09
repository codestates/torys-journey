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
`;
export const PostModal = styled.div`
  min-width: 30%;
  min-height: 20%;
  background: white;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
`;

export const ReviewModal = styled.div`
  min-width: 30%;
  min-height: 27%;
  background: white;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
`;

export const ChangeModal = styled.div`
  min-width: 20%;
  min-height: 20%;
  background: white;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
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
`;

export const Content = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

export const Input = styled.input`
  font-size: 1.2rem;
  width: 60%;
`;
export const InputDiv = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-right: 160px;
  margin-left: 160px;
`;

export const ButtonDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-right: 100px;
  margin-left: 100px;
`;

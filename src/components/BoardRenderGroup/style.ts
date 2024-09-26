import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;  
  left: 0; 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw; 
  height: 100vh;  
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;


export const ModalContent = styled.div`
  background: linear-gradient(52deg, #08040E -41.47%, #320C70 45.51%, #6E2ED3 116.13%);
  color: white;
  padding: 20px;
  border-radius: 20px;
  width: 375px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  
`;

export const CloseButton = styled.button`
    display: flex;
    width: 100%;
    display: flex;
    justify-content: end;
    padding-right: 10px !important;
    padding-top: 5px;
    background: transparent;
    font-size: 20px;
    cursor: pointer;
    border: none;

`;

export const FormItemTask = styled.form`
 display: flex;
 flex-direction: column;
  width: 375px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 2rem;
`

export const ItemTaskHeader = styled.div`
margin-top: -28px;
width: 375px;
height: 55px;
flex-shrink: 0;
border-radius: 20px;
padding: 0;
background: linear-gradient(62deg, #6E2ED3 -55.23%, #7853B8 -35.36%, #39186D 93.41%);
`


export const IconWrapper = styled.div`
  position: absolute;
  left: 25px;
  color: white;
  display: flex;
  padding-bottom: 10px  ;
`;

export const ContainerInput = styled.div`
  position: relative; 
  display: flex;
  align-items: center;
`;

export const InputModalTask = styled.input`
  display: flex;
  width: 342px;
  padding: 12px 12px 12px 60px;  /* Mantém espaço para o ícone */
  border-radius: 24px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(0px);
  background: transparent;
  border: 1px solid #FFF;
  color: white;
  margin-bottom: 12px;
`;

export const TextareaModalTaskDescription = styled.textarea`
  display: flex;
  width: 342px;
  padding: 12px;
  border-radius: 24px;
  padding-left: 3.5rem;
  padding-top: 1rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(0px);
  background: transparent;
  border: 1px solid #FFF;
  color: white;
  margin-bottom: 12px;
  height: 6rem;
  resize: none; 
  overflow-y: auto;
  white-space: pre-wrap; 
`;


export const ButtonModalTask = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 225px;
  padding: 12px;
  margin-top: 25px ;
  border-radius: 24px;
  border: 1px solid #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(0px);
  color: white;
  background-color: transparent;
  margin-bottom: 5px;

`
export const ButtonModalDelete = styled.button`
display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;
  padding: 12px;
  margin-top: 35px ;
  border-radius: 24px;
  border: 1px solid #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(0px);
  color: white;
  background-color: transparent;

  

`
export const SelectTask = styled.select`
  display: flex;
  width: 342px;
  padding: 12px;
  border-radius: 24px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(0px);
  background: transparent;
  border: 1px solid #FFF;
  color: white;
  font-size: 16px;
  outline: none;
  appearance: none;
  margin-bottom: 12px;
  text-align: center;
  cursor: pointer;

  option {
    background: #2e026b; 
    color: white;
  }
`;

export const ContainerSelect = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:after {
    content: "▼";
    position: absolute;
    right: 20px;
    top: 13px;
    pointer-events: none;
    color: white;
  }
`;
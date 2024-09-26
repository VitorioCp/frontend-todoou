import styled from "styled-components"

export const Container = styled.div`
  background: linear-gradient( to top right, black 70%,#7F35FF);
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
 `

export const Main = styled.div`

margin-bottom: 100px;
  
`
export const Header = styled.div`
  display: flex;
  color: white;
  padding: 0; 
  margin: 0;
  align-items: center;
  text-align: center;
  width: 21.375rem;
  margin: 0 auto;
  margin-top: 3.5rem;
  justify-content: space-between;
  font-family: 'Inter', sans-serif;

  span{
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const Logout = styled.button`
cursor: pointer;
border: none;
background: transparent;
color: white;
font-size: 1.8rem;
`

export const Nav = styled.nav`
  margin-top: 1.719rem;
  display: flex;
  align-items: center;
  justify-content: center;

  input{
   background: black;
   border: 1px solid #1F1B26;

  }
`

export const SideBarTask = styled.div`
display: flex;
width: 100%;
height: 64px;
padding: 0px 24px;
justify-content: center;
gap: 3.9rem;
align-items: center;
border: 1px solid #1F1B26;
border-top: 1px solid #1F1B26;
background: #0B090D;
position: fixed;
color: white;
bottom: 0;


@media(min-width: 1200px){
  width: 200px;
  height: 100vh;
  left: 0;
  flex-direction: column;

}

`

export const BoardTask = styled.div`
  width: 342px;
  height: auto;
  margin: 0 auto;
  flex-direction: column;
  margin-top: 2.5rem;
  border-radius: 20px;
  gap: 0px 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`

export const BoardHeader = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 368px;
  height: 40px;
  border-radius: 20px;
  border-radius: 17.27px;
  background: linear-gradient(262deg, #7F35FF 43.98%, #39186D 130.02%, #0E0024 180.56%);
  justify-content: space-between;
  align-items: center;
`
export const HeaderOption = styled.div`

    width: 134px;
    display: flex;
    gap: 20px;
    justify-content: center;
    span{
      color: white;
      display: flex;
      align-items: center;
      cursor: pointer;
      
    }
  `
export const HeaderTitle = styled.div`
  color: white;
  font-size: 18px;
  font-family: Inter;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 25px;
  cursor: pointer;
  img{
    background: black;
    border-radius: 5px;
    width: 26px;
  }
`
export const BoardItens = styled.div`
  min-width: 368px;
  padding: 0 1rem;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-family: 'Inter', sans-serif;
  display: flex;
  height: 50px;
  cursor: pointer;
  width: 100%;
  background: #39186D;
  border-radius: 11.513px;
  img{
    margin-top: 10px;
  }
`

export const ButtonFooter = styled.button`
background-color: #7F35FF;
width: 120px;
height: 40px;
border-radius: 22px;
border: none;
color: white;
cursor: pointer;
font-size: 32px;
padding: 5px;


`

export const DateBoardTask = styled.p`
color: white;
font-size: 13px;
`

export const TitleTaskBoard = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 150px;
    font-size: 0.9rem;

`





export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Estilo do conteúdo do modal
export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2{
    color: black;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
  }
`;

// Estilo do título do modal
export const ModalTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

// Estilo do formulário dentro do modal
export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// Estilo dos inputs no formulário do modal
export const ModalInput = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
`;

// Estilo do botão de criar tarefa
export const CreateTaskButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

// Estilo do botão de fechar modal
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

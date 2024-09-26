import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";
import { IoLockOpenOutline, IoSearchSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  background: linear-gradient(to top right, black 55% , #7F35FF) ;

  h1{
    color: white;
    font-size: 32px;
  }

  h2{
    margin-bottom: 2rem;
    font-family: 'Inter', sans-serif;
    color: white;
    width: 21.37rem ;
    font-size: 2.25rem;

  }

  span{
    color:#7F35FF ;
  }



`;

export const Logo = styled.div`
margin-left: 1.5rem;
width: 342px;
display: flex;
margin-top: 3.5rem;
justify-content: first baseline;
align-items: center;
text-align: center;
font-family: 'Inter', sans-serif;
margin-bottom: 4.75rem;

  h1{

    font-size: 2rem;
    font-style: normal;
  }
  span{
    margin-right: 0.75rem ;
  }
  
  
`

export const InnerContainer = styled.div<{ isRegister: boolean }>`
  display: flex;
  width: 200vw;
  transition: transform 0.5s ease-in-out;
  transform: ${({ isRegister }) => (isRegister ? "translateX(-50vw)" : "translateX(0)")};
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  box-sizing: border-box;
  gap: 0.5rem;

  h1 {
    margin-bottom: 20px;
  }

  a{
    text-decoration: none;
  }

  button {
    display: flex;
    width: 342px;
    height: 44px;
    padding: 12px 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 22px;
    background-color: #7F35FF;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 0.875rem;
    cursor: pointer;
    a{
      color: white;
      text-decoration: none;
      font-weight: bold;
      font-size: 0.875rem;
    }
  }

  p {
    margin-top: 15px;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
  }

  span{
    width: 342px;
    display: flex;
    justify-content: end;
    margin-right: 2rem;
    font-weight: 700;
    color: #7F35FF;
    margin-bottom: 1.5rem;
}
`;

export const InputContainer = styled.div`
  position: relative;
  width: 21.3rem;
`;

export const UserIcon = styled(FaRegUserCircle)`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-size: 1.5rem;
`;

export const SearchIcon = styled(IoSearchSharp )`
position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-size: 1.5rem;
`

export const EmailICon = styled(MdOutlineEmail)`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-size: 1.5rem;
`;
export const PasswordIcon = styled(IoLockOpenOutline)`
 position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-size: 1.5rem;
`

export const Input = styled.input`
  padding: 0.75rem;
  padding-left: 3rem;
  border-radius: 22px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  outline: none;
  background: linear-gradient(black 85% ,#7f35ff 1%) ;
  color: white;

  &:focus {
    border-color: #7f35ff;
  }
`;

export const Invalid = styled.p`
color: red;
font-weight: bold;
`
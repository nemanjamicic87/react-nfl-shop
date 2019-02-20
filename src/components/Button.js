import styled from 'styled-components';


export const ButtonWrapper = styled.button`
  text-transform:capitalize;
  font-size:1.2rem;
  background:transparent;
  border:0.05rem solid var(--lightGreen);
  border-color:${props => (props.cart ? "var(--mainYellow)" : "var(--lightGreen)")};
  color:${props => (props.cart ? "var(--mainYellow)" : "var(--lightGreen)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor:pointer;
  margin:0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
 &:hover{
   background:${props => (props.cart ? "var(--mainYellow)" : "var(--lightGreen)")};
   color:var(--mainWhite);
 &:focus{
   outline: none;
 }
 }
`;

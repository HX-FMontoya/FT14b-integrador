
import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
width: max-width;
padding-top: 3rem;
`

export const LogInContainer = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: transparent;
  width: 30%;
  height: fit-content;
  padding: 0.2rem;
  border-radius: 10px;
  border: 2px solid green;
  backdrop-filter: blur(5px);
  box-shadow: 10px 10px 32px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 32px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 32px 0px rgba(0, 0, 0, 0.75);
`;

export const Label = styled.label`
  font-family: Nunito;
  font-weight: 700;
  margin: 0.5rem;
  text-decoration: none;
  color: green;`

  export const Error = styled.p`
  font-family: Nunito;
  font-weight: 500;
  margin: 0.5rem;
  text-decoration: none;
  color: red;
  `
  
  export const Img = styled.img`
  max-width: 90%;
  height: 70%;
  margin-top: 0.5rem;
  border-radius: 10px; `
  
  export const Button = styled.button`
  display: inline-block;
  background-color: transparent;
  color: green;
  font-weight: 700;
  border: 2px green solid;
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  padding: 0.5rem;
  margin:  1rem;
  &:hover {
    filter: brightness(1.5);
    transform: scale(1.2);
  }
`;
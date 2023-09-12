import {useState} from 'react'
import validation from './validation'
import {Button, ButtonCont, Label, Error, Container, LogInContainer, Img} from './styledForm.js'
import style from './Form.module.css'
import gif from '../../Assets/rym-gif.gif'

export default function Form ({login}) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    let property = event.target.name; // email // password
    //console.log("property", property)
    let value = event.target.value;
    // console.log("value: ", value)
    setUserData({ ...userData, [property]: value });
    // setErrors(validation({...userData, [property]: value}))
  };

  // onBlur
  const handleBlur = (event) => {
    let property = event.target.name; // email // password
    let value = event.target.value;
    setErrors(validation({ ...userData, [property]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <Container> 
    <LogInContainer onSubmit={handleSubmit}>
    
         <Label> Email: </Label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={userData.email}
            />
            {errors.email && (
              <Error className={style.parpadea}> {errors.email} </Error>
            )}
            <Label> Password: </Label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onFocus={handleBlur}
              value={userData.password}
            />
            {errors.password && (
              <Error className={style.parpadea}> {errors.password} </Error>
            )}
          
          <Img src={gif} alt='Img de LogIn'/>
       
        <Button> LOG IN </Button>
    
    </LogInContainer>
    </Container>
  );
}
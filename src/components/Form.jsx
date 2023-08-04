import { useEffect, useState } from "react";
import validation from "../utils/validation";
export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    // name -> email password
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });

    setErrors(
      validation({
        ...userData,
        [name]: value,
      })
    );
    // const errores = <-validation(userData)
    /*  if (errores) {
          setErrors(...errors, )
      } */
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>EMAIL</label>
        <input
          name="email"
          onChange={(e) => handleChange(e)}
          value={userData.email}
          type="email"
        />
        {errors.email ? (
          <p>{errors.email}</p>
        ) : (
          <p>Gracias por ser buena onda</p>
        )}
      </div>
      <div>
        <label>PASSWORD</label>
        <input
          name="password"
          onChange={handleChange}
          value={userData.password}
          type="password"
        />
        {errors.password ? <p>{errors.password}</p> : <p>Sos buena onda</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

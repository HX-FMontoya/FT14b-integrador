export default function validation({ email, password }) {
  // input -> {email:"d", password:""}
  let error = {};
  let regexEmail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  let regexNumber = /\d/;
  let regex = new RegExp("^([A-Za-z0-9]){6,10}$");
  // regex.test(email) -> true
  if (!regexEmail.test(email)) {
    error.email = "Debe ser un email valido";
  }
  if (!email) {
    error.email = "Este campo no puede estar vacio";
  }
  if (email.length > 35) {
    error.email = "Debe tener menos de 35 caracteres";
  }
  if (!regex.test(password)) {
    error.password =
      "Debe contener al menos un numero y su longuitud debe ser entre 6 y 10 caracteres";
  }
  /* if (!regexNumber.test(password)) {
    error.password = "Debe contener al menos un numero";
  }
  if (password.length < 6 || password.length > 10) {
    error.password = "Debe tener una longitud entre 6 y 10 caracteres";
  } */
  return error; // {}
}

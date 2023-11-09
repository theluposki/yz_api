export const isRequired = (body) => {
  for (const propriedade in body) {
    if (!body[propriedade]) {
      return `${propriedade} is mandatory.`
    }
  }
}

export const validAge = (birthdate) => {
  const currentDate = new Date().getFullYear();
  const year = new Date(birthdate).getFullYear()
  const age = currentDate - year;

  if(age <= 17) {
    return `${age} cannot be underage.`
  }

  if(age > 130) {
    return `${age} maximum age reached.`
  }
};

export const isValidPassword = (password) => {
  const _regexPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{12,}$/;

  const result = _regexPassword.test(password);

  const msgError = `1. Must be at least 12 characters long.
2. Must contain at least one capital letter (A-Z).
3. It must contain at least one special character among the following: @, #, $, %, ^, &, +, =, * or !.
4. Must not contain 3 to 12 digit sequential numbers such as 123, 4567, 89012, etc.
Valid password example: MyPassw0rd#2023`;

  if (!result) return msgError
};

export const isEmail = (email) => {
  const _regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const result = _regexEmail.test(email);

  
  const msgError = "invalid email."
  
  if (!result) return msgError
};
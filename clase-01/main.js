// Comentario 1: Descripción general simple
// función que valida email
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Comentario 2: Descripción técnica con parámetro y retorno
// Valida si el string recibido tiene formato de email válido (usuario@dominio.extension)
// @param {string} email - El correo electrónico a verificar
// @returns {boolean} - true si es válido, false si no lo es
function validarEmail2(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Comentario 3: Orientado al comportamiento / caso de uso
// Verifica que el usuario haya ingresado un correo con el formato correcto
// antes de enviarlo al servidor. Evita peticiones innecesarias con datos inválidos.
function validarEmail3(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Comentario 4: Minimalista / una sola línea descriptiva
// Comprueba formato de email usando expresión regular básica
function validarEmail4(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Comentario 5: Explicación del "por qué" (razonamiento detrás de la lógica)
// Se usa regex en lugar de split('@') para cubrir casos como emails sin dominio,
// con espacios o sin extensión, que split no detectaría correctamente.
function validarEmail5(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

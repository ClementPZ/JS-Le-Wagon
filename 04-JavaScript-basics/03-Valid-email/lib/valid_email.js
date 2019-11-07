const valid = (email) => {
  // TODO: return true if the `email` string has the right pattern!
  cadena = email;
  expresion = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const check = cadena.match(expresion) ? true : false;
  return check;
};

console.log(valid("boris@paillard.dm"));

module.exports = valid; // Do not remove.

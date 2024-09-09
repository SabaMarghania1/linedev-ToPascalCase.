// "heLLo  World";
// ["heLLo", "World"];

const toPascalCase = (str) => {
  let splitted = str.split(" ");

  for (let i = 0; i < splitted.length; i++) {
    splitted[i] =
      splitted[i][0].toUpperCase() + splitted[i].slice(1).toLowerCase();
  }
  return splitted.join(" ");
};

console.log(toPascalCase("helLo WOrld"));

var fs = require("fs");

const partTwo = () => {
  const fileData = fs.readFileSync("day1/file.txt", "utf8");

  const groups = fileData.split("\n\n");

  const cumulative = [];
  let sortedCumulative = [];

  for (const group of groups) {
    const strings = group.split("\n");

    let sum = 0;

    for (const str of strings) {
      const num = parseFloat(str);

      sum += num;
    }
    cumulative.push(sum);
  }

  sortedCumulative = cumulative.sort(function (a, b) {
    return a - b;
  });
  // o callback dentro do sort pega dois valores quaisquer
  // de dentro do array (A & B).
  // se o return for um valor negativo: A virá antes de B
  // se o return for igual a zero: A e B se manteram nas
  // mesmas posições
  //se o return for um valor positivo: B virá antes de A

  console.log("SORTED_CUMULATIVE:", sortedCumulative);

  const top3 = sortedCumulative.slice(-3);
  console.log("TOP_3", top3);

  const sumtop3 = top3.reduce((x, y) => {
    return x + y;
  });
  // o valor de X funciona como um acumulador
  // o valor de Y seria cada valor do array
  // retornando a soma total de todos o elementos
  // de dentro do array

  console.log("SUM_TOP3", sumtop3);
};
export default partTwo;

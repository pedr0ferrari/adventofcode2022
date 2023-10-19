var fs = require("fs");

const partOne = () => {
  const fileData = fs.readFileSync("day1/file.txt", "utf8");

  const groups = fileData.split("\n\n");

  const cumulative = [];

  for (const group of groups) {
    const strings = group.split("\n");

    let sum = 0;

    for (const str of strings) {
      const num = parseFloat(str);

      sum += num;
    }
    cumulative.push(sum);
  }

  const melhorElfo = Math.max(...cumulative);

  console.log("melhor elfo", melhorElfo);
};
export default partOne;

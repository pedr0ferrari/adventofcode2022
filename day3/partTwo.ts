var fs = require("fs");

const partTwo = () => {
  const fileData = fs.readFileSync("day3/file.txt", "utf8");
  const lines = fileData.split("\n");

  for (let i = 0; i < lines.length; i = i + 3) {
    const group = lines.slice(i, i + 3);

    //console.log("group", group);

    for (let n = 0; n < group[0].length; n++) {
      const currentChar = group[0][n];
      //console.log("char", currentChar);

      if (group[1].includes(currentChar) && group[2].includes(currentChar)) {
        console.log("common char:", currentChar);
        break;
      }
    }
  }

  //   console.log(lines);
};

export default partTwo;

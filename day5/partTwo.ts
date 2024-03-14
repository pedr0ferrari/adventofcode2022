import fs from "fs";

const partOne = () => {
  const inputData = fs.readFileSync("day5/file.txt", "utf8");

  const [crates, moves] = inputData.split("\n\n");

  const moveLines = moves.trim().split("\n");
  console.log("moveLines", moveLines);

  const moveNumbers = moveLines.map((line) => {
    const onlyNumbers = line.match(/\d+/g)!; // ! remove a possibilidade de retornar nulo
    return onlyNumbers.map(Number);
  });
  console.log("moveNumbers", moveNumbers);

  const maguilaMudancas = (
    Ncrates: number,
    sourcePos: number,
    targetPos: number,
    stacks: string[][]
  ) => {
    let realSourcePos = sourcePos - 1;
    let realTargetPos = targetPos - 1;
    let xoblas: string[] = [];

    for (let i = 1; i <= Ncrates; i++) {
      let crateToMove = stacks[realSourcePos].shift()!;
      xoblas.push(crateToMove);

      console.log("xoblas", xoblas);
    }

    stacks[realTargetPos] = xoblas.concat(stacks[realTargetPos]);

    console.log("stacks maguila", stacks);
    return stacks;
  };

  const cratesLines = crates.split("\n");
  const lastCratesLines = cratesLines.slice(cratesLines.length - 1);
  const totalColumns = Number(lastCratesLines.toString().slice(-2));

  console.log("cratesLines", cratesLines);
  console.log("lastCratesLines", lastCratesLines);

  console.log("totalColumns", totalColumns);

  let stacks: string[][] = [];

  for (let j = 0; j < totalColumns; j++) {
    let stack: string[] = [];

    stacks.push(stack);
  }

  const containNumber = (str: string) => {
    return /[0-9]/.test(str);
  };

  const indexToChar = (index: number, totalColumns: number) => {
    let x = index;
    let y = totalColumns;

    y = x * 4 + 1;

    return y;
  };

  for (let c = 0; c < totalColumns; c++) {
    let indexConverted = indexToChar(c, totalColumns);
    //console.log("indexToChar", indexConverted);

    for (let i = 0; i < cratesLines.length; i++) {
      const elements = cratesLines[i].charAt(indexConverted).trim();

      if (elements.length !== 0 && !containNumber(elements)) {
        stacks[c].push(elements);
        stacks[c];
      }
    }

    console.log(`stack${c}`, stacks[c]);
  }

  moveNumbers.forEach((move) =>
    maguilaMudancas(move[0], move[1], move[2], stacks)
  );
  console.log("stacks", stacks);

  let resposta: string[] = [];

  stacks.forEach((stack) => resposta.push(String(stack.shift())));

  console.log("resposta", resposta.join(""));
};

export default partOne;

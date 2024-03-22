// é necessario encontrar a sequencia de
// 4 letras, sendo elas diferentes entre si
// o marker é o quarto caractere da sequencia de diferentes
// o marker + 3 anteriores sao diferentes

import fs from "fs";

const partTwo = () => {
  const inputData: string = fs.readFileSync("day6/file.txt", "utf8");

  const getMarker = (inputData: string) => {
    const inputArray = inputData.split("");
    const hasDuplicates = (arr: string[]) => arr.length !== new Set(arr).size;

    let start: number = 0;
    let end: number = 14;

    let fourLetters = inputArray.slice(start, end);

    while (hasDuplicates(fourLetters) == true) {
      start++;
      end++;

      fourLetters = inputArray.slice(start, end);
    }

    const marker = end;
    console.log("marker", marker);
    return marker;
  };

  getMarker(inputData);

  //colocar o input em um array, cada letra em uma pos
  // ler os 4 caracteres primeiros do array (0-3),
  // verificar a existencia de letras repetidas,
  // se existem repetidas, avançar uma casa (1-4) e verificar novamente
  // se não existem repetidas, marcar o ultimo char do conjunto de 4
  // como o marker
};

export default partTwo;

var fs = require("fs");

// funcao recebe rodada
// funcao retorna pontuacaoRodada
// for tem a pontuacaoTotal, somando o retorno da funcao junto a pontuacaoTotal

const day2Func = (
  rodada: string,
  pontuacaoRodada: number,
  pontuacaoTotal: number
) => {
  //EMPATES

  if (rodada == "A X") {
    pontuacaoRodada = 4;
    pontuacaoTotal += pontuacaoRodada;
  }

  if (rodada == "B Y") {
    pontuacaoRodada = 5;
    pontuacaoTotal += pontuacaoRodada;
  }

  if (rodada == "C Z") {
    pontuacaoRodada = 6;
    pontuacaoTotal += pontuacaoRodada;
  }

  //VITORIAS
  if (rodada == "C X") {
    pontuacaoRodada = 7;
    pontuacaoTotal += pontuacaoRodada;
  }
  if (rodada == "A Y") {
    pontuacaoRodada = 8;
    pontuacaoTotal += pontuacaoRodada;
  }
  if (rodada == "B Z") {
    pontuacaoRodada = 9;
    pontuacaoTotal += pontuacaoRodada;
  }

  //DERROTAS
  if (rodada == "B X") {
    pontuacaoRodada = 1;
    pontuacaoTotal += pontuacaoRodada;
  }
  if (rodada == "C Y") {
    pontuacaoRodada = 2;
    pontuacaoTotal += pontuacaoRodada;
  }
  if (rodada == "A Z") {
    pontuacaoRodada = 3;
    pontuacaoTotal += pontuacaoRodada;
  }
  return pontuacaoTotal;
};

const partTwo = () => {
  const fileData = fs.readFileSync("day2/file.txt", "utf8");

  let pontuacaoRodada: number;
  let pontuacaoTotal: number;

  let rodada: string;

  pontuacaoRodada = 0;
  pontuacaoTotal = 0;

  const rounds = fileData.split("\n");

  for (const round of rounds) {
    rodada = round.split("\n").toString();

    console.log("rodada", rodada);

    day2Func(rodada, pontuacaoRodada, pontuacaoTotal);
  }

  console.log("PONTUACAO TOTAL", pontuacaoTotal);
};

export default partTwo;

// trazer uma solucao sem manipular a parte do problema 1

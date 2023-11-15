// a bolsa tem 2 compartimento
// cada item tem seu compartimento exato

// todo item é identificado por uma UNICA letra maiuscula
// ou minuscula

// toda bolsa tem sempre o mesmo numero deo items em cada
// compartimento

// a primeira metade da string representa
// os itens do primeiro compartimento
// enquanto a segunda metade representa
// o segundo compartimento

// caracteres a-z tem priporidade 1-26
// caracteres A-Z tem prioridade 27-56

// achar o type dos compartimentos de casa bolsa e fazer
// fazer a soma dos valores descritos acima+

/////////////////////////////////////////////////////////////

// pegar a string de cada linha
// definir o tamanho da string(.lenght)
// dividir a string no meio
// comparar as duas metades e encontrar o char presente nas duas
// pegar esse dito char e encontrar seu valor conforme:
//// caracteres a-z tem priporidade 1-26
//// caracteres A-Z tem prioridade 27-56
//somar os valores de todos os chars encontrados e cada bp

var fs = require("fs");

const partOne = () => {
  const fileData = fs.readFileSync("day3/file.txt", "utf8");
  const lines = fileData.split("\n");

  const getSameChar = (str1: string, str2: string): string => {
    const chars2 = str2.split("");

    for (const char of str1) {
      let idx = chars2.findIndex((s) => s === char);

      if (idx >= 0) {
        return char;
      }
    }

    return "";
  };

  let decimalPoints = new Array();

  const result = lines.map((bp: string) => {
    const bpLength = bp.length;
    const half = bpLength / 2;

    const firstCompartment: string = bp.slice(0, half);
    const secondCompartment: string = bp.slice(half, bpLength);

    const sameChar: string = getSameChar(firstCompartment, secondCompartment);
    const charCode = sameChar.charCodeAt(0);

    decimalPoints.push(charCode);

    const azinho = "a".charCodeAt(0);
    const azao = "A".charCodeAt(0);

    const hasUpper = (char: string) => /[A-Z]/.test(char);
    const upper = hasUpper(sameChar);

    const hasLower = (char: string) => /[a-z]/.test(char);
    const lower = hasLower(sameChar);

    //console.log("UPPER:", upper);
    // console.log("LOWER:", lower);

    // console.log("azinho", charCode - azinho + 1);
    // console.log("azao", charCode - azao + 27);

    // console.log("CHAR_CODE:", charCode);
    //console.log("SAME_CHAR:", sameChar);
    // console.log("DECIMAL_POINTS:", decimalPoints);

    if (upper) {
      let up = charCode - azao + 27;
      //console.log("UP:", up);
      return up;
    }

    if (lower) {
      let low = charCode - azinho + 1;
      //console.log("LOW:", low);
      return low;
    }
  });

  const sum = result.reduce((acc: number, curr: number) => acc + curr, 0);
  console.log("sum", sum);
  // console.log("result", result);

  // console.log("half:", half);
  // console.log("bpLength:", bpLength);
  // console.log("bp:", bp);
  // console.log("1st compartment:", firstCompartment);
  // console.log("2nd compartment:", secondCompartment);
};

export default partOne;
